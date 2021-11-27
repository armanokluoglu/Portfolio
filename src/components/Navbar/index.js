import { useRef, useState, memo } from 'react';
import classNames from 'classnames';
import { NavLink, Link as RouterLink } from 'react-router-dom';
import { Transition } from 'react-transition-group';
import Monogram from 'components/Monogram';
import Icon from 'components/Icon';
import NavToggle from './NavToggle';
import ThemeToggle from './ThemeToggle';
import { useWindowSize, useAppContext } from 'hooks';
import { navLinks, socialLinks } from './navData';
import { reflow } from 'utils/transition';
import { media, msToNum, numToMs } from 'utils/style';
import { tokens } from 'components/ThemeProvider/theme';
import { blurOnMouseUp } from 'utils/focus';
import './index.css';

const NavbarIcons = () => (
  <div className="navbar__nav-icons">
    {socialLinks.map(({ label, url, icon }) => (
      <a
        key={label}
        className="navbar__nav-icon-link"
        aria-label={label}
        href={url}
        onMouseUp={blurOnMouseUp}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon className="navbar__nav-icon" icon={icon} />
      </a>
    ))}
  </div>
);

function Navbar(props) {
  const { menuOpen, dispatch } = useAppContext();
  const { location } = props;
  const [hashKey, setHashKey] = useState();
  const windowSize = useWindowSize();
  const navbarRef = useRef();
  const isMobile = windowSize.width <= media.mobile || windowSize.height <= 696;

  const handleNavClick = () => {
    setHashKey(Math.random().toString(32).substr(2, 8));
  };

  const handleMobileNavClick = () => {
    handleNavClick();
    if (menuOpen) dispatch({ type: 'toggleMenu' });
  };

  const isMatch = ({ match, pathname = '' }) => {
    if (!match) return false;
    return `${pathname}` === `${location.pathname}`;
  };

  return (
    <header className="navbar" ref={navbarRef}>
      <RouterLink
        className="navbar__logo"
        to={{ pathname: '/intro', state: hashKey }}
        aria-label="Arman Okluoglu, Designer & Developer"
        onClick={handleMobileNavClick}
        onMouseUp={blurOnMouseUp}
      >
        <Monogram highlight />
      </RouterLink>
      <NavToggle onClick={() => dispatch({ type: 'toggleMenu' })} menuOpen={menuOpen} />
      <nav className="navbar__nav">
        <div className="navbar__nav-list">
          {navLinks.map(({ label, pathname }) => (
            <NavLink
              exact
              className={({ isActive }) =>
                classNames('navbar__nav-link', { 'navbar__nav-link--active': isActive })
              }
              isActive={match => isMatch({ match, pathname })}
              onClick={handleNavClick}
              key={label}
              to={{ pathname, state: hashKey }}
              onMouseUp={blurOnMouseUp}
            >
              {label}
            </NavLink>
          ))}
        </div>
        <NavbarIcons />
      </nav>
      <Transition
        mountOnEnter
        unmountOnExit
        in={menuOpen}
        timeout={{ enter: 0, exit: msToNum(tokens.base.durationL) }}
        onEnter={reflow}
      >
        {status => (
          <nav className={`navbar__mobile-nav navbar__mobile-nav--${status}`}>
            {navLinks.map(({ label, pathname }, index) => (
              <NavLink
                className={({ isActive }) =>
                  classNames(
                    'navbar__mobile-nav-link',
                    `navbar__mobile-nav-link--${status}`,
                    { 'navbar__mobile-nav-link--active': isActive }
                  )
                }
                key={label}
                onClick={handleMobileNavClick}
                to={{ pathname, state: hashKey }}
                onMouseUp={blurOnMouseUp}
                style={{
                  transitionDelay: numToMs(
                    Number(msToNum(tokens.base.durationS)) + index * 50
                  ),
                }}
              >
                {label}
              </NavLink>
            ))}
            <NavbarIcons />
            <ThemeToggle isMobile />
          </nav>
        )}
      </Transition>
      {!isMobile && <ThemeToggle />}
    </header>
  );
}

export default memo(Navbar);

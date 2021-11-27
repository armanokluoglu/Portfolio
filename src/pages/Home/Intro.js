import { Suspense, lazy, Fragment } from 'react';
import classNames from 'classnames';
import { Transition } from 'react-transition-group';
import DecoderText from 'components/DecoderText';
import Heading from 'components/Heading';
import Section from 'components/Section';
import { ReactComponent as ArrowDown } from 'assets/arrow-down.svg';
import { useWindowSize } from 'hooks';
import { reflow } from 'utils/transition';
import prerender from 'utils/prerender';
import { media } from 'utils/style';
import { tokens } from 'components/ThemeProvider/theme';
import { useTheme } from 'components/ThemeProvider';
import './Intro.css';

const DisplacementSphere = lazy(() => import('components/DisplacementSphere'));

function Intro({ id, sectionRef, scrollIndicatorHidden, ...rest }) {
  const theme = useTheme();
  const windowSize = useWindowSize();
  const titleId = `${id}-title`;

  return (
    <Section
      className="intro"
      as="section"
      ref={sectionRef}
      id={id}
      aria-labelledby={titleId}
      tabIndex={-1}
      {...rest}
    >
      <Transition
        key={theme.themeId}
        appear={!prerender}
        in={!prerender}
        timeout={3000}
        onEnter={reflow}
      >
        {status => (
          <Fragment>
            {!prerender && (
              <Suspense fallback={null}>
                <DisplacementSphere />
              </Suspense>
            )}
            <header className="intro__text">
              <h1
                className={classNames('intro__name', `intro__name--${status}`)}
                id={titleId}
              >
                <DecoderText text="Arman Okluoglu" start={!prerender} delay={300} />
              </h1>
              <Heading level={0} as="h2" className="intro__title">
                <span
                  aria-hidden
                  className={classNames('intro__title-row', {
                    'intro__title-row--hidden': prerender,
                  })}
                >
                  <span
                    className={classNames(
                      'intro__title-word',
                      `intro__title-word--${status}`
                    )}
                    style={{ '--delay': tokens.base.durationXS }}
                  >
                    Frontend Developer
                  </span>
                  <span
                    className={classNames(
                      'intro__title-line',
                      `intro__title-line--${status}`
                    )}
                  />
                </span>
              </Heading>
            </header>
            {windowSize.width > media.tablet && (
              <div
                className={classNames(
                  'intro__scroll-indicator',
                  `intro__scroll-indicator--${status}`,
                  { 'intro__scroll-indicator--hidden': scrollIndicatorHidden }
                )}
                status={status}
              />
            )}
            {windowSize.width <= media.tablet && (
              <div
                className={classNames(
                  'intro__mobile-scroll-indicator',
                  `intro__mobile-scroll-indicator--${status}`,
                  { 'intro__mobile-scroll-indicator--hidden': scrollIndicatorHidden }
                )}
              >
                <ArrowDown aria-hidden />
              </div>
            )}
          </Fragment>
        )}
      </Transition>
    </Section>
  );
}

export default Intro;

import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Intro from './Intro';
import Profile from './Profile';
import { usePrefersReducedMotion, useRouteTransition } from 'hooks';
import './index.css';
import ProjectSummary from './ProjectSummary';
import piartem from '../../assets/piartem.PNG';

const Home = () => {
  const { status } = useRouteTransition();
  const { pathname, state } = useLocation();
  const initHash = useRef(true);
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projects = useRef();
  const about = useRef();
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const revealSections = [intro, projects, about];
    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px' }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    revealSections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  useEffect(() => {
    const hasEntered = status === 'entered';
    const supportsNativeSmoothScroll = 'scrollBehavior' in document.documentElement.style;
    let scrollObserver;
    let scrollTimeout;

    const handlePathChange = (pathname, scroll) => {
      clearTimeout(scrollTimeout);
      const pathSections = [intro, projects, about];
      const pathString = pathname.replace('/', '');
      const element = pathSections.filter(item => item.current.id === pathString)[0];
      if (!element) return;
      const behavior = scroll && !prefersReducedMotion ? 'smooth' : 'instant';
      const top = element.current.offsetTop;

      scrollObserver = new IntersectionObserver(
        (entries, observer) => {
          const [entry] = entries;
          if (entry.isIntersecting) {
            scrollTimeout = setTimeout(
              () => {
                element.current.focus();
              },
              prefersReducedMotion ? 0 : 400
            );
            observer.unobserve(entry.target);
          }
        },
        { rootMargin: '-20% 0px -20% 0px' }
      );

      scrollObserver.observe(element.current);

      if (supportsNativeSmoothScroll) {
        window.scroll({
          top,
          left: 0,
          behavior,
        });
      } else {
        window.scrollTo(0, top);
      }
    };

    if (pathname && initHash.current && hasEntered) {
      handlePathChange(pathname, false);
      initHash.current = false;
    } else if (!pathname && initHash.current && hasEntered) {
      window.scrollTo(0, 0);
      initHash.current = false;
    } else if (hasEntered) {
      handlePathChange(pathname, true);
    }

    return () => {
      clearTimeout(scrollTimeout);
      if (scrollObserver) {
        scrollObserver.disconnect();
      }
    };
  }, [pathname, state, prefersReducedMotion, status]);

  return (
    <div className="home">
      <Helmet>
        <title>Arman Okluoglu | Frontend Developer</title>
        <meta
          name="description"
          content="Portfolio of Arman Okluoglu – a multidisciplinary designer & developer with a focus on motion and user experience."
        />
      </Helmet>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="projects"
        alternate
        sectionRef={projects}
        visible={visibleSections.includes(projects.current)}
        index={1}
        title="Piartem Pre-registration"
        description="Design and development of a pre-registration website."
        buttonText="View Project"
        buttonLink="/piartem/"
        image={{
          src: piartem,
          alt: "piartem"
        }}
      />
      {/* <ProjectSummary
        id="project-2"
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="DevTech Tools"
        description="Creating the ultimate productivity platform."
        buttonText="View Project"
        buttonLink="/projects/devtech-tools"
        model={{
          type: 'laptop',
          alt: 'DevTech Tools Landing Page',
          textures: [
            {
              src: dttTexture,
              srcSet: `${dttTexture} 800w, ${dttTextureLarge} 1440w`,
              placeholder: dttTexturePlaceholder,
            },
          ],
        }}
      /> */}
      <Profile
        sectionRef={about}
        visible={visibleSections.includes(about.current)}
        id="about"
      />
    </div>
  );
};

export default Home;

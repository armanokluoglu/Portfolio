import { Fragment } from 'react';
import classNames from 'classnames';
import { Transition } from 'react-transition-group';
import Section from 'components/Section';
import { Button } from 'components/Button';
import Divider from 'components/Divider';
import { useWindowSize } from 'hooks';
import { reflow } from 'utils/transition';
import { media } from 'utils/style';
import Heading from 'components/Heading';
import Text from 'components/Text';
import './ProjectSummary.css';
import useTheme from '../../components/ThemeProvider/useTheme';

const ProjectSummary = ({
  id,
  visible,
  sectionRef,
  index,
  title,
  description,
  image,
  buttonText,
  buttonLink,
  alternate,
  ...rest
}) => {
  const { width } = useWindowSize();
  const { themeId } = useTheme();
  const titleId = `${id}-title`;
  const isMobile = width <= media.tablet;
  const indexText = index < 10 ? `0${index}` : index;
  const isDark = themeId === 'dark';

  const renderDetails = status => (
    <div className="project-summary__details">
      <div aria-hidden className="project-summary__index">
        <Divider
          notchWidth="64px"
          notchHeight="8px"
          collapsed={status !== 'entered'}
          collapseDelay={1000}
        />
        <span
          className={classNames(
            'project-summary__index-number',
            `project-summary__index-number--${status}`
          )}
        >
          {indexText}
        </span>
      </div>
      <Heading
        level={3}
        as="h2"
        className={classNames(
          'project-summary__title',
          `project-summary__title--${status}`
        )}
        id={titleId}
      >
        {title}
      </Heading>
      <Text
        className={classNames(
          'project-summary__description',
          `project-summary__description--${status}`
        )}
      >
        {description}
      </Text>
      <div
        className={classNames(
          'project-summary__button',
          `project-summary__button--${status}`
        )}
      >
        <Button iconHoverShift onClick={() => window.open(buttonLink)} iconEnd="arrowRight">
          {buttonText}
        </Button>
      </div>
    </div>
  );

  const renderPreview = () => (
    <div
      className={
        isDark
          ? 'project-summary__preview project-summary__preview_dark'
          : 'project-summary__preview project-summary__preview_light'
      }
    >
      <img src={image.src} alt={image.alt} />
    </div>
  );

  return (
    <Section
      className={classNames('project-summary', {
        'project-summary--alternate': alternate,
        'project-summary--first': index === '01',
      })}
      as="section"
      aria-labelledby={titleId}
      ref={sectionRef}
      id={id}
      tabIndex={-1}
      {...rest}
    >
      <div className="project-summary__content">
        <Transition in={visible} timeout={0} onEnter={reflow}>
          {status => (
            <Fragment>
              {!alternate && !isMobile && (
                <Fragment>
                  {renderDetails(status)}
                  {renderPreview(status)}
                </Fragment>
              )}
              {(alternate || isMobile) && (
                <Fragment>
                  {renderPreview(status)}
                  {renderDetails(status)}
                </Fragment>
              )}
            </Fragment>
          )}
        </Transition>
      </div>
    </Section>
  );
};

export default ProjectSummary;

import { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import {
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from 'components/ProjectLayout';
import Link from 'components/Link';
import { useScrollRestore } from 'hooks';
import './index.css';

const Uses = () => {
  useScrollRestore();

  return (
    <Fragment>
      <Helmet>
        <title>Uses | Arman Okluoglu</title>
        <meta
          name="description"
          content="A list of hardware and software I use to do my thing"
        />
      </Helmet>
      <ProjectContainer className="uses">
        <ProjectHeader
          title="Uses"
          description="A somewhat comprehensive list of tools, apps, and more that I use on a daily basis to design and code things."
        />
        <ProjectSection first className="uses__section">
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Development</ProjectSectionHeading>
              <ProjectSectionText>
                <ul>
                  <li>
                    I use{' '}
                    <Link href="https://code.visualstudio.com">Visual Studio Code</Link>{' '}
                    as my text editor of choice.
                  </li>
                  <li>
                    <Link href="https://www.google.com/chrome/">
                      Google Chrome
                    </Link>{' '}
                    with the React Dev Tools extension installed is my main browser for 
                    development and general use.
                  </li>
                  <li>
                    <Link href="https://mozilla.org/en-US/firefox/developer">
                      Firefox Development Edition
                    </Link>{' '}
                    is my secondary browser for development.
                  </li>
                  <li>
                    <Link href="https://reactjs.org">React</Link> is my front end
                    JavaScript library of choice. However, I am open to learning about
                    and working with other libraries such as Angular and Vue.
                  </li>
                  <li>
                    I'm mainly using vanilla CSS with{' '}
                    <Link href="https://sass-lang.com/">Sass</Link> or{' '}
                    <Link href="https://postcss.org">PostCSS</Link> to make it more flexible.
                  </li>
                </ul>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection first className="uses__section">
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Design</ProjectSectionHeading>
              <ProjectSectionText>
                <ul>
                  <li>
                    <Link href="https://figma.com">Figma</Link> is a tool I have just started learning 
                    and I think it is a valuable asset to have for the web/mobile design process.
                  </li>
                  <li>
                    I use Adobe Photoshop as an all-rounder tool and have been using it 
                    since high school so I am quite familiar with it.
                  </li>
                </ul>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
    </Fragment>
  );
};

export default Uses;

import { InlineLink } from '@/components/Links';
import Figure from '@/components/projects/Figure';
import { roles, technologies } from '@/config';
import Image from 'next/image';

export interface Project {
  name: string;
  description: string;
  headerImage: string[];
  figures?: string[];
  roles: string[];
  technologies: string[];
  startDate: string; // 'YYYY-MM-DD'
  endDate: string; // 'YYYY-MM-DD'
  sector: string;
  links: { demoUrl?: string; presentationUrl?: string; codeUrl?: string };
  overview: string;
  content: { heading: string; paragraphs: JSX.Element }[];
}

const projects: Project[] = [
  {
    name: 'Colourify',
    description:
      'Colourify is a web application that generates a colour palette from the art of your top albums on Spotify.',
    headerImage: ['/images/colourify.png'],
    roles: [roles.frontend],
    technologies: [
      technologies.react,
      technologies.javaScript,
      technologies.express,
      technologies.spotifyAPI,
      technologies.tailwindCSS,
    ],
    startDate: '2024-01-01',
    endDate: '2024-05-01',
    links: {
      codeUrl: 'https://github.com/natalieayuba/colourify',
    },
    overview: '',
    content: [],
    sector: 'Music',
  },
  {
    name: 'PAST',
    description:
      'PAST is a Graded Exercise Therapy (GET) mobile app for people with post-stroke fatigue that allows users to log their daily physical activity and resulting fatigue levels throughout the 6-step therapy programme.',
    overview:
      'During my mobile app development internship at the University of East Anglia, my team was given a prompt to develop a mobile app prototype for users with post-stroke fatigue looking to increase their physical activity through Graded Exercise Therapy (GET). The app allows users to track their progress in the 6-step therapy programme, watch recommended exercise videos, and log their daily routine and fatigue levels.',
    headerImage: [
      '/images/past/past-landing.png',
      '/images/past/past-calendar-2.png',
    ],
    roles: [roles.frontend, roles.wireframing, roles.logoDesign],
    technologies: [
      technologies.reactNative,
      technologies.javaScript,
      technologies.expo,
    ],
    startDate: '2021-06-01',
    endDate: '2021-09-01',
    sector: 'Health',
    links: {
      presentationUrl:
        'https://docs.google.com/presentation/d/1hIhJQrXa5Qd5Lhggceuda70YpJB00HhdpQeEzL4tc2w/edit#slide=id.p',
    },
    content: [
      {
        heading: 'The prompt',
        paragraphs: (
          <p>
            Our clients came up with the idea for the PAST mobile app for users
            with post-stroke fatigue after co-authoring a{' '}
            <InlineLink
              text='
              self-help guide for a 6-step Graded Exercise Therapy (GET)
              programme'
              href='https://pre-prod.neurosymptoms.org/wp-content/uploads/2023/03/GET-guide-booklet-version-1-22062010.pdf'
            />{' '}
            to gradually increase physical activity for people with chronic
            fatigue syndrome. They believed users would benefit from a mobile
            app to track their progress in the programme instead of their own
            manual tracking methods to avoid users losing motivation due to the
            amount of data that needed to be logged. A dedicated app could help
            users stay on the right track and follow the programme consistently.
          </p>
        ),
      },
      {
        heading: 'Project scope',
        paragraphs: (
          <p>
            The objective of the internship was to build a working app prototype
            by the end of the 12 weeks using the scrum methodology. With this
            emphasis on implementation, the project was focused on development,
            coding deliverables, and app demos, which we presented to our
            clients at the end of each week-long sprint. Eager to incorporate UX
            design into every project, I suggested that we design wireframes for
            each feature which resulted in a tailored sprint that followed the
            method of{' '}
            <span className='font-semibold'>
              review backlog → design prototypes → code feature → client
              feedback
            </span>
            . We decided to use React Native (with JavaScript and Expo) as the
            main technology for its cross-platform functionality and popularity
            at the time. One of our team member&apos;s also had experience in
            backend development so they became the amin person for this and
            built the backend using Node.js, Express, AWS Cognito, and
            PostgreSQL, while the rest of us shared the frontend
            responsibilities.
          </p>
        ),
      },
      {
        heading: 'Process',
        paragraphs: (
          <>
            <p>
              Our first aim was to understand our client&apos;s requirements and
              how they expected users to use the app. After brainstorming
              sessions and discussing user journeys, we landed on our three big
              features that led the rest of the project. Users needed to be able
              to: (1) follow the programme steps, (2) log their daily routine
              and fatigue levels, and (3) watch recommended exercise videos.
            </p>
            <p>
              I recommended we add a competitive analysis to the backlog because
              I had used similar apps in the past and thought it&apos;d be
              useful to see how our initial ideas compared to competitor
              products. I became responsible for completing this task and
              researched mostly indirect competitors with a similar health
              tracking service as it was difficult to find tracker apps
              specifically for stroke survivors. This analysis helped to confirm
              some initial ideas and introduce new methods of doing things we
              hadn&apos;t thought of before.
            </p>
            <p>
              I also realised that our clients hadn&apos;t provided branding, so
              we added this to the backlog and I became responsible for the logo
              design. I designed a logo and app icon using the colour scheme
              from the GET programme booklet. We also used these colours in the
              app&apos;s theme for consistency.
            </p>
            <Figure
              images={[
                { image: '/images/past/past-logo.png', width: 'w-96' },
                {
                  image: '/images/past/past-icon.png',
                  width: 'w-28',
                  height: 'h-28',
                },
              ]}
              caption='1.1 PAST logo and icon'
            />
            <p>
              As a dev team, we had brainstorming sessions to generate ideas on
              how to build the main three features, focusing on building direct
              solutions to the user&apos;s problems.
            </p>
            <p>
              <span className='block font-medium italic'>
                How would we develop a way for users to follow the programme
                steps?
              </span>{' '}
              Our solution was a home screen with daily tasks for the user to
              complete and a progress bar to indicate their progress in that
              step of the programme. Once the step has been completed, a popup
              alert lets the user know when they&apos;ve progressed to the next
              step.
            </p>
            <Figure
              images={[
                { image: '/images/past/past-home-1.png' },
                { image: '/images/past/past-home-2.png' },
              ]}
              caption='1.2 Past home screen'
              type='mobile'
            />
            <p>
              <span className='block font-medium italic'>
                How would we develop a way for users to log their daily routine
                and fatigue levels?
              </span>{' '}
              We developed a calendar feature with daily logging capabilities
              where users can log their routine and fatigue levels. The calendar
              also has a card on the home screen prompting the use to complete
              this task daily.
            </p>
            <Figure
              images={[
                { image: '/images/past/past-calendar-1.png' },
                { image: '/images/past/past-calendar-2.png' },
              ]}
              caption='1.3 Past calendar screen'
              type='mobile'
            />
            <p>
              <span className='block font-medium italic'>
                How would we show exercise videos to users?
              </span>{' '}
              Our solution to this was a video library of YouTube videos
              supplied by our client. The user is prompted to complete these
              exercises daily by a card on the home screen.
            </p>
            <Figure
              images={[{ image: '/images/past/past-exercises.png' }]}
              caption='1.4 Past exercises screen'
              type='mobile'
            />
          </>
        ),
      },
      {
        heading: 'Main takeaways',
        paragraphs: (
          <>
            <p>
              The prototype was handed over to our clients to take forward so we
              were unable to measure the success of the solution. It
              would&apos;ve been nice to see the product to release and gain
              feedback from end users. Did the product correctly solve user
              problems? Are users more likely to follow the GET programme and
              see results using the app?
            </p>
            <p>
              In general, I also think the app would&apos;ve benefited from a
              user-centred approach. Doing user research to better understand of
              their goals and pain points would&apos;ve helped to avoid
              potential bias from our clients and us as developers. Due to the
              project&apos;s limited scope, we only had our clients to give us
              stakeholder feedback which was still helpful to have feedback at
              all instead of creating from solely a developer perspective.
            </p>
          </>
        ),
      },
    ],
  },
];

export default projects;

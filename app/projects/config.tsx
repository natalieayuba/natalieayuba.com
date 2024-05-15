import { InlineLink } from '@/components/Links';
import { roles, technologies } from '@/config';
import Image from 'next/image';

const projects = [
  {
    name: 'Colourify',
    description:
      'Colourify is a web application that generates a colour palette from the art of your top albums on Spotify.',
    overview: '',
    content: [],
    images: ['/colourify.png'],
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
    codeUrl: 'https://github.com/natalieayuba/colourify',
    demoUrl: '#',
  },
  {
    name: 'PAST',
    description:
      'PAST is a Graded Exercise Therapy (GET) mobile app for people with post-stroke fatigue that allows users to log their daily physical activity and resulting fatigue levels throughout the 6-step therapy programme.',
    overview:
      'During my mobile app development internship at the University of East Anglia, my team was given a prompt to develop a mobile app prototype for users with post-stroke fatigue looking to increase their physical activity through Graded Exercise Therapy (GET). The app allows users to track their progress in the 6-step therapy programme, watch recommended exercise videos, and log their daily routine and resulting fatigue levels.',
    images: ['/past-1.png', '/past-2.png'],
    roles: [roles.frontend, roles.prototyping, roles.logoDesign],
    technologies: [
      technologies.reactNative,
      technologies.javaScript,
      technologies.expo,
    ],
    startDate: '2021-06-01',
    endDate: '2021-09-01',
    sector: 'Health',
    presentationUrl:
      'https://docs.google.com/presentation/d/1hIhJQrXa5Qd5Lhggceuda70YpJB00HhdpQeEzL4tc2w/edit#slide=id.p',
    content: [
      {
        heading: 'The prompt',
        content: (
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
            sheer amount of data that needed to be logged. A dedicated app could
            help users stay on the right track and follow the programme
            consistently.
          </p>
        ),
      },
      {
        heading: 'Project scope',
        content: (
          <p>
            The objective of the internship was to build a working app prototype
            by the end of the 12 weeks using the scrum methodology. With this
            emphasis on implementation, the project was focused on development,
            coding deliverables, and app demos, which we presented to our
            clients at the end of each week-long sprint. Eager to incorporate UX
            design into every project, I suggested incorporate visual design
            into our sprints which resulted in each sprint following a tailored
            scrum process of{' '}
            <span className='font-semibold'>
              review backlog → design prototypes → code feature → client
              feedback
            </span>
            .
          </p>
        ),
      },
      {
        heading: 'Process',
        content: (
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
              researched mostly indirect competitors with either a similar
              service or target audience as it was difficult to find an
              identical product. This analysis helped to confirm some initial
              ideas and introduce new methods of doing things we hadn&apos;t
              thought of before.
            </p>
            <p>
              I also realised that our clients hadn&apos;t provided branding, so
              we added this to the backlog and I became responsible for the logo
              design. I designed a logo and app icon using the colour scheme
              from the GET booklet. We also used these colours in the app&apos;s
              theme for consistency.
            </p>
            <div className='py-16 flex flex-col'>
              <div className='flex w-[700px] justify-between'>
                <Image
                  src='/images/past/past-logo.png'
                  alt='Past logo'
                  width={400}
                  height={148}
                />
                <Image
                  src='/images/past/past-icon.png'
                  alt='Past icon'
                  width={100}
                  height={100}
                />
              </div>
              <caption className='text-sm text-black-alpha-60 mt-4'>
                1.1 PAST logo and icon
              </caption>
            </div>
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
              Our end solution to this was a home screen with daily tasks for
              the user to complete, a visual indication of which step
              they&apos;re on (progress bar, wheel, etc.). And alerts when
              they&apos;ve progressed to the next step to complete one off
              tasks.
            </p>
            <div className='self-center py-16 flex flex-col gap-6 items-center'>
              <div className='flex gap-16'>
                <Image
                  className='rounded-3xl'
                  src='/images/past/past-home-1.png'
                  alt='PAST home'
                  width={285}
                  height={600}
                />
                <Image
                  className='rounded-3xl'
                  src='/images/past/past-home-2.png'
                  alt='PAST home'
                  width={285}
                  height={600}
                />
              </div>
              <caption className='text-sm text-black-alpha-60 mt-4'>
                1.2 PAST home screen
              </caption>
            </div>
            <p>
              <span className='block font-medium italic'>
                How would we develop a way for users to log their daily routine
                and fatigue levels?
              </span>{' '}
              We developed a calendar feature with daily logging capabilities
              where users can log their routine and fatigue levels. This feature
              also has a card on the home screen prompting the use to complete
              the task.
            </p>
            <div className='self-center py-8 flex flex-col gap-6'>
              <div className='flex gap-16'>
                <Image
                  className='rounded-3xl'
                  src='/images/past/past-calendar-1.png'
                  alt='PAST home'
                  width={285}
                  height={600}
                />
                <Image
                  className='rounded-3xl'
                  src='/images/past/past-calendar-2.png'
                  alt='PAST home'
                  width={285}
                  height={600}
                />
              </div>
              <caption className='text-sm text-black-alpha-60 mt-4'>
                1.3 PAST home screen
              </caption>
            </div>
            <p>
              <span className='block font-medium italic'>
                How would we show exercise videos to users?
              </span>{' '}
              Our solution to this was a video library of YouTube videos
              supplied by our client. Each video is opened in the user’s phone’s
              native media player.
            </p>
            <div className='self-center py-8 flex flex-col gap-6'>
              <div className='flex gap-16'>
                <Image
                  className='rounded-3xl'
                  src='/images/past/past-exercises.png'
                  alt='PAST home'
                  width={285}
                  height={600}
                />
              </div>
              <caption className='text-sm text-black-alpha-60 mt-4'>
                1.4 PAST exercises screen
              </caption>
            </div>
          </>
        ),
      },
      {
        heading: 'Main takeaways',
        content: (
          <>
            <p>
              The prototype was handed over to our clients and we were unable to
              measure the success of the solution. It would&apos;ve been nice to
              see the product to release and measure its success with real-world
              users. Did the product correctly solve user problems? Are users
              more likely to follow the GET programme and see results using the
              app? testing early and frequently enough is key has this product
              landed? is it doing what we want it to for hte user? how are users
              responding to it?
            </p>
            <p>
              In general, the app would&apos;ve benefited from a user-centred
              approach. A better understanding of the user&apos;s goals and pain
              points from their perspective would&apos;ve helped to avoid bias
              from our clients and us as developers. Due to the project&apos;s
              limited scope, we only had our clients to give us stakeholder
              feedback which was still somewhat helpful to have feedback at all
              instead of developing in a technical void.
            </p>
          </>
        ),
      },
    ],
  },
];

export default projects;

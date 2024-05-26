import { InlineLink } from '@/components/Links';
import Figure from '@/components/projects/Figure';
import { roles, technologies } from '@/config';

export interface Project {
  name: string;
  description: string;
  headerImage: string[];
  figures?: string[];
  roles: string[];
  technologies: string[];
  startDate: string;
  endDate: string;
  sector?: string;
  links: { demoUrl?: string; presentationUrl?: string; codeUrl?: string };
  overview: JSX.Element;
  content?: { heading: string; paragraphs: JSX.Element }[];
}

const projects: Project[] = [
  {
    name: 'Colourify',
    description:
      'Colourify is a tool that generates a colour palette from the cover art of your top albums on Spotify.',
    headerImage: ['/images/colourify.png'],
    roles: [roles.frontend, roles.serverlessComputing],
    technologies: [
      technologies.react,
      technologies.netlify,
      technologies.javaScript,
      technologies.spotifyWebApi,
      technologies.tailwindCSS,
    ],
    startDate: '2024-01',
    endDate: '2024-05',
    sector: 'Music',
    links: {
      codeUrl: 'https://github.com/natalieayuba/colourify',
      demoUrl: 'https://mycolourify.netlify.app/',
    },
    overview: (
      <>
        As an avid Spotify user, I love to seek out stats about my listening
        habits throughout the year while impatiently waiting for the release of
        my Spotify Wrapped, using apps such as{' '}
        <InlineLink
          href='https://receiptify.herokuapp.com/'
          text='Receiptify'
        />{' '}
        and <InlineLink href='https://www.instafest.app/' text='Instafest' /> to
        share my stats with friends online. Though these apps are fun, I
        couldn’t find any that displayed a user’s top albums (turns out this
        request isn’t available through the{' '}
        <InlineLink
          href='https://developer.spotify.com/documentation/web-api'
          text='Spotify Web API'
        />
        ). I especially love the graphic design of album cover art and their
        colour palettes. In fact, the palette used in{' '}
        <InlineLink
          href='https://open.spotify.com/album/0oMXn0MNLNyvB4iJPZXOuV'
          text='Willow Smith’s <COPINGMECHANISM>'
        />{' '}
        is what inspired this project - an online tool that generates a colour
        palette from the cover art of the user’s top albums on Spotify. I
        thought that perhaps this would provide a fun insight into what kind of
        vibe the user’s music gives off visually - a moody colour palette for
        the angsty indie listeners, a more vibrant palette for lovers of pop, or
        a fun mix of random hues.
      </>
    ),
    content: [
      {
        heading: 'Research & planning',
        paragraphs: (
          <>
            <p>
              This is a project I’d been tinkering with for a while, so I knew
              what I wanted it to look like and do. However, since this was my
              first time building a web app with an API, I wasn’t sure how to
              approach the implementation, so I decided to do an initial
              research stage to test the concept iteratively. I initially built
              the app in plain JavaScript, HTML and CSS to see if it was
              possible to do so without involving other technologies. However, I
              later decided to migrate to React as it was easier to manage
              states and components using the framework. I also decided on
              TailwindCSS for ease of styling and{' '}
              <InlineLink
                href='https://lokeshdhakar.com/projects/color-thief/'
                text='Color Thief'
              />{' '}
              to generate the colour palettes.
            </p>
            <p>
              For hosting, I first planned to deploy with Heroku as the app
              originally had a backend to use the Spotify Web API, and Heroku
              allows for server-side hosting. However, after realising that
              Heroku appends an identifier to your subdomain (i.e.
              colourify-123456789.herokuapp.com instead of
              colourify.herokuapp.com), I decided to go with Netlify instead as
              I preferred the look of the URL (colourify.netlify.app was
              unfortunately unavailable so I went with{' '}
              <InlineLink
                href='https://mycolourify.netlify.app/'
                text='mycolourify.netlify.app'
              />
              ). Using Netlify required me to learn about serverless computing
              and understand Netlify functions to get the Spotify Web API to
              work.
            </p>
            <p>
              Receiptify,{' '}
              <InlineLink
                href='https://spotify-profile.herokuapp.com/'
                text='Spotify Profile'
              />{' '}
              and{' '}
              <InlineLink
                href='https://github.com/JonoMacC/serverless-spotify-auth'
                text='Spotify Serverless Auth'
              />{' '}
              were big inspirations for the implementation of the app, and
              Recepity and Instafest for the design. I referred to these
              throughout the project, kept track of my tasks in a Notion Kanban
              board, and used Figma for some designs.
            </p>
          </>
        ),
      },
      {
        heading: 'Process',
        paragraphs: (
          <>
            <p>
              I broke the app into two overarching tasks to make it more
              manageable: (1) get the user&apos;s top albums and (2) get a
              colour palette from each album cover.
            </p>
            <div>
              <h3 className='text-xl font-bold mt-2 mb-1'>
                1. Get the user&apos;s top five albums
              </h3>
              <p>
                The Spotify Web API only has a request to get the user&apos;s
                top tracks or artists, but not their top albums. The only
                solution was to get the user&apos;s top tracks and group them by
                album to get an estimate of what the user&apos;s top albums
                would be. After testing this concept with the API, I noticed a
                few more limitations:
              </p>
              <ul className='list-inside list-disc'>
                {[
                  {
                    heading:
                      'Grouping by album requires requesting all user top tracks',
                    paragraph: (
                      <>
                        To get an accurate estimate of the user&apos;s top
                        albums, it was necessary to request all of the
                        user&apos;s top tracks, but since the{' '}
                        <InlineLink
                          text="Get User's Top Items"
                          href='https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks'
                        />{' '}
                        request only returns a max of 50 items at a time, the
                        only solution was to recursively fetch the data, making
                        use of the offset and limit parameters. This
                        unfortunately increased the API response time, which is
                        especially noticeable when requesting the user&apos;s
                        ”All time” top tracks (for context, my all time top
                        tracks had a total of over 5000 tracks). To somewhat
                        combat this issue, I included a progress bar with a
                        percentage (tracks fetched / total top tracks) to let
                        the user know how long the request would take. The user
                        can also abort the request by switching to another time
                        range (”Last month”, “Last 6 months”, or “All time”) if
                        they are frustrated with the response time.
                      </>
                    ),
                  },
                  {
                    heading: 'Top tracks ”based on calculated affinity”',
                    paragraph: (
                      <>
                        The top tracks returned by the Get User&apos;s Top Items
                        request are based on “calculated affinity”, so
                        they&apos;re not technically the user&apos;s most
                        listened-to songs, which I noticed when requesting my
                        top tracks and being surprised by some of the results.
                        This is something I had to come to terms with because
                        it&apos;s a feature of the API.
                      </>
                    ),
                  },
                  {
                    heading: 'Same track, different album',
                    paragraph: (
                      <>
                        I noticed that some Spotify tracks have an album version
                        and a single version, i.e. the exact same song with a
                        shared{' '}
                        <InlineLink
                          href='http://isrc.ifpi.org/'
                          text='International Standard Recording Code (ISRC)'
                        />
                        , but with different IDs since they were technically
                        released separately, so they&apos;re treated as separate
                        tracks by the API. I tried to get around this by
                        replacing the singles with their corresponding album
                        version to ensure that the top tracks were in their
                        album form to group them as accurately as possible.
                        However, this required another request (
                        <InlineLink
                          href='https://developer.spotify.com/documentation/web-api/reference/search'
                          text='Search for Item'
                        />
                        ) to find the album version of the track by the ISRC,
                        which resulted in a longer response time and a 429 error
                        as the number of requests exceeded the app&apos;s Web
                        API rate limit. There was also the issue of some tracks
                        being on both a regular album and the deluxe version,
                        which I decided to ignore due to the project scope.
                      </>
                    ),
                  },
                  {
                    heading: 'Unwanted tracks',
                    paragraph: (
                      <>
                        The dreaded ASMR track shows up on my “On Repeat“
                        playlist quite frequently, so I knew I would want to
                        exclude these from the top tracks. The only surefire way
                        to know if a track is ASMR is to check if “asmr“ is
                        included in its genres. However, some tracks had no
                        genres set so I opted to exclude all tracks that had
                        variations of “asmr“, “Asmr“, or name. I also excluded
                        singles and audiobooks, leaving the top tracks with an
                        album type of album, EP, or compilation.
                      </>
                    ),
                  },
                ].map(({ heading, paragraph }) => (
                  <li className='ml-6 mt-2' key={heading}>
                    <h4 className='font-bold inline-block'>{heading}</h4>
                    <p className='ml-6'>{paragraph}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className='text-xl font-bold mb-1'>
                2. Get a colour palette from each album cover
              </h3>
              <p>
                Color Thief is a library that grabs the dominant colours from an
                image in RGB form. Although I contemplated writing this code
                myself since I noticed that some of the colours generated
                don&apos;t seem to be the most accurate, I decided to use the
                library as it is the most popular of its kind and fairly easy to
                use. After generating a list of the user&apos;s top five albums,
                Color Thief gets the colour palette from each album&apos;s cover
                art, and the user&apos;s Colourify Palette is displayed.
              </p>
            </div>
          </>
        ),
      },
      {
        heading: 'Outcome',
        paragraphs: (
          <>
            <p>
              This was a big passion project for me so it was really fun to
              build and even cooler to see it in action (check it out at{' '}
              <InlineLink
                href='https://mycolourify.netlify.app/'
                text='mycolourify.netlify.app'
              />
              ). I don&apos;t imagine the traffic will exceed the API limit but
              I will keep an eye on the project and request a higher quota from
              Spotify if necessary.
            </p>
            <p>
              I have a few ideas for similar apps, namely another Spotify Web
              API app Rainbowify (name tbd), which would generate a grid of
              albums, each with a dominant colour that matches each colour of
              the rainbow, inspired by the{' '}
              <InlineLink
                text='TikTok album rainbow
              trend'
                href='https://www.tiktok.com/discover/album-rainbow-trend'
              />
              . Can you tell I&apos;m a big Spotify fan?
            </p>
          </>
        ),
      },
    ],
  },
  {
    name: 'PAST',
    description:
      'PAST is a Graded Exercise Therapy (GET) mobile app for people with post-stroke fatigue that allows users to log their daily physical activity and resulting fatigue levels throughout the 6-step therapy programme.',
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
    startDate: '2021-06',
    endDate: '2021-09',
    sector: 'Health',
    links: {
      presentationUrl:
        'https://docs.google.com/presentation/d/1hIhJQrXa5Qd5Lhggceuda70YpJB00HhdpQeEzL4tc2w/edit#slide=id.p',
    },
    overview: (
      <>
        During my mobile app development internship at the University of East
        Anglia, my team was given a prompt to develop a mobile app prototype for
        users with post-stroke fatigue looking to increase their physical
        activity through Graded Exercise Therapy (GET). The app allows users to
        track their progress in the 6-step therapy programme, watch recommended
        exercise videos, and log their daily routine and fatigue levels.
      </>
    ),
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

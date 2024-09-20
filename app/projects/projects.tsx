import { InlineLink } from '@/app/_components/Links';
import type { ExternalLinksProps } from './_components/ExternalLinks';
import type { ReactNode } from 'react';
import Figure, { FigureImage } from './[project]/_components/Figure';
import Image from 'next/image';

export interface ProjectProps {
  name: string;
  description: string;
  heading: string;
  role: string[];
  technologies?: string[];
  tools: string[];
  startDate: string;
  endDate: string;
  links: ExternalLinksProps;
  content: { heading: string; paragraphs: ReactNode[] }[];
  otherProject: string;
}

export const roles = {
  frontend: 'Frontend Development',
  logoDesign: 'Logo Design',
  brandDesign: 'Brand Design',
  wireframing: 'Wireframing',
  prototyping: 'Prototyping',
  uxResearch: 'UX Research',
  serverlessComputing: 'Serverless Computing',
};

export const technologies = {
  react: 'React',
  javaScript: 'JavaScript',
  typeScript: 'TypeScript',
  spotifyWebApi: 'Spotify Web API',
  reactNative: 'React Native',
  tailwindCSS: 'TailwindCSS',
  expo: 'Expo',
  netlify: 'Netlify',
  next: 'Next.js',
};

export const tools = {
  figma: 'Figma',
  notion: 'Notion',
  vsCode: 'Visual Studio Code',
  github: 'GitHub',
};

const projects: ProjectProps[] = [
  // {
  //   name: 'Headfirst Bristol',
  //   description:
  //     'Conceptual redesign of Headfirst Bristol, a web app for a Bristol-based events ticketing company.',
  //   headerImage: ['/images/projects/headfirst/headfirst-fun.png'],
  //   bgColor: '#BB9EFF',
  //   role: [
  //     roles.wireframing,
  //     roles.prototyping,
  //     roles.logoDesign,
  //     roles.frontend,
  //   ],
  //   technologies: [
  //     technologies.next,
  //     technologies.typeScript,
  //     technologies.tailwindCSS,
  //   ],
  //   startDate: '2024-04',
  //   endDate: '2024-09',
  //   links: {
  //     codeUrl: 'https://github.com/natalieayuba/headfirst',
  //     siteUrl: 'https://redesign-headfirst.netlify.app',
  //   },
  //   overview: (
  //     <>
  //       Headfirst Bristol is a what&apos;s-on guide and ticketing organisation
  //       that highlights local gigs and niche community events in Bristol. Ever
  //       since moving to the city, both the Headfirst web and mobile app have
  //       been my go-to to find specific community events near me. Because I use
  //       the apps so often, my UX-tailored brain has developed quite a few gripes
  //       with the usability and styling, so I decided to carry out an unsolicited
  //       redesign to see if I could improve upon the user experience.
  //       <i className='block mt-2'>
  //         Disclaimer: I am not affiliated with Headfirst Bristol in any
  //         capacity.
  //       </i>
  //     </>
  //   ),
  //   content: [
  //     {
  //       heading: 'Scope of the project',
  //       paragraphs: <></>,
  //     },
  //     {
  //       heading: 'Identifying the problem',
  //       paragraphs: <></>,
  //     },
  //     {
  //       heading: 'Heuristic evaluation',
  //       paragraphs: <>subheading of identifying the problem</>,
  //     },
  //     {
  //       heading: 'Competitive analysis',
  //       paragraphs: <>subheading of identifying the problem</>,
  //     },
  //     {
  //       heading: 'Defining goals and objectives',
  //       paragraphs: <></>,
  //     },
  //     {
  //       heading: 'Implementing the design',
  //       paragraphs: <></>,
  //     },
  //     {
  //       heading: 'Coding the app',
  //       paragraphs: <></>,
  //     },
  //     {
  //       heading: 'Conclusion',
  //       paragraphs: <></>,
  //     },
  //   ],
  // },
  {
    name: 'Colourify',
    description:
      'Colourify is a tool that generates a colour palette from the cover art of your top albums on Spotify.',
    heading: 'Discover the colours of your music taste with Colourify',
    role: [roles.frontend, roles.serverlessComputing],
    technologies: [
      technologies.react,
      technologies.netlify,
      technologies.javaScript,
      technologies.spotifyWebApi,
      technologies.tailwindCSS,
    ],
    tools: [tools.figma, tools.notion, tools.github, tools.vsCode],
    startDate: '2024-01',
    endDate: '2024-05',
    links: {
      codeUrl: 'https://github.com/natalieayuba/colourify',
      siteUrl: 'https://mycolourify.netlify.app/',
    },
    otherProject: 'Luxe',
    content: [
      {
        heading: 'Overview',
        paragraphs: [
          <p key='1'>
            While awaiting the release of my Spotify Wrapped at the end of the
            year, I love to seek out stats about my listening habits using apps
            like{' '}
            <InlineLink href='https://receiptify.herokuapp.com/'>
              Receiptify
            </InlineLink>{' '}
            and{' '}
            <InlineLink href='https://www.instafest.app/'>Instafest</InlineLink>
            . Though these apps are fun to use, I have yet to find one
            that&apos;s more visual and makes use of the cover art of the
            user&apos;s listened-to tracks.{' '}
          </p>,
          <p key='2'>
            I&apos;m a big fan of album cover design and how colours are used to
            convey a particular theme or aesthetic. In fact, the colour palette
            used in{' '}
            <InlineLink href='https://open.spotify.com/album/0oMXn0MNLNyvB4iJPZXOuV'>
              Willow Smith&apos;s &lt;COPINGMECHANISM&gt;
            </InlineLink>{' '}
            is what inspired this project that I call Colourify - an online tool
            that generates a colour palette from the cover art of a user&apos;s
            top albums on Spotify. I thought it might be fun to see what kind of
            vibe the user&apos;s music gives off visually - a moody colour
            palette for the angsty indie listeners, a more vibrant palette for
            lovers of pop, or a fun mix of random hues.
          </p>,
        ],
      },
      {
        heading: 'Tech stack',
        paragraphs: [
          <p key='1'>
            This was my first time using an API so I decided to test the concept
            using plain JavaScript, HTML and CSS to see if it was possible to
            build the app without involving more complex technologies. However,
            I later decided to migrate to React as it was easier to manage
            states and components using the framework. I also decided on
            TailwindCSS for ease of styling and{' '}
            <InlineLink href='https://lokeshdhakar.com/projects/color-thief/'>
              Color Thief
            </InlineLink>{' '}
            (a popular framework for getting colours from images) to generate
            the colour palettes.
          </p>,
          <p key='2'>
            This was also my first time hosting a website publicly and that took
            some time to wrap my head around. I first planned to deploy with
            Heroku as this service seems to be the go-to for server-side
            hosting. However, after realising that Heroku appends an identifier
            to your subdomain (i.e. myapp-123456789.herokuapp.com instead of
            myapp.herokuapp.com), I decided to go with Netlify instead as I
            preferred the look of the URL (colourify.netlify.app was
            unfortunately unavailable so I went with{' '}
            <InlineLink href='https://mycolourify.netlify.app/'>
              mycolourify.netlify.app
            </InlineLink>
            ). Using Netlify required me to implement serverless functions as
            Netlify doesn&apos;t do serverless hosting, which was also a
            learning curve.
          </p>,
          <p key='3'>
            Receiptify,{' '}
            <InlineLink href='https://spotify-profile.herokuapp.com/'>
              Spotify Profile
            </InlineLink>{' '}
            and{' '}
            <InlineLink href='https://github.com/JonoMacC/serverless-spotify-auth'>
              Spotify Serverless Auth
            </InlineLink>{' '}
            were inspirations for the app&apos;s implementation, and Receptify
            and Instafest for the design. I referred to these throughout the
            project, kept track of my tasks in Notion, and used Figma to design
            the final colour palette image that users can download and share on
            social media.
          </p>,
          <Figure
            key='4'
            caption='1.1. Previous designs for the colour palette, one without margins, and one with 10 albums instead of 5'
          >
            <FigureImage
              src='/images/projects/colourify/colourify-palette-draft1.png'
              alt='Colourify palette draft 1'
            />
            <FigureImage
              src='/images/projects/colourify/colourify-palette-draft2.png'
              alt='Colourify palette draft 2'
            />
          </Figure>,
        ],
      },
      {
        heading: 'Process',
        paragraphs: [
          <p key='1'>
            I broke the project down into two main tasks to make it more
            manageable: (1) get the user&apos;s top albums and (2) get a colour
            palette from each album cover.
          </p>,
          <h3 className='text-xl font-bold w-full' key='2'>
            Get the user&apos;s top five albums
          </h3>,
          <p key='3'>
            The Spotify Web API has a request to get the user&apos;s top tracks
            or artists, but not their top albums. The only solution was to get
            the user&apos;s top tracks and group them by album to get an
            estimate of what the user&apos;s top albums would be. After testing
            this concept with the API, I noticed a few more limitations:
          </p>,
          <div key='4'>
            <h4 className='font-semibold'>
              Grouping by album required requesting all of the user&apos;s top
              tracks.
            </h4>
            <p>
              To get an accurate estimate of the user&apos;s top albums, it was
              necessary to request <i>all</i> of the user&apos;s top tracks.
              However, since the{' '}
              <InlineLink href='https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks'>
                Get User&apos;s Top Items
              </InlineLink>{' '}
              request only returns a max of 50 items at a time, the solution was
              to recursively fetch the data, making use of the offset and limit
              parameters. This unfortunately increased the API response time,
              which is especially noticeable when requesting a more data such as
              when the user chooses the ”All time” time range. To somewhat
              combat this issue, I included a progress bar with a percentage
              (tracks fetched / total top tracks) to let the user know how long
              the request would take. The user can also abort the request by
              switching to another time range (”Last month”, “Last 6 months”, or
              “All time”) if they are frustrated with the response time.
            </p>
            <Figure caption='1.2 Progress bar'>
              <FigureImage
                src='/images/projects/colourify/colourify-progress-bar.png'
                alt='Progress bar image'
                className='max-w-80'
              />
            </Figure>
          </div>,
          <div key='5'>
            <h4 className='font-semibold'>
              Top tracks are ”based on calculated affinity”.
            </h4>
            <p>
              The top tracks returned by the Get User&apos;s Top Items request
              are based on “calculated affinity”, so they&apos;re not
              technically the user&apos;s most listened-to songs, which I
              noticed when requesting my top tracks and being surprised by some
              of the results. This is something I had to come to terms with
              because it&apos;s a feature of the API.
            </p>
          </div>,
          <div key='6'>
            <h4 className='font-semibold'>
              Identical tracks on different albums.
            </h4>
            <p>
              Some Spotify tracks have an album version and a single version, so
              the same song can exist multiple times but be treated as separate
              tracks by the API with different IDs. I tried to get around this
              by replacing the singles with their corresponding album version to
              ensure that the top tracks were in their album form to group them
              as accurately as possible. However, this required another request
              (
              <InlineLink href='https://developer.spotify.com/documentation/web-api/reference/search'>
                Search for Item
              </InlineLink>
              ) to find the album version of the track by its{' '}
              <InlineLink href='http://isrc.ifpi.org/'>
                International Standard Recording Code
              </InlineLink>{' '}
              (ISRC), which resulted in a longer response time and a 429 error
              due to reaching Spotify&apos;s request limit. There was also the
              issue of some tracks being on both a regular album and its
              corresponding deluxe version, which I decided to ignore to limit
              the project scope.
            </p>
          </div>,
          <div key='7'>
            <h4 className='font-semibold'>Unwanted tracks</h4>
            <p>
              The dreaded ASMR track shows up on my “On Repeat“ playlist quite
              frequently, so I knew I would want to exclude these from the top
              tracks. The only surefire way to know if a track is ASMR is to
              check if “asmr“ is included in its genres. However, some tracks
              had no genres set so I opted to exclude all tracks that had
              variations of “asmr“, “Asmr“, or name. I also excluded singles and
              audiobooks, leaving the top tracks with an album type of album,
              EP, or compilation.
            </p>
          </div>,
          <div key='3'>
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
          </div>,
          <Figure key='4' caption='1.3 Colourify demo'>
            <div className='absolute z-0 w-[80%] top-[5%] h-[76%] overflow-hidden border-2'>
              <video
                autoPlay
                loop
                playsInline
                poster='/images/projects/colourify/colourify-demo-poster.png'
                className='scale-125 relative top-10'
              >
                <source src='/images/projects/colourify/colourify-demo.mp4' />
              </video>
            </div>
            <FigureImage
              src='/images/projects/desktop-mockup.png'
              alt='Desktop mockup'
              className='z-0'
            />
          </Figure>,
        ],
      },
      {
        heading: 'Conclusion',
        paragraphs: [
          <p key='1'>
            This was a big passion project for me so it was really fun to build
            and even cooler to see it in action (check it out at{' '}
            <InlineLink href='https://mycolourify.netlify.app/'>
              mycolourify.netlify.app
            </InlineLink>
            ). I built it in hopes that people would use it to share their
            colour palettes with friends on social media, but I have yet to
            promote it so it gains traction. I also have an idea for a similar
            app called Rainbowify, which would generate a 3x3 grid of album
            covers, each with a dominant background colour that matches each
            colour of the rainbow, inspired by the{' '}
            <InlineLink href='https://www.tiktok.com/discover/album-rainbow-trend'>
              TikTok album rainbow trend
            </InlineLink>
            . Can you tell I&apos;m a big Spotify fan?
          </p>,
        ],
      },
    ],
  },
  {
    name: 'Luxe',
    description:
      'Luxe is a conceptual mobile app that allows users to book cinema tickets in advance.',
    heading:
      'Waste no time waiting in queues, and book your tickets online with Luxe',
    role: [roles.wireframing, roles.prototyping, roles.uxResearch],
    tools: [tools.figma],
    startDate: '2023-05',
    endDate: '2023-08',
    otherProject: 'PAST',
    links: {
      prototypeUrl:
        'https://www.figma.com/proto/FQWXUPngTpqyqzCGiRY3pK/Design-a-movie-ticketing-app-for-a-cinema-(Luxe-Cinema)?node-id=1-505&t=hMTJZxtMw4J8mZZi-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A505',
    },
    content: [
      {
        heading: 'Overview',
        paragraphs: [
          <p key='1'>
            I decided to take the{' '}
            <InlineLink href='https://www.coursera.org/professional-certificates/google-ux-design'>
              Google UX Design Course
            </InlineLink>{' '}
            to learn more about industry-level standards and improve my design
            skills. For my main project, I created a prototype for a conceptual
            mobile app called Luxe that allows users to book their movie tickets
            online and reserve seating. Using design thinking, I engaged with
            every aspect of the UX design process{' '}
            <strong>from user research to prototyping</strong>.
          </p>,
        ],
      },
      {
        heading: 'Understanding the user',
        paragraphs: [
          <p key='1'>
            Empathising with the user was an interesting concept to me as coming
            from a software development background we tend to
            functionality-driven, rather than user-driven.
          </p>,
          <p key='2'>
            As a first step, I <strong>interviewed five users</strong> who were
            frequent moviegoers, making sure to get a sample that was diverse in
            age, gender, race, and disability. In the course we were advised to
            focus on one user group for our first project, so I narrowed it down
            to users who preferred to avoid queues when booking movie tickets,
            which was the most common goal I discovered from the research. This
            user group confirmed initial assumptions in regards to preferring
            faster options such as self-checkout, but the research also revealed
            that there was more to it than just convenience. Other pain points
            included:
          </p>,
          <div key='3' className='flex gap-5 my-4'>
            {[
              'Time waisted waiting in queues',
              'Social anxiety and perceived judgement from others',
              "Knowledge of the cinema's accessibility in advance",
            ].map((point, index) => (
              <div key='point' className='flex-1 flex font-bold'>
                <span className='text-4xl mr-3'>{index + 1}</span>
                <p className='text-lg'>{point}</p>
              </div>
            ))}
          </div>,
          <p key='4'>
            I{' '}
            <strong>
              created a persona to simplify the research into one focused user
            </strong>{' '}
            which was referred to throughout the entire project to ensure the
            user remained the focus of any design decisions made.
          </p>,
          <Figure
            key='5'
            caption='1.1. User Persona'
            images={[{ image: '/images/projects/luxe/luxe-persona.png' }]}
          />,
          <p key='6'>
            Additionally, I performed a competitive analysis of similar
            ticketing apps in the market to get a feel for existing solutions. I
            examined direct competitors (movie ticketing apps such as the Odeon
            mobile app) and indirect competitors (general ticketing/ordering
            apps such as Eventbrite and Uber Eats) to ensure I was looking at
            popular apps that are well-researched, and to see if I could find a
            common booking experience across the apps.
          </p>,
          <Figure
            key='7'
            caption='1.2. Competitive analysis snippet'
            images={[
              {
                image:
                  '/images/projects/luxe/luxe-competitive-analysis-snippet.png',
              },
            ]}
          />,
          <p key='8'>
            Once I narrowed this down, I also created a user journey map to
            outline each step of the booking process.
          </p>,
          <Figure
            key='9'
            caption='1.3. User journey map'
            images={[
              { image: '/images/projects/luxe/luxe-user-journey-map.png' },
            ]}
          />,
        ],
      },
      {
        heading: 'Designing the app',
        paragraphs: [
          <p key='1'>
            I began drafting multiple paper wireframes for each step in the
            user&apos;s journey to test out different UI solutions.
          </p>,
          <Figure
            key='2'
            caption='1.4. Paper wireframes'
            images={[
              { image: '/images/projects/luxe/luxe-paper-wireframes.png' },
            ]}
          />,
          <p key='3'>
            Once the wireframes were narrowed down to the most suitable
            solutions, I gathered feedback from users on the overall layout and
            structure of each screen. I then created digital wireframes in Figma
            based on the feedback, which I then turned into a low-fidelity
            prototype, displaying the primary user flow of the ticket booking
            process to be tested by users in a usability study.
          </p>,
          <Figure
            key='4'
            caption='1.5. Lo-fi prototype'
            images={[
              { image: '/images/projects/luxe/luxe-lo-fi-prototype.png' },
            ]}
          />,
          <p key='5'>
            My favourite part of the project was adding colour, images, copy and
            other visual elements to the design. I particularly enjoyed learning
            about the Gestalt principles and other ways to take take psychology
            into account while designing the prototype. I made sure to follow
            accessibility standards as well, keeping colour contrast high enough
            and text readable.
          </p>,
          <Figure
            key='6'
            caption='1.6. Sticker sheet'
            images={[{ image: '/images/projects/luxe/luxe-sticker-sheet.png' }]}
          />,
          <p key='7'>
            After many iterations of designing, testing with users, and
            revising, the final prototype was complete.
          </p>,
          <Figure
            key='8'
            caption='1.7. Hi-fi-prototype'
            images={[
              { image: '/images/projects/luxe/luxe-hi-fi-prototype.png' },
            ]}
          />,
          <Figure
            key='9'
            caption='1.8. Demo'
            images={[{ image: '/images/projects/luxe/luxe-demo.gif' }]}
          />,
        ],
      },
      {
        heading: 'Takeaway',
        paragraphs: [
          <p key='1'>
            This course was a massive learning experience as it taught me to
            focus more on the user than just the potential solutions and
            functionality of the app. Keeping the user at the forefront of the
            design ensured that I remained empathetic rather than methodical. I
            will definitely make sure to incorporate design thinking into future
            projects.
          </p>,
          <p key='2'>
            As for potential improvements, I would&apos;ve loved to learn more
            about interaction design and include more motion and animation in
            the prototype. This definitely would&apos;ve added more character to
            the design, making for a more engaging user experience.
          </p>,
        ],
      },
    ],
  },
  {
    name: 'PAST',
    description:
      'PAST is a mobile app for users with post-stroke fatigue to follow a physical therapy programme and track their fatigue levels.',
    heading: 'Gamify your ... and ....',
    role: [roles.frontend, roles.wireframing, roles.logoDesign],
    otherProject: 'Colourify',
    tools: [tools.figma, tools.vsCode, tools.github],
    technologies: [
      technologies.reactNative,
      technologies.javaScript,
      technologies.expo,
    ],
    startDate: '2021-06',
    endDate: '2021-09',
    links: {
      presentationUrl:
        'https://docs.google.com/presentation/d/1hIhJQrXa5Qd5Lhggceuda70YpJB00HhdpQeEzL4tc2w/edit#slide=id.p',
    },
    content: [
      {
        heading: 'Overview',
        paragraphs: [
          <p key='1'>
            During my app development internship, out of a selection of prompts
            my team chose to develop a mobile app prototype for users with
            post-stroke fatigue looking to improve their fatigue levels through
            physical activity. The app guides users through a 6-step Graded
            Exercise Therapy (GET) programme that prompts users to log their
            routine and associated fatigue levels, watch recommended exercise
            videos, and complete other fitness-related goals.
          </p>,
        ],
      },
      {
        heading: 'The prompt',
        paragraphs: [
          <p key='2'>
            Our clients came up with the idea for PAST after co-authoring a{' '}
            <InlineLink href='https://pre-prod.neurosymptoms.org/wp-content/uploads/2023/03/GET-guide-booklet-version-1-22062010.pdf'>
              GET self-help guide
            </InlineLink>{' '}
            to encourage people with chronic fatigue syndrome to gradually
            increase their physical activity. They believed users would benefit
            from a mobile app to track their progress in the programme. Users
            could also show their logs to their healthcare providers to keep
            track of any changes to their health.
          </p>,
        ],
      },
      {
        heading: 'Scope',
        paragraphs: [
          <p key='3'>
            The aim of the internship was to build a working prototype by the
            end of a 12 week period using the <strong>scrum methodology</strong>
            . The scope did not include user research, so we reported back to
            our clients at the end of each sprint with a working product and
            received feedback from them instead. Eager to incorporate UI design
            into every project, I suggested that we create{' '}
            <strong>wireframes</strong> before coding, so we ended up
            structuring each sprint as follows:{' '}
            <i>
              review backlog → design prototype → code feature → client feedback
            </i>
            . I leaned into the <strong>main design role</strong> and created
            many of the wireframes, the app logo, icon, and colour scheme
            (inspired by the colours in the GET booklet). One of our team
            member&apos;s lead the backend development due to his experience in
            the field, while the rest of us shared the frontend
            responsibilities.
          </p>,
          <Figure
            key='4'
            rounded={false}
            images={[
              { image: '/images/projects/past/past-logo.png', width: 'w-96' },
              {
                image: '/images/projects/past/past-icon.png',
                width: 'w-28',
                height: 'h-28',
              },
            ]}
            caption='1.1 PAST logo and icon'
          />,
        ],
      },
      {
        heading: 'Brainstorming',
        paragraphs: [
          <p key='5'>
            We had an <strong>initial brainstorming session</strong> with our
            clients where we <strong>conceptualised user goals</strong> and{' '}
            <strong>crafted a typical user journey</strong>, landing on three
            big features to focus on. We decided that users would need to be
            able to: (1) follow the programme steps and associated daily tasks ,
            (2) log their daily routine and fatigue levels, and (3) watch
            recommended exercise videos.
          </p>,
          <p key='6'>
            I recommended we add a competitive analysis to the backlog as I
            thought it&apos;d be useful to see how our initial ideas compared to
            competitor products. I became responsible for completing this task
            and researched mostly indirect competitor health logging apps as it
            was difficult to find apps specifically for stroke survivors. The
            analysis helped to confirm some initial ideas for the UI, such as
            using a horizontal scroll on the homepage to list the user&apos;s
            daily tasks, which is a typical feature seen in similar apps.
          </p>,
        ],
      },
      {
        heading: 'Our solution',
        paragraphs: [
          <h3 className='block font-semibold text-2xl w-full' key='8'>
            Home - Following the programme steps
          </h3>,
          <p key='8'>
            We created a home screen that tracks the user&apos;s progress in the
            programme, what step they&apos;re on and the % of their progress. A
            daily to-do list displays tasks related to the current step for the
            user to complete, and once a task is completed it&apos;s greyed out
            and moved to the back of the list. Once the current step is
            complete, the user is then progressed to the next step with
            additional tasks added per step.
          </p>,
          <Figure
            key='10'
            images={[
              { image: '/images/projects/past/past-home-1.png' },
              { image: '/images/projects/past/past-home-2.png' },
            ]}
            caption='1.2 Past home screen'
            type='mobile'
          />,
          <h3 className='block font-semibold text-2xl' key='8'>
            Calendar - Logging daily routine and fatigue levels
          </h3>,
          <p key='11'>
            We developed a calendar logging feature where users can log their
            daily routine and fatigue levels. Daily logging is also prompted by
            a card in the home screen&apos;s to-do list.
          </p>,
          <Figure
            key='12'
            images={[
              { image: '/images/projects/past/past-calendar-1.png' },
              { image: '/images/projects/past/past-calendar-2.png' },
            ]}
            caption='1.3 Past calendar screen'
            type='mobile'
          />,
          <h3 className='block font-semibold text-2xl' key='8'>
            Exercises - Watching recommended exercise videos
          </h3>,
          <p key='13'>
            Our solution to this was a video library of YouTube videos supplied
            by our client. The user is prompted to complete these exercises
            daily by a card on the home screen from step 4.
          </p>,
          <Figure
            key='14'
            images={[{ image: '/images/projects/past/past-exercises.png' }]}
            caption='1.4 Past exercises screen'
            type='mobile'
          />,
        ],
      },
      {
        heading: 'Main takeaways',
        paragraphs: [
          <p key='15'>
            The prototype was handed over to our clients to take forward so we
            were unable to measure the success of the solution. It would&apos;ve
            been nice to see the product to release and gain feedback from end
            users. Did the product correctly solve user problems? Are users more
            likely to follow the GET programme and see results using the app?
          </p>,
          <p key='16'>
            In general, I also think the app would&apos;ve benefited from a
            user-centred approach. Doing user research to better understand of
            their goals and pain points would&apos;ve helped to avoid potential
            bias from our clients and us as developers. Due to the
            project&apos;s limited scope, we only had our clients to give us
            stakeholder feedback which was still helpful to have feedback at all
            instead of creating from solely a developer perspective.
          </p>,
        ],
      },
    ],
  },
];

export default projects;

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  lut,
  seoultech,
  ajatec,
  twoday,
  visma,
  threejs,
  r,
  pytorch,
  python,
  tensorflow,
  angular,
  graphql,
  flutter,
  kotlin,
  unity,
  mysql,
  nextjs,
} from '../assets'

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
]

const services = [
  {
    title: 'Software Developer',
    icon: web,
  },
  {
    title: 'Technical Consultant',
    icon: mobile,
  },
  {
    title: 'AI Enthusiast',
    icon: backend,
  },
  {
    title: 'Machine Learning Researcher',
    icon: creator,
  },
]

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },

  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },

  {
    name: 'git',
    icon: git,
  },

  {
    name: 'python',
    icon: python,
  },
  {
    name: 'pytorch',
    icon: pytorch,
  },
  {
    name: 'R',
    icon: r,
  },
  {
    name: 'TensorFlow',
    icon: tensorflow,
  },
  /*  

 {
    name: 'figma',
    icon: figma,
  },  {
    name: 'MongoDB',
    icon: mongodb,
  },  {
    name: 'GraphQL',
    icon: graphql,
  },
  {
    name: 'Flutter',
    icon: flutter,
  },  {
    name: 'NextJS',
    icon: nextjs,
  },

  {
    name: 'Unity',
    icon: unity,
  },*/
  {
    name: 'MySQL',
    icon: mysql,
  },
]

const experiences = [
  {
    title: 'Software Engineering Studies',
    company_name: 'LUT University',
    icon: lut,
    iconBg: '#000',
    date: '2018-2024',
    points: [
      `Cluster ry - Software Engineers' Guild - Board Member`,
      `Ruut ry - Student Tech Organization - Board Member`,
      'Achieving Student Certificate',
      `Scrum Master Course`,
      `1st place in Techrace`,
      `1st place in Visma Consulting Koodausta ja kisailua`,
      `1st place in Running a Software Project-course`,
    ],
  },
  {
    title: 'Junior Developer ',
    company_name: 'Visma Consulting',
    icon: visma,
    iconBg: '#fff',
    date: '2021-2023',
    points: [
      'Got to work on many interesting projects with clients from all sorts of different industries',
      `Projects ranged from refactoring an old Kotlin application to planning and implementing full scale web apps`,
      `Worked mainly in small teams with agile development methodologies`,
      `Emphasis on frontend development, TypeScript and React but got to use and learn a whole array of technologies`,
      `Was left to oversee an ongoing project over the summer on my 2nd year which gave me a real headstart to client communications`,
    ],
  },
  {
    title: `Bachelor's  Degree in Software Engineering`,
    company_name: 'LUT University',
    icon: lut,
    iconBg: '#000',
    date: '2021',
    points: ['"I think I can see light at the end of the tunnel"'],
  },
  {
    title: 'Computer Science Studies',
    company_name: 'Seoul National University of Technology and Science',
    icon: seoultech,
    iconBg: '#fff',
    date: '2023-2024',
    points: [
      'Focused my studies on Artificial Intelligence and Machine Learning',
      `Met many wonderful and super people that I'm thankful to have gotten to share the time abroad with`,
      'Dug deep and found my inner academic weapon forged in the flames of the Korean education system',
    ],
  },
  {
    title: `Master's Thesis`,
    company_name: 'Ajatec Oy, Suomen Teknologiateollisuudenliitto, LUT',
    icon: ajatec,
    iconBg: '#fff',
    date: '2024',
    points: [
      "Thesis' name: Machine Learning in Additive Manufacturing",
      `Analyzing Ajatec Oy's historical data of CAD models to find profitability indicators`,
      'The project received a research grant from Suomen Teknologiateollisuudenliitto',
      ` Python | R | Pytorch | Tensorflow | CAD `,
    ],
  },
  {
    title: 'Developer',
    company_name: 'TwoDay',
    icon: twoday,
    iconBg: '#fff',
    date: '2023-Present',
    points: [
      `Started work at Twoday Oy after moving to Helsinki, new projects new challenges!`,
      `Web apps - React, TypeScript, CSS, HTML5`,
      `Mobile app development - React Native`,
      `Cloud platforms - AWS, Azure`,
      `Databases - SQL, NoSQL, GraphQL, MongoDB`,
      `Backend and API development - JavaScript`,
      `CDI Pipelines and Version Control`,
    ],
  },
]

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
]

const projects = [
  {
    name: 'Car Rent',
    description:
      'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: lut,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Job IT',
    description:
      'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: lut,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Trip Guide',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: lut,
    source_code_link: 'https://github.com/',
  },
]

export { services, technologies, experiences, testimonials, projects }

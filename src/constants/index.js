import {
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  git,
  sass,
  figma,
  bootstrap,
  schwarzMontage,
  twitterClone,
  budget,
  threejs,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Projects',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'Junior Software Engineering (C)',
    icon: creator,
  },
  {
    title: 'Junior Graphic Design',
    icon: backend,
  },
];

const technologies = [
  {
    id: 'face-1',
    name: 'HTML 5',
    icon: html,
  },
  {
    id: 'face-2',
    name: 'CSS 3',
    icon: css,
  },
  {
    id: 'face-3',
    name: 'JavaScript',
    icon: javascript,
  },
  {
    id: 'face-4',
    name: 'React JS',
    icon: reactjs,
  },
  {
    id: 'face-5',
    name: 'git',
    icon: git,
  },
  {
    id: 'face-6',
    name: 'Sass',
    icon: sass,
  },
  // {
  //   name: 'Tailwind CSS',
  //   icon: tailwind,
  // },

  // {
  //   name: 'Three JS',
  //   icon: threejs,
  // },
  // {
  //   name: 'figma',
  //   icon: figma,
  // },
  // {
  //   name: 'bootstrap',
  //   icon: bootstrap,
  // },
];

const projects = [
  {
    name: 'Budget App in VanillaJs',
    description:
      'Vanilla JS budgeting app showcasing financial management. Features include expense tracking, budget allocation, and user-friendly interface design.',
    tags: [
      {
        name: 'javascript',
        color: 'blue-text-gradient',
      },
      {
        name: 'css',
        color: 'green-text-gradient',
      },
      {
        name: 'html',
        color: 'pink-text-gradient',
      },
    ],
    image: budget,
    source_code_link:
      'https://abechta.github.io/budget-app-vanilla-js/index.html',
  },
  {
    name: 'Twitter clone',
    description:
      'Twitter-inspired website clone demonstrating frontend development skills. Responsive design and interactive features replicate the Twitter user experience.',
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
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: twitterClone,
    source_code_link: 'https://twitter-clone-puce-seven.vercel.app/',
  },
  {
    name: 'Company website ',
    description: `Dynamic website for Czarny Montage & Vertrieb. Modern design showcases the company's offerings, integrating functionality and aesthetics. `,
    tags: [
      {
        name: 'wordpress',
        color: 'blue-text-gradient',
      },
      {
        name: 'elementor',
        color: 'green-text-gradient',
      },
      {
        name: 'graphic design',
        color: 'pink-text-gradient',
      },
    ],
    image: schwarzMontage,
    source_code_link: 'https://schwarzmontage.de/',
  },
];

export { services, technologies, projects };

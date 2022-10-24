// images
import Logo from '../src/assets/img/header/logo.svg';
import Diecast from '../src/assets/img/workouts/Diecast.png';
import Roadster from '../src/assets/img/workouts/Roadster.png';
import Model3blue from '../src/assets/img/workouts/Model3blue.png';
import Model3white from '../src/assets/img/workouts/Model3white.png';
import Model3grey from '../src/assets/img/workouts/Model3grey.png';
import Model3black from '../src/assets/img/workouts/Model3black.png';
import Cyberquad from '../src/assets/img/workouts/Cyberquad.png';
import CommunityImg1 from '../src/assets/img/community/img1.jpg';
import CommunityImg2 from '../src/assets/img/community/img2.jpg';
import CommunityImg3 from '../src/assets/img/community/img3.jpg';
import CommunityImg4 from '../src/assets/img/community/img4.jpg';
import JoinImg from '../src/assets/img/join/join.jpg';
// icons
import UsersIcn from '../src/assets/img/about/icons/users-icn.svg';
import CalendarIcn from '../src/assets/img/workouts/icons/calendar.svg';
import PriceIcn from '../src/assets/img/pricing/icons/price.svg';
import CommunityIcn from '../src/assets/img/community/icons/community-icn.svg';
import QuestionMarkIcn from '../src/assets/img/faq/icons/question-mark.svg';

export const header = {
  logo: Logo,
  btnLoginText: 'Log in',
  btnSignupText: 'Sign Up',
};

export const nav = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Shop', href: '#shop' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Community', href: '#community' },
  { name: 'FAQ', href: '#faq' },
];

export const navb = [
  { name: 'Home', href: '/home' },
  { name: 'About', href: '/about' },
  { name: 'Shop', href: '/shop' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Community', href: '/community' },
  { name: 'FAQ', href: '/faq' },
];

export const banner = {
  titlePart1: 'Model 3',
  titlePart2: 'Order Online',
  subtitle:
    'for Touchless Delivery.',
  textBtn: 'Custom Order',
  img: '',
};

export const about = {
  icon: UsersIcn,
  title: 'Our misson',
  subtitle1:
    'Solar Roof helps pay for itself with the energy it produces. As a fully integrated system, Solar Roof can maximize your solar generation and help you take control of your monthly electricity bill.',
  subtitle2:
    'With the Tesla app, you can monitor your energy production in real time. Control your system from anywhere with instant alerts and remote access.',
  link: 'Order Now',
};

export const workouts = {
  icon: CalendarIcn,
  title: 'Shop',
  programs: [
    {
      image: Diecast,
      name: 'Diecast',
    },
    {
      image: Roadster,
      name: 'Roadster',
    },
    {
      image: Model3blue,
      name: 'Model 3 Blue',
    },
    {
      image: Model3white,
      name: 'Model 3 White',
    },
    {
      image: Model3grey,
      name: 'Model 3 Grey',
    },
    {
      image: Model3black,
      name: 'Model 3 Black',
    },
    {
      image: Cyberquad,
      name: 'Cyberquad',
    },
  ],
};

export const pricing = {
  icon: PriceIcn,
  title: 'Pricing plan',
  plans: [
    {
      name: 'Basic',
      price: '20',
      list: [
        { name: 'unlimited Convert Sunlight to Energy' },
        { name: '1 Energy Monitoring' },
        { name: 'free Guaranteed Lowest Price for Solar' },
      ],
      delay: 600,
    },
    {
      name: 'Premium',
      price: '35',
      list: [
        { name: 'unlimited Convert Sunlight to Energy' },
        { name: '5 Energy Monitoring' },
        { name: 'free Guaranteed Lowest Price for Solar' },
        { name: 'Solar Panel Specs' },
      ],
      delay: 800,
    },
    {
      name: 'Elite',
      price: '49',
      list: [
        { name: 'unlimited Convert Sunlight to Energy' },
        { name: 'all Energy Monitoring' },
        { name: 'free Guaranteed Lowest Price for Solar' },
        { name: 'Solar Panel Specs' },
        { name: 'Save 50% Power Your Home' },
      ],
      delay: 1000,
    },
  ],
};

export const community = {
  icon: CommunityIcn,
  title: 'Community',
  testimonials: [
    {
      image: CommunityImg1,
      name: 'Model Y',
      message:
        '“Order Online for Touchless Delivery”',
    },
    {
      image: CommunityImg2,
      name: 'Model S',
      message:
        '“Order Online for Touchless Delivery”',
    },
    {
      image: CommunityImg3,
      name: 'Model X',
      message:
        '“Order Online for Touchless Delivery”',
    },
    {
      image: CommunityImg4,
      name: 'Solar Panels',
      message:
        '“Lowest Cost Solar Panels in America”',
    },
  ],
};

export const faq = {
  icon: QuestionMarkIcn,
  title: 'FAQ',
  accordions: [
    {
      question: 'What delivery options are available?',
      answer:
        'We offer multiple delivery options. Once your vehicle is available, you’ll receive an email and a SMS to your mobile device with a link to schedule a delivery appointment. In some states, delivery options may be limited due to availability and regulatory restrictions.',
    },
    {
      question: 'When can I expect to take delivery?',
      answer:
        'Delivery timing varies by model, location and current production availability. For more immediate delivery, check existing inventory in your area.',
    },
    {
      question: 'What connectivity package do new cars come with?',
      answer:
        'All cars purchased through Tesla will receive a free Premium Connectivity trial. After the trial period ends, Premium Connectivity will be available as a subscription through the Tesla app. Learn more about Premium Connectivity.',
    },
    {
      question: 'What kind of vehicles does Tesla accept?',
      answer:
        'We accept cars, trucks, vans and SUVs on trade-in towards the purchase of a new or used Tesla vehicle.',
    },
    {
      question: 'How does the trade-in process work?',
      answer:
        'To begin the trade-in process, get a quote through the Tesla app. As you get closer to your vehicle delivery date, you’ll receive a notification on your mobile device asking you to complete a self-inspection.',
    },
    {
      question: 'How does Tesla determine the price of my vehicle?',
      answer:
        'All Tesla trade values are generated out of a standard calculation based on vehicle configuration, history, mileage and age.',
    },
  ],
};

export const join = {
  image: JoinImg,
  title: 'Wanna join & have fun?',
  subtitle:
    'With the Tesla app, you can monitor your energy production in real time. Control your system from anywhere with instant alerts and remote access.',
  btnText: 'Reserve now',
};

export const footer = {
  logo: Logo,
  copyrightText: '© 2022 | Created By Jason LIM | All rights reserved.',
};

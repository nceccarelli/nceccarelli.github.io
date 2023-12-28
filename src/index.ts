import createCone from './vanCone';
import van from 'vanjs-core';
import Skills from './skills';
import Home from './home';
import style from './utils/style';
import NavMenu from './components/nav-menu';
import Education from './education';
import Experience from './experience';
const { div, hr, } = van.tags;

const BACKGROUND_COLOR = '#002431'

// define page components
const homePage = () => Home()
const skills = () => Skills()
const education = () => Education()
const experience = () => Experience()

// define routes
const routes = [
  { path: '/', name: 'home', callable: async () => homePage },
  { path: '/skills', name: 'skills', callable: async () => skills },
  { path: '/education', name: 'education', callable: async () => education },
  { path: '/experience', name: 'experience', callable: async () => experience },
];

// create the spa object
const routerElement = div({
  id: 'layout', style: style({
    height: 'calc(100vh - 65px)',
    width: '100%',
    overflowY: 'auto',
    paddingLeft: '10px',
    paddingRight: '10px',
    fontFamily: 'sans-serif',
    color: 'white',
  })
})
const { navLink } = createCone(routerElement, routes)

// main app layout
const App = () =>
  div({
    style: style({
      paddingTop: '10px',
      backgroundColor: BACKGROUND_COLOR,
      height: '100vh',
      width: '100vw',
      position: 'fixed',
      top: 0,
      left: 0,
    })
  },

    routerElement,
    hr(),
    NavMenu({
      navLink: navLink
    }),
  );

document.body.replaceChildren(App());
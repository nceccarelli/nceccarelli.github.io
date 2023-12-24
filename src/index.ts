import createCone from './context';
import van from 'vanjs-core';
import Skills from './skills';
import Home from './home';
import style from './utils/style';
import NavItem from './components/nav-item';
const { div, p, span, hr, i } = van.tags;

const BACKGROUND_COLOR = '#002431'

// define page components
const homePage = () => Home()
const skills = () => Skills()

// define routes
const routes = [
  { path: '/', name: 'home', callable: async () => homePage },
  { path: '/skills', name: 'skills', callable: async () => skills }
];

// create the spa object
const routerElement = div({ id: 'layout' })
const { navLink } = createCone(routerElement, routes)

// main app layout
const App = () =>
  div({
    style: style({
      paddingTop: '10px',
      backgroundColor: BACKGROUND_COLOR,
      width: '100vw',
      position: 'fixed',
      top: 0,
      left: 0,
    })
  },
    span({style: style({
      color: 'white',
      paddingLeft: '10px',
      fontSize: 'large'
    })},'About me:'),
    NavItem({
      navLink: navLink,
      navName: 'home',
      pageName: 'Home'
    }),
    NavItem({
      navLink: navLink,
      navName: 'skills',
      pageName: 'Skills'
    }),
    hr(),
    routerElement
  );

document.body.replaceChildren(App());
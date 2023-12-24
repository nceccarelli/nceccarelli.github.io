import van from "vanjs-core"
import style from "./utils/style"
import ActionLinkMenu from "./components/action-link-menu"
import H1 from "./components/h1"
import H2 from "./components/h2"
import P from "./components/p"
import H3 from "./components/h3"

const { a, div, li, p, ul, i, h1, h2, img, table, th, tbody, tr, hr } = van.tags

const BACKGROUND_COLOR = '#002431'

// Reusable components can be just pure vanilla JavaScript functions.
// Here we capitalize the first letter to follow React conventions.
const Skills = () => div({
  style: style({
    height: '100vh',
    width: '100vw',
    backgroundColor: BACKGROUND_COLOR,
    position: 'fixed',
    top: 4,
    left: 0,
    display: 'flex'
  })
},
  div("SKILLS")
)

export default Skills;

// document.body.replaceChildren(Skills());


// van.add(document.body, Skills())
// window.location.reload()
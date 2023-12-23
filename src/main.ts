import van from "vanjs-core"
import style from "./utils/style"

const { a, div, li, p, ul, i, h1, h2, img } = van.tags

const BACKGROUND_COLOR = '#002431'

// Reusable components can be just pure vanilla JavaScript functions.
// Here we capitalize the first letter to follow React conventions.
const Hello = () => div({
  style: style({
    height: '100vh',
    width: '100vw',
    backgroundColor: BACKGROUND_COLOR,
    position: 'fixed',
    top: 0,
    left: 0,
    display: 'flex'
  })
},
  div({
    style: style({
      flex: 1,
      padding: '10px'
    })
  },
    img({
      src: './res/profile.jpg',
      style: style({
        width: '100%'
      })
    })
  ),

  div({
    style: style({
      flex: 2,
      padding: '10px'
    })
  },
    h1({
      style: style({
        color: 'white'
      })
    },
      "Nicholas Ceccarelli"
    ),
    h2({
      style: style({
        color: 'white'
      })
    },
      i("Senior AI Applications Engineer")
    )
  ),
)

van.add(document.body, Hello())

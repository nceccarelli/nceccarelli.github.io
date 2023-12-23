import van from "vanjs-core"
import style from "./utils/style"

const { a, div, li, p, ul, i, h1, h2, img, table, th, tbody, tr } = van.tags

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
    ),
    p({
      style: style({
        color: 'white'
      })
    },
      "TODO: AI description"
    ),
    table(
      tbody(
        tr(
          th(
            a({
              href: 'res/files/ceccarelli_resume.pdf',
              target: '_blank'
            },
              img({
                src: './res/icons/resume.png',
                style: style({
                  width: '50px'
                })
              })
            )
          ),
          th(
            "TODO: NEXT"
          )
        )
      )
    )
  ),
)

van.add(document.body, Hello())

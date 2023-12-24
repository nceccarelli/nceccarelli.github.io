import van from "vanjs-core"
import style from "./utils/style"
import ActionLinkMenu from "./components/action-link-menu"
import H1 from "./components/h1"
import H2 from "./components/h2"
import P from "./components/p"

const { a, div, li, p, ul, i, h1, h2, img, table, th, tbody, tr, hr, nav, span } = van.tags

const BACKGROUND_COLOR = '#002431'

// Reusable components can be just pure vanilla JavaScript functions.
// Here we capitalize the first letter to follow React conventions.
const Home = () => div({
    style: style({
        // height: '100%',
        // width: '100%'
        // height: '100vh',
        // width: '100vw',
        // backgroundColor: BACKGROUND_COLOR,
        // position: 'fixed',
        // top: 4,
        // left: 0,
        display: 'flex'
    })
},
    div({
        style: style({
            flex: 1,
            padding: '10px',
            width: '33%'
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
        H1(
            "Nicholas Ceccarelli"
        ),
        H2(
            i("Senior AI Applications Engineer")
        ),
        P(
            "Passionate Software Engineer focusing on developing cutting-edge AI-centric applications. I've built a full-stack web-based chat application leveraging Next.js and ChatGPT 4, and have honed my skills in Langchain and Visual Studio extension development. My experience extends to IoT platform development, utilizing Kubernetes, Azure IoT Edge modules in C# and Python housed in Docker containers, and creating iOS apps with SwiftUI. I'm also proficient in managing Azure Infrastructure using Terraform. Always on the lookout for the next challenge to drive the future of AI and IoT technologies."
        ),
        ActionLinkMenu(),
    ),
)
export default Home;
import van from "vanjs-core"
import style from "./utils/style"
import ActionLinkMenu from "./components/action-link-menu"

const { div, i, img, h1, h2, p } = van.tags

// Reusable components can be just pure vanilla JavaScript functions.
// Here we capitalize the first letter to follow React conventions.
const Home = () => div({
    id: 'home',
    style: style({
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
            src: './profile.jpg',
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
        h1(
            "Nicholas Ceccarelli"
        ),
        h2(
            i("Senior AI Applications Engineer")
        ),
        p(
            "Passionate Software Engineer focusing on developing cutting-edge AI-centric applications. I've built a full-stack web-based chat application leveraging Next.js and ChatGPT 4, and have honed my skills in Langchain and Visual Studio extension development. My experience extends to IoT platform development, utilizing Kubernetes, Azure IoT Edge modules in C# and Python housed in Docker containers, and creating iOS apps with SwiftUI. I'm also proficient in managing Azure Infrastructure using Terraform. Always on the lookout for the next challenge to drive the future of AI and IoT technologies."
        ),
        ActionLinkMenu(),
    ),
)
export default Home;
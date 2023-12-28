import van from "vanjs-core"
import Li from "./components/li"
import H2 from "./components/h2"
import H3 from "./components/h3"
import ItalicSpan from "./components/italic-span"
import Span from "./components/span"
import IndentDiv from "./components/indented-div"

const { div, ul, br } = van.tags

// Reusable components can be just pure vanilla JavaScript functions.
// Here we capitalize the first letter to follow React conventions.
const Experience = () => div(
    H2("Experience"),

    H3("Moog Inc."),

    ItalicSpan("Senior AI Applications Engineer"),
    br(),
    Span("July 2023 - Present"),
    ul(
      Li("Discuss requirements with users, run A/B tests, and make improvements from feedback"),
      Li("Own features from ideation and diagraming to development, testing, and deployment"),
    ),
    IndentDiv("Key Accomplishments"),
    ul(
      Li("Building an extendible platform for AI applications, deployable across both commercial and government cloud infrastructures using Terraform infrastructure-as-code."),
      Li("Developing a web-based chat application utilizing the capabilities of ChatGPT 4 and Next.js."),
      Li("Integrating the RAG (Retrieval-Augmented Generation) architecture into the chat application, creating a robust document query tool within the same web interface."),
      Li("Owning the development of a Visual Studio extension designed to assist developers in writing code based on the same platform."),
      Li("Utilizing Langchain in my development process to enhance efficiency and productivity."),
    ),
    IndentDiv("Skills & Expertise Gained"),
    ul(
      Li("Proficiency in Next.js and Langchain for building efficient, scalable applications."),
      Li("Driving efficiency and effectiveness in various sectors through AI application development."),
      Li("Exploring new challenges and opportunities in the field of AI application development.")
    ),

    ItalicSpan("IoT Software Engineer"),
    br(),
    Span("July 2021 - July 2023"),
    ul(
      Li("Contributed to PI and sprint planning for the department")
    ),
    IndentDiv("Platform/Backend Experience"),
    ul(
      Li("Created a platform of microservices to manage and display hierarchy, messaging, telemetry, state, & errors from edge devices, which can be applied to any IoT project, and is exposed via an API"),
      Li("Owned Microsoft Azure infrastructure deployments via Terraform. This solution emphasizes code reusability by treating Azure resources as objects"),
      Li("Owned CI/CD process for code and infrastructure deployments using Azure DevOps build and release pipelines, Docker containerization, and Kubernetes orchestration"),
    ),
    IndentDiv("IoT Edge Experience"),
    ul(
      Li("Developed an extensive framework of telemetry-collecting edge modules for a wide variety of edge devices including vehicles and factory equipment that can be customized for clients"),
    ),

    ItalicSpan("Software Engineering Intern"),
    br(),
    Span("July 2020 - May 2021"),
  )

export default Experience;

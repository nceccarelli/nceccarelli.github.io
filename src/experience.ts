import van from "vanjs-core"
import ItalicSpan from "./components/italic-span"
import IndentDiv from "./components/indented-div"

const { div, ul, br, h2, h3, span, li } = van.tags

// Reusable components can be just pure vanilla JavaScript functions.
// Here we capitalize the first letter to follow React conventions.
const Experience = () => div(
    h2("Experience"),

    h3("Moog Inc."),

    ItalicSpan("Senior AI Applications Engineer"),
    br(),
    span("July 2023 - Present"),
    ul(
      li("Discuss requirements with users, run A/B tests, and make improvements from feedback"),
      li("Own features from ideation and diagraming to development, testing, and deployment"),
    ),
    IndentDiv("Key Accomplishments"),
    ul(
      li("Building an extendible platform for AI applications, deployable across both commercial and government cloud infrastructures using Terraform infrastructure-as-code."),
      li("Developing a web-based chat application utilizing the capabilities of ChatGPT 4 and Next.js."),
      li("Integrating the RAG (Retrieval-Augmented Generation) architecture into the chat application, creating a robust document query tool within the same web interface."),
      li("Owning the development of a Visual Studio extension designed to assist developers in writing code based on the same platform."),
      li("Utilizing Langchain in my development process to enhance efficiency and productivity."),
    ),
    IndentDiv("Skills & Expertise Gained"),
    ul(
      li("Proficiency in Next.js and Langchain for building efficient, scalable applications."),
      li("Driving efficiency and effectiveness in various sectors through AI application development."),
      li("Exploring new challenges and opportunities in the field of AI application development.")
    ),

    ItalicSpan("IoT Software Engineer"),
    br(),
    span("July 2021 - July 2023"),
    ul(
      li("Contributed to PI and sprint planning for the department")
    ),
    IndentDiv("Platform/Backend Experience"),
    ul(
      li("Created a platform of microservices to manage and display hierarchy, messaging, telemetry, state, & errors from edge devices, which can be applied to any IoT project, and is exposed via an API"),
      li("Owned Microsoft Azure infrastructure deployments via Terraform. This solution emphasizes code reusability by treating Azure resources as objects"),
      li("Owned CI/CD process for code and infrastructure deployments using Azure DevOps build and release pipelines, Docker containerization, and Kubernetes orchestration"),
    ),
    IndentDiv("IoT Edge Experience"),
    ul(
      li("Developed an extensive framework of telemetry-collecting edge modules for a wide variety of edge devices including vehicles and factory equipment that can be customized for clients"),
    ),

    ItalicSpan("Software Engineering Intern"),
    br(),
    span("July 2020 - May 2021"),
  )

export default Experience;

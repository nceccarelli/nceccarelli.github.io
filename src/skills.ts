import van from "vanjs-core"
import Li from "./components/li"
import H2 from "./components/h2"
import H3 from "./components/h3"

const { div, ul, } = van.tags

// TODO: Add more. There are more that didnt fit on my resume

// Reusable components can be just pure vanilla JavaScript functions.
// Here we capitalize the first letter to follow React conventions.
const Skills = () => div(
    H2("Skills"),

    H3("Languages"),
    ul(
      Li("JavaScript"),
      Li("Python"),
      Li("C#"),
      Li("Java"),
      Li("Swift"),
      Li("C++"),
      Li("C"),
    ),

    H3("Enterprise Skills"),
    ul(
      Li("Agile & SAFe Development"),
      Li("Unit & Integration Testing"),
      Li("Azure DevOps (incl. CI/CD pipelines)"),
    ),

    H3("Frameworks & Environments"),
    ul(
      Li("Next.js"),
      Li("React"),
      Li("Langchain"),
    ),

    H3("Azure technologies"),
    ul(
      Li("OpenAI"),
      Li("Function Apps"),
      Li("Web Apps"),
      Li("AI Search"),
      Li("IoT Hub"),
      Li("CosmosDB"),
      Li("Storage Account"),
    ),

    H3("Other technologies"),
    ul(
      Li("Kubernetes"),
      Li("Docker"),
      Li("Terraform"),
      Li("Terragrunt"),
      Li("Dapr"),
      Li("Helm"),
      Li("Git Version Control"),
      Li("Bash Scripts"),
    ),

    H3("Also proficient in"),
    ul(
      Li("System Design"),
      Li("Team Management"),
      Li("Collaboration"),
      Li("Communication"),
    ),
  )

export default Skills;

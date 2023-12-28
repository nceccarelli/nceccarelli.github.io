import van from "vanjs-core"

const { div, ul, h2, h3, li } = van.tags

// TODO: Add more. There are more that didnt fit on my resume

// Reusable components can be just pure vanilla JavaScript functions.
// Here we capitalize the first letter to follow React conventions.
const Skills = () => div(
    h2("Skills"),

    h3("Languages"),
    ul(
      li("JavaScript"),
      li("Python"),
      li("C#"),
      li("Java"),
      li("Swift"),
      li("C++"),
      li("C"),
    ),

    h3("Enterprise Skills"),
    ul(
      li("Agile & SAFe Development"),
      li("Unit & Integration Testing"),
      li("Azure DevOps (incl. CI/CD pipelines)"),
    ),

    h3("Frameworks & Environments"),
    ul(
      li("Next.js"),
      li("React"),
      li("Langchain"),
    ),

    h3("Azure technologies"),
    ul(
      li("OpenAI"),
      li("Function Apps"),
      li("Web Apps"),
      li("AI Search"),
      li("IoT Hub"),
      li("CosmosDB"),
      li("Storage Account"),
    ),

    h3("Other technologies"),
    ul(
      li("Kubernetes"),
      li("Docker"),
      li("Terraform"),
      li("Terragrunt"),
      li("Dapr"),
      li("Helm"),
      li("Git Version Control"),
      li("Bash Scripts"),
    ),

    h3("Also proficient in"),
    ul(
      li("System Design"),
      li("Team Management"),
      li("Collaboration"),
      li("Communication"),
    ),
  )

export default Skills;

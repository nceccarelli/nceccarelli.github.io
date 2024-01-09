import van from "vanjs-core"
import IndentDiv from "./components/indented-div"
import BoldSpan from "./components/bold-span"

const { div, ul, br, h2, h3, h4, span, li } = van.tags

// Reusable components can be just pure vanilla JavaScript functions.
// Here we capitalize the first letter to follow React conventions.
const Education = () => div(
    h2("Education"),

    h3("Boston University"),
    IndentDiv(div(
      span("Master of Science, "), 
      BoldSpan("Software Development")
    )),
    IndentDiv("Expected May 2024"),
    IndentDiv("GPA: 3.90"),
    IndentDiv(div(
      h4("Relevant Coursework"),
      ul(
        li("Data Science"),
        li("Software Design and Patterns"),
        li("Software Quality, Testing, and Security Management"),
        li("Advanced Programming Techniques"),
        li("Information Structures"),
        li("Information Systems Analysis and Design"),
        li("Data Structures and Algorithms")
      )
    )),
    IndentDiv(div(
      h4("Awards"),
      ul(
        li("Boston University Merit Scholarship")
      )
    )),

    h3("University at Buffalo, The State University of New York"),
    IndentDiv(div(
      span("Bachelor of Science, "), 
      BoldSpan("Computer Science"),
      span(", Software Systems Focus")
    )),
    IndentDiv(div(
      span("Bachelor of Arts, "), 
      BoldSpan("Mathematics"),
    )),
    br(),
    IndentDiv(
      "Graduated May 2021, Summa Cum Laude, with Honors"
    ),
    IndentDiv("GPA: 3.96"),
    IndentDiv(div(
      h4("Relevant Coursework"),
      ul(
        li("Software Quality in Practice"),
        li("Human-Computer Interaction"),
        li("Project Management"),
        li("Software Engineering"),
        li("Machine Learning"),
        li("Systems Programming"),
        li("Modern Networking"),
        li("Data Structures"),
        li("Algorithms"),
      ),
    )),
    IndentDiv(div(
      h4("Awards"),
      ul(
        li("Engineering Honor Society"),
        li("Dean's List"),
        li("Grace W. Capen Scholar"),
        li("Presidential Scholar"),
      ),
    )),
    
  )

export default Education;

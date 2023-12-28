import van from "vanjs-core"
import Li from "./components/li"
import H2 from "./components/h2"
import H3 from "./components/h3"
import IndentDiv from "./components/indented-div"
import BoldSpan from "./components/bold-span"
import Span from "./components/span"

const { div, ul, br } = van.tags

// TODO: Should I make the font a sans-serif?

// Reusable components can be just pure vanilla JavaScript functions.
// Here we capitalize the first letter to follow React conventions.
const Education = () => div(
    H2("Education"),

    H3("Boston University"),
    IndentDiv(div(
      Span("Master of Science, "), 
      BoldSpan("Software Development")
    )),
    IndentDiv("Expected May 2024"),
    IndentDiv("GPA: 3.90"),

    H3("University at Buffalo, The State University of New York"),
    IndentDiv(div(
      Span("Bachelor of Science, "), 
      BoldSpan("Computer Science"),
      Span(", Software Systems Focus")
    )),
    IndentDiv(div(
      Span("Bachelor of Arts, "), 
      BoldSpan("Mathematics"),
    )),
    br(),
    IndentDiv(
      "Graduated May 2021, Summa Cum Laude, with Honors"
    ),
    IndentDiv("GPA: 3.96"),
    
    // TODO: Add more from MS degree
    H3("Relevant Coursework"),
    ul(
      Li("Software Quality in Practice"),
      Li("Human-Computer Interaction"),
      Li("Project Management"),
      Li("Software Engineering"),
      Li("Machine Learning"),
      Li("Systems Programming"),
      Li("Modern Networking"),
      Li("Data Structures"),
      Li("Algorithms"),
    ),
    
    // TODO: Add BU scholarship
    H3("Awards"),
    ul(
      Li("Engineering Honor Society"),
      Li("Dean's List"),
      Li("Grace W. Capen Scholar"),
      Li("Presidential Scholar"),
    ),
  )

export default Education;

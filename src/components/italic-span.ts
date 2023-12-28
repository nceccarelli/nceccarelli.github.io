import van from "vanjs-core"
import style from "../utils/style";
const { span } = van.tags

const ItalicSpan = ( 
    content: any 
) => span({
    style: style({
        fontSize: 'large',
        fontStyle: 'italic'
    })
},
    content
)

export default ItalicSpan;
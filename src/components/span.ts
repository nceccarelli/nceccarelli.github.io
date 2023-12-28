import van from "vanjs-core"
import style from "../utils/style";
const { span } = van.tags

const Span = ( 
    content: any 
) => span({
    style: style({
        color: 'white',
        fontSize: 'large'
    })
},
    content
)

export default Span;
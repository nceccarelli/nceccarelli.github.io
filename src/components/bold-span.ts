import van from "vanjs-core"
import style from "../utils/style";
const { span } = van.tags

const BoldSpan = ( 
    content: any 
) => span({
    style: style({
        color: 'white',
        fontSize: 'large',
        fontWeight: 'bold'
    })
},
    content
)

export default BoldSpan;
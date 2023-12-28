import van from "vanjs-core"
import style from "../utils/style";
const { div } = van.tags

const IndentDiv = ( 
    content: any 
) => div({
    style: style({
        color: 'white',
        fontSize: 'large',
        paddingLeft: '20px'
    })
},
    content
)

export default IndentDiv;
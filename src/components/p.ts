import van from "vanjs-core"
import style from "../utils/style";
const { p } = van.tags

const P = ( 
    content: any 
) => p({
    style: style({
        color: 'white',
        fontSize: 'large'
    })
},
    content
)

export default P;
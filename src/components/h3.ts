import van from "vanjs-core"
import style from "../utils/style";
const { h3 } = van.tags

const H3 = ( 
    content: any 
) => h3({
    style: style({
        color: 'white',
        fontSize: 'x-large'
    })
},
    content
)

export default H3;
import van from "vanjs-core"
import style from "../utils/style";
const { h2 } = van.tags

const H2 = ( 
    content: any 
) => h2({
    style: style({
        color: 'white',
        fontSize: 'xx-large'
    })
},
    content
)

export default H2;
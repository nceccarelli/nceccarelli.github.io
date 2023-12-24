import van from "vanjs-core"
import style from "../utils/style";
const { h1 } = van.tags

const H1 = (
    content: any
) => h1({
    style: style({
        color: 'white',
        fontSize: 'xxx-large'
    })
},
    content
)

export default H1;
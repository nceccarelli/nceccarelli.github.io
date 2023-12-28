import van from "vanjs-core"
import style from "../utils/style";
const { li } = van.tags

const Li = ( 
    content: any 
) => li({
    style: style({
        color: 'white',
        fontSize: 'large'
    })
},
    content
)

export default Li;
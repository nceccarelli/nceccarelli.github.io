import van from "vanjs-core"
import style from "../utils/style";
const { a, img, th } = van.tags

interface ActionLinkParams {
    href: string,
    imageSrc: string
}

const ActionLink = ({
    href,
    imageSrc
} : ActionLinkParams) => th({
    style: style({
        padding: '10px'
    })
},
    a({
        href: href,
        target: '_blank'
    },
        img({
            src: imageSrc,
            style: style({
                width: '50px'
            })
        })
    )
)

export default ActionLink;
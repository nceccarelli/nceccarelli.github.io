

import van from "vanjs-core"
import ActionLink from "./action-link";
import style from "../utils/style";
const { table, tbody, tr } = van.tags

const ActionLinkMenu = () => table({
    style: style({
        paddingTop: '5px'
    })
},
    tbody(
        tr(
            ActionLink({
                href: 'files/ceccarelli_resume.pdf',
                imageSrc: './icons/resume.png'
            }),
            ActionLink({
                href: 'mailto:njceccarelli@gmail.com',
                imageSrc: './icons/email.png'
            }),
            ActionLink({
                href: 'http://www.linkedin.com/in/nceccarelli',
                imageSrc: './icons/linkedin.png'
            }),
            ActionLink({
                href: 'http://www.github.com/nceccarelli',
                imageSrc: './icons/github.png'
            }),
        )
    )
)

export default ActionLinkMenu;
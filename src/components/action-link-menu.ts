

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
                href: 'public/files/ceccarelli_resume.pdf',
                imageSrc: './public/icons/resume.png'
            }),
            ActionLink({
                href: 'mailto:njceccarelli@gmail.com',
                imageSrc: './public/icons/email.png'
            }),
            ActionLink({
                href: 'http://www.linkedin.com/in/nceccarelli',
                imageSrc: './public/icons/linkedin.png'
            }),
            ActionLink({
                href: 'http://www.github.com/nceccarelli',
                imageSrc: './public/icons/github.png'
            }),
        )
    )
)

export default ActionLinkMenu;
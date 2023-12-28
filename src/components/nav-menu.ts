import van from "vanjs-core"
import style from "../utils/style";

import NavItem from './nav-item'
const { span, div } = van.tags

interface NavMenuParams {
    navLink: any
}

const NavMenu = ({
    navLink
}: NavMenuParams) => div(
    span({
        style: style({
            color: 'white',
            paddingLeft: '5px',
            fontSize: 'large',
            fontFamily: 'sans-serif',
        })
    }, 'About me:'),
    NavItem({
        navLink: navLink,
        navName: 'home',
        pageName: 'Home'
    }),
    NavItem({
        navLink: navLink,
        navName: 'skills',
        pageName: 'Skills'
    }),
    NavItem({
        navLink: navLink,
        navName: 'education',
        pageName: 'Education'
    }),
    NavItem({
        navLink: navLink,
        navName: 'experience',
        pageName: 'Experience'
    }),
)

export default NavMenu;
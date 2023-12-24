import style from "../utils/style";

interface NavItemParams {
    navLink: any,
    navName: string,
    pageName: string
}

const NavItem = ({
    navLink,
    navName,
    pageName
}: NavItemParams) => navLink({
    name: navName,
    style: style({
        paddingLeft: '5px',
        paddingRight: '5px',
        fontStyle: 'italic',
        color: 'white',
        fontSize: 'large'
    })
}, pageName)

export default NavItem;
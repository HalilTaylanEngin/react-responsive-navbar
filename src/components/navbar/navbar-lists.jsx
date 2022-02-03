import {
    FcHome,
    FcStackOfPhotos,
    FcBusinessContact,
    FcAbout,
    FcWorkflow,
    FcAdvertising,
    FcBusinessman,
    FcLike,
    FcUpLeft,
    FcUpRight,
    FcUpload
} from 'react-icons/fc';

export const navbarListLeft = [
    {
        icon: <FcHome />,
        title: "Home",
        href: "home"
    },
    {
        icon: <FcStackOfPhotos />,
        title: "Galery",
        href: "galery"
    },
    {
        icon: <FcBusinessContact />,
        title: "Contact",
        href: "contact"
    },
    {
        icon: <FcAbout />,
        title: "About Us",
        href: "about"
    },
    {
        icon: <FcWorkflow />,
        title: "Products",
        href: "products"
    },
]

export const navbarListRight = [
    {
        icon: <FcAdvertising />,
        title: "Hey !",
        href: "notifications"
    },
    {
        icon: <FcBusinessman />,
        title: "Me",
        href: "account",
        dropdownItems: {
            title: "Me",
            list: [
                {
                    icon: <FcUpLeft />,
                    title: "login",
                    href: "login"
                },
                {
                    icon: <FcUpRight />,
                    title: "singout",
                    href: "login"
                },
                {
                    icon: <FcUpload />,
                    title: "register",
                    href: "login"
                },
            ]



        }




    },
    {
        icon: <FcLike />,
        title: "Favorite",
        href: "favorite"
    },
]

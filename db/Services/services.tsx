import Lift from "@/components/icons/Lift"
import Trainer from "@/components/icons/Trainer"
import Boxing from "@/components/icons/Boxing"
import Running from "@/components/icons/Running"
import img from '../../public/yellow-shirt.png'

export const services = [
    {
        id: 1,
        label: "privacy",
        img: img,
        icon: ( <Trainer fill="#624C7B" w="17"/>),
        href: "/services#training",
        title: "private training",
        body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspern",

    },
    {
        id: 2,
        label: "group sessions",
        img: img,
        icon: (<Running fill="#624C7B" w="25"/>),
        href: "/services#classes",
        title: "classes",
        body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspern",

    },
    {
        id: 3,
        label: "combat",
        img: img,
        icon: (<Boxing fill="#624C7B" w="22"/>),
        href: "/services#boxing",
        title: "boxing",
        body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspern",

    },
]
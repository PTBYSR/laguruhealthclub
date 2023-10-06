import Lift from "@/components/icons/Lift"
import Trainer from "@/components/icons/Trainer"
import Boxing from "@/components/icons/Boxing"
import Running from "@/components/icons/Running"
import img from '../../public/yellow-shirt.png'
import { StaticImageData } from "next/image"
import axios from 'axios'
export type servicesCardType = {
    id: number;
    label: string;
    img: StaticImageData;
    href: string;
    title: string;
    description: string;
}
export type locationType = {
    description: string;
}
export type singlesType = {
    duration: string;
    pricing: string;
}

export const services = [
    {
        id: 1,
        label: "privacy",
        img: img,
        href: "/services#training",
        title: "private training",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspern",

    },
    {
        id: 2,
        label: "group sessions",
        img: img,
        href: "/services#classes",
        title: "classes",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspern",

    },
    {
        id: 3,
        label: "combat",
        img: img,
        href: "/services#boxing",
        title: "boxing",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspern",

    },
]

export const getServices = async () => {
    try{
        
        const response = await {data : []}

        const res = await axios.get<{data : {id: number, attributes : any}[]}>(`http://127.0.0.1:1337/api/service-banners` , {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${process.env.BEARER_TOKEN}`
            }
          });
        const newtest :  servicesCardType[] = res.data.data.map(res => {
            return {
                id: res.id,
                label : `${res.attributes.label ?? res.attributes.title}`,
                img:img, 
                href:``,
                title:res.attributes.title,
                description:res.attributes.description
            } as servicesCardType
        })
        return newtest
    }
    catch (e) 
    {
        return services
    }
}

export const getCouples = async () => {
    try{
        
        const response = await {data : []}

        const res = await axios.get<{data : {id: number, attributes : any}[]}>(`http://127.0.0.1:1337/api/couples` , {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${process.env.BEARER_TOKEN}`
            }
          });
        const newtest :  singlesType[] = res.data.data.map(res => {
            return {
                duration:res.attributes.duration,
                pricing:res.attributes.price
            } as singlesType
        })
        console.log(newtest, "coupleess")
        return newtest
    }
    catch (e) 
    {
        console.log((e as Error).message, "error of axios singles")
        return services
    }
}
export const getSingles = async () => {
    try{
        
        const response = await {data : []}

        const res = await axios.get<{data : {id: number, attributes : any}[]}>(`http://127.0.0.1:1337/api/singles` , {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${process.env.BEARER_TOKEN}`
            }
          });
        const newtest :  singlesType[] = res.data.data.map(res => {
            return {
                duration:res.attributes.duration,
                pricing:res.attributes.price
            } as singlesType
        })
        console.log(newtest, "singsleess")
        return newtest
    }
    catch (e) 
    {
        console.log((e as Error).message, "error of axios singles")
        
        return services
    }
}
export const getServicesBig = async () => {
    try{
        
        const response = await {data : []}

        const res = await axios.get<{data : {id: number, attributes : any}[]}>(`http://127.0.0.1:1337/api/big-banners` , {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${process.env.BEARER_TOKEN}`
            }
          });
        const newtest :  servicesCardType[] = res.data.data.map(res => {
            return {
                id: res.id,
                label : `${res.attributes.label ?? res.attributes.title}`,
                img:img, 
                href:``,
                title:res.attributes.title,
                description:res.attributes.description
            } as servicesCardType
        })
        return newtest
    }
    catch (e) 
    {
        console.log((e as Error).message, "error of axios singles")
        
        return services
    }
}
export const getLocation = async () => {
    try{
        
        const response = await {data : []}

        const res = await axios.get<{data : {id: number, attributes : any}[]}>(`http://127.0.0.1:1337/api/location` , {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${process.env.BEARER_TOKEN}`
            }
          });
        // const newtest :  locationType[] = res.data.data.map(res => {
        //     return {
        //         description:res.attributes.description
        //     } as locationType
        // })
        const newtest = res.data.data
        // console.log(newtest, "netestststststssttst")
        return newtest
    }
    catch (e) 
    {
        console.log((e as Error).message, "error of axios singles")
        
        return "Gwarimpa"
    }
}
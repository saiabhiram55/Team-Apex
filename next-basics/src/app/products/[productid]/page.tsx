import { Metadata } from "next";

type Props={
    params : {
        productid : string;
    }
}

export const generateMetadata = async ({ params }: Props) : Promise<Metadata> =>{
    const title = await new Promise( reslove =>{
        setTimeout(()=>{
            reslove (`iphone ${params.productid}`)
        },100);
    });
    return {
        title : `product ${ title }`,
    }
}

export default function productDetails({ params }: Props) {
    return <h3> Details about products {params.productid} </h3>;
}
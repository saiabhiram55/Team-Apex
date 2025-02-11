import { notFound } from "next/navigation";

function getRandomInt(count: number){
    return  Math.floor(Math.random()*count);
}


export default function ReviewDetails({
    params,
}:{
    params : {
        productid :string ;
        reviewid : string ;
    };
}){
    const random = getRandomInt(2);

    if(random === 1){
        throw new Error("Error Loading Review");
    }
    
    if(parseInt(params.reviewid) > 1000){
        notFound();
    }
    return (
        <h1>
            review {params.reviewid} for products { params.productid}
        </h1>
    );
}    
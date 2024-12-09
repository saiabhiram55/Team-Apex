import { notFound } from "next/navigation";


export default function ReviewDetails({
    params,
}:{
    params : {
        productid :string ;
        reviewid : string ;
    };
}){
    if(parseInt(params.reviewid) > 1000){
        notFound();
    }
    return (
        <h1>
            review {params.reviewid} for products { params.productid}
        </h1>
    );
}    
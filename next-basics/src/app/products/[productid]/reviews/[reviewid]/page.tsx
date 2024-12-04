export default function ReviewDetails({
    params,
}:{
    params : {
        productid :string ;
        reviewid : string ;
    };
}){
    return (
        <h1>
            review {params.reviewid} for products { params.productid}
        </h1>
    );
}    
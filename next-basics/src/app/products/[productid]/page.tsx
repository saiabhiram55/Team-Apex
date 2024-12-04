export default function productDetails({ 
    params ,
 }:{
    params :{ productid : string};
}){
    return <h3> Details about products {params.productid} </h3>;
}
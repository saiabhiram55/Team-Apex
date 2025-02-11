import Product from "./Product";



function ProductTab(){
  // let optional=["hi-tech","realiable"]
    return (
        <>
          <Product title="laptop" price={3000000} />    
          <Product title="laptop" price={30000}/>
          <Product title="laptop" price="30000"/>
          <Product title="laptop" price="30000"/>
        </>
     
    );
}
export default ProductTab
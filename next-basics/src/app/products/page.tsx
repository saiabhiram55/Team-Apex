import Link from "next/link";

export default function products(){
  const productId = 100;
    return ( 
      <>
      <Link href="/">Home Page</Link>
        <h1>Products List</h1>
        <h3><Link href="products/1">Products 1 </Link></h3>
        <h3><Link href="products/2">Products 2 </Link></h3>
        <h3><Link href="products/3" replace >Products 3 </Link></h3>       //replace meaning is back to home page dirrectly
        <h2><Link href={`products/${productId}`}> Product {productId}</Link></h2>
      </>
    );
}
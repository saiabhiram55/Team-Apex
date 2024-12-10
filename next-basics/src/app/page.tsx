import Link from "next/link";
export default function Home(){
    return( 
    <>
    <h1>hello welcome!</h1>
    <Link href="/blog">blog</Link>
    <Link href="/products">Products</Link>
    </>
    );
}
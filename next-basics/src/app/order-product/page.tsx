"use client"
import { useRouter } from "next/navigation";

export default function OrderProduct(){
    const router = useRouter();
    const handleclick =() => {
        console.log("Placing ur Order");
        router.push("/")
    }
    return(
    <>
        <h3>Order Product</h3>
        <button onClick={handleclick}>Place Order</button>
    </>
    );
}



function Product({title,price = 2}) {
    // console.log(props)
    // let isDiscount = price > 30000 ? "5%" : "" ;
    let styles={backgroundColor : price > 30000 ? "yellow" : ""}
    return (
        <>
            <div className="Product" style={styles}>
                <h3>{title}</h3>
                <h2>{price}</h2>
                {/* <p>
                    {features.map((feature)=>(
                        <li>{feature}</li>
                    )
                    )}
                </p> */}

                { price > 30000 ? <p> Discount is "5%"</p> : null }
            </div>
        </>
    );
}

export default Product;

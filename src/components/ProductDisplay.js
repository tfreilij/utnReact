import React from 'react';

function ProductDisplay(props) {

    let product = props.product;
    console.log(product)

    let styleInternalDiv = {
        width: "200px",
        margin: "5px auto",
        border: "solid 2px",
        textAlign: "center"
        
    }

    let productBoxStyle = {
        width: "20%",
        margin: "auto",
        border: "solid 2px"
    }
    return (
        <div style={productBoxStyle}>
            <div style={styleInternalDiv}>{product.id}  </div>
            <div style={styleInternalDiv}> {product.title} </div>
            <div style={styleInternalDiv}> {product.body} </div>             
        </div>
    )



}

export default ProductDisplay;
import React from 'react';
import {Link} from "react-router-dom";

function ProductDisplay(props) {

    let product = props.product;
    let showButton = props.button;
    console.log(product)

    let styleInternalDiv = {
        width: "80%",
        margin: "5px auto",
        border: "solid 2px",
        textAlign: "center"
        
    }

    let productBoxStyle = {
        width: "60%",
        margin: "auto",
        border: "solid 2px"
    }
    
    const handleClick = () => alert('producto comprado');
    let productId = product.id;
    let productDisplay;
    if ( showButton )
    {
       
        productDisplay = 
            <div style={productBoxStyle}>
                <div style={styleInternalDiv}>
                    {product.id}  
                </div>
                <div style={styleInternalDiv}> 
                    {product.title} 
                </div>
                <div style={styleInternalDiv}> 
                    {product.body} 
                </div>
                <button style={{margin:"auto"}} onClick={handleClick} > 
                    Comprar
                </button> 
 
                <Link to={'/home'}>
                    <button style={{margin:"auto"}}> 
                        Volver
                    </button>
                </Link>

            </div>
    }
    else {
        productDisplay = 
            <div style={productBoxStyle}>
                <div style={styleInternalDiv}>
                    <Link to={'/product/'+productId}>{productId}</Link>  
                </div>
                
                <div style={styleInternalDiv}> {product.title} </div>
                <div style={styleInternalDiv}> {product.body} </div>             
            </div>
    }
    

    return productDisplay;


}

export default ProductDisplay;
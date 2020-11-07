import React from 'react';
import {Link} from "react-router-dom";
import { Card } from 'react-bootstrap';

function ProductDisplay(props) {

    let product = props.product;
    let showButton = props.button;

    
    const handleClick = () => alert('producto comprado');
    let productId = product.id;
    let productDisplay;
    if ( showButton )
    {
       
        productDisplay =


        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{product.id}</Card.Subtitle>
                <Card.Text>
                {product.body}
                </Card.Text>
                <Card.Link href="#">
                    <button style={{margin:"auto"}} onClick={handleClick} > 
                        Comprar
                    </button>
                </Card.Link>
                <Card.Link href="#">
                    <Link to={'/'}>
                        <button> Volver </button>
                    </Link>
                </Card.Link>
            </Card.Body>
        </Card>

    }
    else {
        productDisplay = 

        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    <Link to={'/product/'+productId}>{productId}</Link> 
                    </Card.Subtitle>
                <Card.Text>
                    {product.body}
                </Card.Text>
            </Card.Body>
        </Card>
            
    }
    

    return productDisplay;


}

export default ProductDisplay;
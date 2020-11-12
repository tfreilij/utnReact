import React from 'react';
import {Link} from "react-router-dom";
import { Card } from 'react-bootstrap';

function ProductDisplay(props) {

    const product = props.product;
    let showButton = props.button;

    const name = product.name;
    const description = product.description;
    const price = product.price;
    const sku = product.sku;
    const productId =props.id;
    
    const handleClick = () => alert('producto comprado');
   
    const heading = <>
            <Card.Title>
                <Link to={'/product/'+productId}>
                    {name}    
                </Link>
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
                {sku}
            </Card.Subtitle>
    </>;

    const body = <>
        <Card.Text>
            {description}
        </Card.Text>
        <Card.Text>
            {price}
        </Card.Text>
    </>;

    const buyButton = <Card.Link as={Link} to={'/'}>
                        <button style={{margin:"auto"}} onClick={handleClick} > 
                            Buy
                        </button>
                    </Card.Link>;
    
    const returnButton = <Card.Link as={Link} to={'/'}>
                                <button> Return </button>
                        </Card.Link>;

    if ( showButton ){
       
        return <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        {heading}
                        {body}
                        {buyButton}
                        {returnButton}
                    </Card.Body>
                </Card>

    }
    else {
        return <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        {heading}
                        {body}
                    </Card.Body>
                </Card>
            
    }
    


}

export default ProductDisplay;
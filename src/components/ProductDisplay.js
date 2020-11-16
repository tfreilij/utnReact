import React from 'react';
import {Link, useHistory} from "react-router-dom";
import { Card, Nav , Button} from 'react-bootstrap';

function ProductDisplay(props) {

    const product = props.product;
    let showButton = props.button;

    const name = product.name;
    const description = product.description;
    const price = product.price;
    const sku = product.sku;
    const productId =props.id;
    const imgUrl = product.imageUrl;
    

    const history = useHistory();

    const handleBuyClick = () => {
        alert('producto comprado');
        history.push("/")
    }

    const handleReturnClick = () => {
        history.push("/")
    }

    

    const heading = <>
            <Card.Img variant="top"  src={imgUrl} />
            <Nav.Link as={Link} to={'/product/'+productId} >{name} </Nav.Link>
    </>;

    const body = <>
               
        <Card.Body> Sku : {sku}</Card.Body>
        <Card.Body>Description : {description}</Card.Body>
        <Card.Body>Price : {price}</Card.Body>
    </>;

    const buyButton = <Button variant="primary" onClick={handleBuyClick} >Buy </Button>;
    
    const returnButton = <Button variant="primary" onClick={handleReturnClick} >Return </Button>
    const style = {
        width:"10em",
        height: "35em",
        margin:"auto"
    }


    if ( showButton ){
       
        return <Card style={style}>
                
                    <Card.Body>
                        {heading}
                        {body}
                        {buyButton}
                        {returnButton}
                    </Card.Body>
                </Card>

    }
    else {
        return <Card style={style}>
                    <Card.Body>
                        {heading}
                        {body}
                    </Card.Body>
                </Card>
            
    }
    


}

export default ProductDisplay;
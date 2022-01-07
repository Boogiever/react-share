import React from 'react';
import {useNavigate} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
export interface ProductData{
    img:string;
    shortDescription:string;
    price:double;
    link:string
}
const Product= function(props:ProductData){
    const navigate = useNavigate();

    const clickProduct = function(link){
        navigate(link);
    }

    return (
       <Card style={{ width: '12rem',margin: '8px',borderRadius: '16px' }} onClick={() => clickProduct(props.link)}>
       <Card.Img variant="top" src={props.img} />
       <Card.Body>
         <Card.Text>
           {props.shortDescription}
         </Card.Text>
         <font color="error">¥ {props.price}</font>
         </Card.Body>
       </Card>
    );

};

export default Product;

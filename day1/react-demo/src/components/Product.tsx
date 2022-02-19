import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import {Button, styled, TextField} from "@mui/material";

interface ComponentProps<T> {
    product:ProductData
}

interface ProductData{
    img:string;
    shortDescription:string;
    price:string;
    link:string
}

const Product = (props:ComponentProps<ProductData>)=>{
    const navigate = useNavigate();
    const {product} = props;
    const [isEditing,setIsEditing]=useState(false);


    const clickProductImg = function(link){
        navigate(link);
    }

    const changePrice=function () {
        setIsEditing(true);
    }

    const savePrice=()=>{
    }


    const inputTextChange=function (value:string) {
        editingProduct.price=value;
    }

    const PriceInput=styled('div')({
        width:'150px',
        input:{
            height:'9px',
            textAlign:'center'
        }
    })

    return (
       <Card style={{ width: '12rem',margin: '8px',borderRadius: '16px' }} >
       <Card.Img variant="top" src={product.img} onClick={() => clickProductImg(product.link)}/>
       <Card.Body>
         <Card.Text>
           {product.shortDescription}
         </Card.Text>
           <div>
           {
               isEditing?
                   <PriceInput>
                       <TextField size={"small"} variant={"outlined"} defaultValue={product.price} onChange={(v)=>{inputTextChange(v.target.value)}}/>
                       <Button onClick={()=>savePrice()}>Save</Button>
                   </PriceInput>
                       :<font color="error">¥ {product.price}</font>
           }
           <button  onClick={()=>changePrice()}>change Price</button>
           </div>
       </Card.Body>
       </Card>
    );
};

export default Product;

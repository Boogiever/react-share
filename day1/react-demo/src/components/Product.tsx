import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import {Button, TextField} from "@mui/material";
import {PriceInput} from './style.ts';

interface ComponentProps<T> {
    product:ProductData;
    changeProductPrice:(id:string,price:string)=>unknown;
}

export interface ProductData{
    id:string;
    img:string;
    shortDescription:string;
    price:string;
    link:string
}

const Product = (props:ComponentProps<ProductData>)=>{
    const navigate = useNavigate();
    const [editingPrice,setEditingPrice]=useState<string>();
    const {product,changeProductPrice} = props;
    const [isEditing,setIsEditing]=useState(false);

    const clickProductImg = function(link){
        navigate(link);
    }

    const changePrice=function () {
        setIsEditing(true);
    }

    const savePrice=(id:string,price:string)=>{
        price?changeProductPrice(id,price):changeProductPrice(id,product.price)
        setIsEditing(false);
    }


    const inputTextChange=function (value:string) {
        console.log("aaaaaaaaa")
        setEditingPrice(value);
    }

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
                       <TextField size={"small"}
                                  variant={"outlined"}
                                  defaultValue={product.price}
                                  onChange={(v)=>{inputTextChange(v.target.value)}}/>
                       <Button onClick={()=>savePrice(product.id,editingPrice)}>Save</Button>
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

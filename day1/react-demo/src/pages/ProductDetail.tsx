import React from 'react';
import {useParams} from 'react-router-dom';

function ProductDetail(){
    const {id} = useParams();
    return (
       <h1>
         this product id is {id}
       </h1>
    );

}

export default ProductDetail;

import React from 'react';
import { useGetProductsDataQuery } from '../features/products/productsSlice';

const ProductsCard = () => {
    const res = useGetProductsDataQuery();
    console.log(res);
    return (
        <div>
            hello i am product card
        </div>
    );
};

export default ProductsCard;
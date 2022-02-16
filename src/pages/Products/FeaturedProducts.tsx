import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import { ProductItemMini } from '../../models/product.model';
import ProductList from '../../components/products/ProductList';

function FeaturedProducts() {
    const [products, setProducts] = useState<ProductItemMini[]>([])
    useEffect(() => {
        axios.get<any, AxiosResponse<ProductItemMini[]>, any>('/api/products.json').then(res => {
            setProducts(res.data);
        })
    }, [])

    return <div>
        <h3>Feature Products</h3>
        {!products && <h3>Loading ..</h3>}
        {products && <ProductList products={products} />}

    </div>;
}

export default FeaturedProducts;

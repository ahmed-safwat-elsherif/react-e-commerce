import { Grid } from '@mui/material';
import React from 'react'
import { ProductItemMini } from '../../models/product.model';
import ProductListItem from './ProductListItem';

type Props = {
    products: ProductItemMini[]
}
function ProductList({ products }: Props) {
    return (
        <div style={{ width: '90%', margin: 'auto' }}>
            <Grid container spacing={2}>
                {products.map(product => (
                    <Grid key={product.id} item md={4} sm={2}>
                        <ProductListItem key={product.id} product={product} />
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default ProductList
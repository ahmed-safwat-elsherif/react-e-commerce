import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ProductItemMini } from '../../models/product.model'
import { useNavigate } from 'react-router-dom';
type Props = {
    product: ProductItemMini
};

function ProductListItem({ product: { id, price, image, name } }: Props) {
    const navigate = useNavigate();
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
                image={image}
                alt={name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    $ {price}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={() => navigate('/products/' + id)}>Go to</Button>
            </CardActions>
        </Card>
    )
}
export default ProductListItem;
import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
function ViewProductsBtn() {
    const navigate = useNavigate();
    return <Button variant='contained' color='primary' onClick={() => navigate('products')}>
        To products
    </Button>;
}

export default ViewProductsBtn;

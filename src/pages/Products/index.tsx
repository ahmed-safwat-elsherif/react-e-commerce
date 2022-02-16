import { Divider, Grid } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, Outlet, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { PageRoute } from '../../models/routes.model';
import Button from '@mui/material/Button';
import { getObjFromSearchParams } from '../../utilities/get-object-from-searchparams';

const productsCategories: PageRoute[] = [
    { label: 'Featured', url: 'featured' },
    { label: 'New', url: 'new' }
]
function Products() {
    const [searchParams, setSearchParams] = useSearchParams({});
    const paramsObj = getObjFromSearchParams(searchParams);
    console.log(paramsObj);

    const navigate = useNavigate();
    const location = useLocation()
    return <>
        <Divider></Divider>
        <div style={{ width: '50%' }}>
            <Grid container spacing={3}>
                {
                    productsCategories.map(({ label, url }, index) => (
                        <Grid item md={6} key={index}>
                            <NavLink to={url}>
                                {label}
                            </NavLink>
                        </Grid>
                    ))
                }
            </Grid>
        </div>
        <Divider>Products</Divider>
        <div>
            <Button variant='contained' onClick={() => setSearchParams({ filter: 'name' }, { replace: false })}>set filter params</Button>
        </div>
        <div>
            <pre>
                search params = {JSON.stringify(paramsObj)}
            </pre>
        </div>
        <hr />
        <div>
            <Button onClick={() => navigate('/about', { state: location.pathname + location.search + location.hash })}>Click</Button>
        </div>
        <br />
        <Outlet />
    </>;
}

// export default Products;

import { Button } from '@mui/material';
import React from 'react';
import { Navigate, useSearchParams } from 'react-router-dom';
import { getObjFromSearchParams } from '../../utilities/get-object-from-searchparams';

function NewProducts() {
    const [searchParams, setSearchParams] = useSearchParams();
    const paramsObj = getObjFromSearchParams(searchParams);
    return <div>
        <h3>
            New products
        </h3>
        <div>
            <pre>
                search params = {JSON.stringify(paramsObj)}
            </pre>
        </div>
        <Button onClick={() => Navigate({
            to: '/'
        })}>Back to home</Button>
    </div>;
}

export default NewProducts;

import React from 'react'
import { useParams } from 'react-router-dom'

function ProductItemPage() {
    const params = useParams<{ id?: string }>();
    const id = params?.id;

    return (
        <div>
            You're viewing product item of id: {id}
        </div>
    )
}

export default ProductItemPage
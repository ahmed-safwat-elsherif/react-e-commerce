import { Button } from '@mui/material';
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function About() {
    const location = useLocation();
    console.log({ location });
    const navigate = useNavigate();
    return (
        <>
            <h2>About Page</h2>
            <div>
                Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Asperiores, soluta officiis
                dolores obcaecati sequi nihil quos praesentium quas id laboriosam veritatis odio impedit tenetur aliquam voluptates? Cum eveniet debitis fuga?
            </div>
            <Button onClick={() => navigate(location.state as string || '/')}>back</Button>
        </>
    )
}

export default About
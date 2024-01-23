import React from 'react'
import { Button } from 'react-bootstrap';

function Community() {
    return (
        <>
            <div className="image text-center" style={{ top: "80%" }}   >
                <img src="logo192.png" alt="logo" width={160} />
            </div>
            <div className="comm text-white fs-1 fw-bold text-center">
                <h1 className='mb-3'>Welcome to 
                    Our community</h1>
                    <Button variant='primary' className='fs-5 mb-5'>Get Started</Button>
            </div>
            

        </>
    )
}

export default Community;
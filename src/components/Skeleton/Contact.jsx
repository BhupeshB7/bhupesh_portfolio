import {  Skeleton } from '@mui/material'
import React from 'react'

const Contact = () => {
  return (
    <div className='card'>
       <div className="contact-container d-flex flex-column justify-content-center align-items-center" >
        <div className='left-col '>

            <Skeleton
              variant="rectangular"
              width="100%"
              height={250}
              style={{  padding: '10px',borderRadius: 8}}
            />
        </div>
            <div className='right-col'>
              <>
              <Skeleton width="40%"  height={40}/>
              <Skeleton width="30%" />
              <Skeleton
              variant="rectangular"
              width="100%"
              height={33}
              style={{ borderRadius: 2, padding: '10px' }}
            />
              <Skeleton width="35%" />
            <Skeleton
              variant="rectangular"
              width="100%"
              height={33}
              style={{ borderRadius: 2, padding: '10px' }}
            />
             <Skeleton width="60%" />
            <Skeleton
              variant="rectangular"
              width="100%"
              height={33}
              style={{ borderRadius: 2, padding: '10px' }}
            />
            <Skeleton width="35%" />
            <Skeleton
              variant="rectangular"
              width="100%"
              height={90}
              style={{ borderRadius: 2, padding: '10px' }}
            />
            <Skeleton
              variant="rectangular"
              width="23%"
              height={45}
              style={{ borderRadius: 2, padding: '10px',marginTop:'10px' }}
            />
              </>
            </div>
          </div>
    </div>
  )
}

export default Contact
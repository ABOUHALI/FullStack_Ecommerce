import { Box, Grid ,Avatar, Rating} from '@mui/material'
import React from 'react'

const ProductReviewCard = () => {
  return (
    <div>
        <Grid container spacing={2} gap={3}>
            <Grid item xs={1}>
                <Box>
                    <Avatar className='text-white'
                    sx={{width:56,height:56,bgcolor:"#9155fd"}}>A</Avatar>
                </Box>
            </Grid>
            <Grid item xs={9}>
                <div className='space-y-2'>
                    <div>
                        <p className='font-semibold text-lg'>Ayman</p>
                        <p className='opacity-70'>26 February,2024</p>
                    </div>
                </div>

                <Rating value={4.5} name='half-ratings'readOnly precision={.5}/>
                <p>Top Hbabi thmq waw</p>
            </Grid>
        </Grid>
    	
    </div>
  )
}

export default ProductReviewCard
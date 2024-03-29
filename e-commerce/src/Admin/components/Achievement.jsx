import { Button, Card, CardContent, Typography, styled } from '@mui/material'
import React from 'react'

const TriangleImg=styled("img")({
    right:0,
    bottom:0,
    height:170,
    position:"absolute"
  })
  
  const TrophyImg=styled("img")({
    right:36,
    bottom:20,
    height:98,
    position:'absolute'
  })
  

const Achievement = () => {
  return (
    <Card className='' sx={{position:"relative"}}>
        <CardContent>
        <Typography variant='h6' sx={{letterSpacing:".25px"}}>
            Ayman E-commerce
        </Typography>
        <Typography variant='body2'>
            Congratulations!
        </Typography>
        <Typography variant='h5' sx={{my:3.1}}>99k</Typography>
        <Button size='small' variant='contained'>View Sales</Button>
        <TriangleImg src=''></TriangleImg>
        <TrophyImg src='https://static.vecteezy.com/system/resources/thumbnails/000/680/151/small_2x/gold-trophy-with-the-name-plate.jpg'></TrophyImg>
        </CardContent>      
    </Card>
  )
}

export default Achievement
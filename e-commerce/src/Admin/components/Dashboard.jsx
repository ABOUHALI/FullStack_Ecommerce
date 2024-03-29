import styled from '@emotion/styled'
import { Grid } from '@mui/material'
import React from 'react'
import Achievement from './Achievement'
import MonthyOverview from './MonthyOverview'
import ProductTable from './ProductTable'


const AdminDashboard = () => {
  return (
    <div className='p-10'>
        <Grid container spacing={2}>
            <Grid item xs={12} md={4 }>
                <Achievement/>
            </Grid>
            <Grid item xs={12} md={8}>
                <MonthyOverview/>
            </Grid>
            <Grid item xs={6} md={6}>
                <ProductTable/>
            </Grid>
        </Grid>
    </div>
  )
}

export default AdminDashboard
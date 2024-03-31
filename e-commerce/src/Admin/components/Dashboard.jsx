import styled from '@emotion/styled'
import { Grid } from '@mui/material'
import React from 'react'
import Achievement from './Achievement'
import MonthyOverview from './MonthyOverview'
import ProductTable from './ProductTable'
import OrdersTable from './OrdersTable'
import OrderTableView from '../View/OrderTableView'
import ProductTableView from '../View/ProductTableView'


const AdminDashboard = () => {
  return (
    <div className='p-10'>
        <Grid container spacing={3} >
            <Grid item xs={12} md={4 }>
                <div><Achievement/></div>
                
            </Grid>
            <Grid item xs={12} md={8}>
                <div><MonthyOverview/></div>
                
            </Grid>
            <Grid className="" item xs={6} md={6}>
                <div><OrderTableView/></div>
                
            </Grid>

            <Grid className="" item xs={6} md={6}>
                <div><ProductTableView/></div>
                
            </Grid>
        </Grid>
    </div>
  )
}

export default AdminDashboard
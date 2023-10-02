import React from 'react'
import { DefaultNav } from '../components/Navbars/DefaultNav'
import { Banner } from '../components/banner.js'
import { Box, Button, TextField } from '@mui/material'

export const Register = () => {
  return (
    <Box>
        <DefaultNav />
        <Banner />
        <Box className="pricing" sx={{p:5}}>
          <h5>Fill in all the fields</h5>
          <form action="https://formsubmit.co/info@witla.co.ls" method="POST">
            <Box sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              gap: 2
            }}>
              <TextField name='First Name' required label="First Name"/>
              <TextField name='Last Name' required label="Last Name" />
              <TextField name='Job Title' required label="Job Title"/>
              <TextField name='Company' required label="Campony"/>
              <TextField name='Address' required label="Address"/>
              <TextField name='District/City' required label="District/City"/>
              <TextField name='Country//Region' required label="Country/Region"/>
              <TextField name='Business Phone' required label="Business Phone"/>
            </Box>
            <br/>
            <Button type='submit' variant='contained' fullWidth >
              Register
            </Button>
          </form>
        </Box>
    </Box>
  )
}

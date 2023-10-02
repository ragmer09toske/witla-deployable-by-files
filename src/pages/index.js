import { Box, Card, Divider } from '@mui/material'
import React from 'react'
import { DefaultNav } from '../components/Navbars/DefaultNav'
import { Banner } from '../components/banner.js'
import { Home } from './pressentations/index';
import { Footer } from '../components/footer';
import { Solid } from '../components/solid';
import useIsDesktop from '../hooks/Device';

export const Welcome = () => {
  return (
    <Box>
        <DefaultNav />
        <Banner />
        <Home />
        <Footer />
    </Box>
  )
}

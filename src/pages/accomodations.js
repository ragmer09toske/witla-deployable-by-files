import React from 'react'
import { DefaultNav } from '../components/Navbars/DefaultNav'
import { Banner } from '../components/banner.js'
import { Box, Card } from '@mui/material'
import mmelesi from "../Assets/melesi.jpg"
import useIsDesktop from '../hooks/Device'
import { Mail, Phone, Web } from '@mui/icons-material'
export const Accomodation = ({numbers,email,name}) => {
  const isDesktop = useIsDesktop()
  return (
    <div>
        <DefaultNav />
        <Banner />
        <Box sx={{p:5}}>
         <Card sx={{
          width: "100%",
          height: "100px",
          borderRadius: 3
         }}
         className='topBannerAccomodation'
         >
          <Box sx={{
            color: "White"
          }}
          className="bannerOverlay"
          >
            <Box sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%"
            }}>
              <p>Accomodations</p>
            </Box>
          </Box>
          </Card>
          <br/>
          <Card sx={{p:2}}>
            <Box sx={{
              borderRadius: 2, 
              display: "flex",
              justifyItems: 'center',
              alignItems: "center",
              gap: 1
            }}>
              <Box sx={{borderRadius: 2}}>
                {isDesktop ? <img src={mmelesi} style={{borderRadius: 2}} alt='Mmelesi' /> : <img src={mmelesi} style={{borderRadius: 2}} alt='Mmelesi' width={120}/>}
              </Box>
              <Box sx={{width: "100%"}}>
                  <h3>Mmelesi Lodge</h3>
                  <Box style={{marginTop: -20}}>
                    <h5>Lodge</h5>
                  </Box>
                  <Box style={{marginTop: -50}}  sx={{display: 'flex', alignItems: "center"}}>
                    <Box>
                      <h6><span><Phone/> </span></h6>
                    </Box>
                    <Box>
                      <h6>52500008/52501115</h6>
                    </Box>
                  </Box>
                  <Box style={{marginTop: -50}} sx={{display: 'flex', alignItems: "center"}}>
                    <Box>
                      <h6><span><Mail /></span></h6>
                    </Box>
                    <Box>
                      <h6>mmelesilodge@ilesotho.com</h6>
                    </Box>
                  </Box>
                  <Box style={{marginTop: -50}} sx={{display: 'flex', alignItems: "center"}}>
                    <Box>
                      <h6><span><Web /> </span></h6>
                    </Box>
                    <Box>
                      <h6>
                        <a href='mmelisilodge.co.ls'>link</a>
                      </h6>
                    </Box>
                  </Box>
              </Box>
            </Box>
          </Card>
          <br/> <br/>
          <Card sx={{p:2}}>
            <Box sx={{
              borderRadius: 2, 
              display: "flex",
              justifyItems: 'center',
              alignItems: "center",
              gap: 1
            }}>
              <Box sx={{borderRadius: 2}}>
                {isDesktop ? <img src={mmelesi} style={{borderRadius: 2}} alt='Mmelesi' /> : <img src={mmelesi} style={{borderRadius: 2}} alt='Mmelesi' width={120}/>}
              </Box>
              <Box sx={{width: "100%"}}>
                  <h3>SalishaBnB</h3>
                  <Box style={{marginTop: -20}}>
                    <h5>Bed&Breakfast</h5>
                  </Box>
                  <Box style={{marginTop: -50}} sx={{display: 'flex', alignItems: "center"}}>
                    <Box>
                      <h6><span><Web /> </span></h6>
                    </Box>
                    <Box>
                      <h6>
                        <a href='www.bedandbreakfast.eu'>link</a>
                      </h6>
                    </Box>
                  </Box>
              </Box>
            </Box>
          </Card>
          <br/> <br/>
          <Card sx={{p:2}}>
            <Box sx={{
              borderRadius: 2, 
              display: "flex",
              justifyItems: 'center',
              alignItems: "center",
              gap: 1
            }}>
              <Box sx={{borderRadius: 2}}>
                {isDesktop ? <img src={mmelesi} style={{borderRadius: 2}} alt='Mmelesi' /> : <img src={mmelesi} style={{borderRadius: 2}} alt='Mmelesi' width={120}/>}
              </Box>
              <Box sx={{width: "100%"}}>
                  <h3>The Violet BnB</h3>
                  <Box style={{marginTop: -20}}>
                    <h5>Bed&Breakfast</h5>
                  </Box>
                  <Box style={{marginTop: -50}} sx={{display: 'flex', alignItems: "center"}}>
                    <Box>
                      <h6><span><Web /> </span></h6>
                    </Box>
                    <Box>
                      <h6>
                        <a href='www.booking.com'>link</a>
                      </h6>
                    </Box>
                  </Box>
              </Box>
            </Box>
          </Card>
          <br/> <br/>
          <Card sx={{p:2}}>
            <Box sx={{
              borderRadius: 2, 
              display: "flex",
              justifyItems: 'center',
              alignItems: "center",
              gap: 1
            }}>
              <Box sx={{borderRadius: 2}}>
                {isDesktop ? <img src={mmelesi} style={{borderRadius: 2}} alt='Mmelesi' /> : <img src={mmelesi} style={{borderRadius: 2}} alt='Mmelesi' width={120}/>}
              </Box>
              <Box sx={{width: "100%"}}>
                  <h3>Cosy Gardens BnB</h3>
                  <Box style={{marginTop: -20}}>
                    <h5>Bed&Breakfast</h5>
                  </Box>
                  <Box style={{marginTop: -50}} sx={{display: 'flex', alignItems: "center"}}>
                    <Box>
                      <h6><span><Web /> </span></h6>
                    </Box>
                    <Box>
                      <h6>
                        <a href="www.bookings.com">link</a>
                      </h6>
                    </Box>
                  </Box>
              </Box>
            </Box>
          </Card>
          <br/>
          <br/>
          <Card sx={{p:2}}>
            <Box sx={{
              borderRadius: 2, 
              display: "flex",
              justifyItems: 'center',
              alignItems: "center",
              gap: 1
            }}>
              <Box sx={{borderRadius: 2}}>
                {isDesktop ? <img src={mmelesi} style={{borderRadius: 2}} alt='Mmelesi' /> : <img src={mmelesi} style={{borderRadius: 2}} alt='Mmelesi' width={120}/>}
              </Box>
              <Box sx={{width: "100%"}}>
                  <h3>Scenery </h3>
                  <Box style={{marginTop: -20}}>
                    <h5>Lodge</h5>
                  </Box>
                  <Box style={{marginTop: -50}}  sx={{display: 'flex', alignItems: "center"}}>
                    <Box>
                      <h6><span><Phone/> </span></h6>
                    </Box>
                    <Box>
                      <h6>22316745/5380741</h6>
                    </Box>
                  </Box>
                  <Box style={{marginTop: -50}} sx={{display: 'flex', alignItems: "center"}}>
                    <Box>
                      <h6><span><Mail /></span></h6>
                    </Box>
                    <Box>
                      <h6>scenerygh@gmail.com</h6>
                    </Box>
                  </Box>
                  <Box style={{marginTop: -50}} sx={{display: 'flex', alignItems: "center"}}>
                    <Box>
                      <h6><span><Web /> </span></h6>
                    </Box>
                    <Box>
                      <h6>
                        <a href='www.scenery.co.ls'>link</a>
                      </h6>
                    </Box>
                  </Box>
              </Box>
            </Box>
          </Card>
        </Box>
    </div>
  )
}

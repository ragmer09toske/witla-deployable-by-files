import React from 'react'
import { DefaultNav } from '../components/Navbars/DefaultNav'
import { Banner } from '../components/banner.js'
import { Box, Divider } from '@mui/material'
import { Footer } from '../components/footer'
import MSU from "../Assets/lekhowa.png"
import useIsDesktop from '../hooks/Device'
import { useNavigate } from 'react-router-dom'
import { PictureBanner } from '../components/pictureBanner'

export const Lesotho = () => {
  const isDesktop = useIsDesktop()
  const navigate = useNavigate()
  const handleSummit = () => {
    navigate("/summit")
  }
  return (
    <Box>
        <DefaultNav />
        <Banner />
        <Box>
        <div style={isDesktop ? { position: 'relative', height:"200px", width:"100%"} : { position: 'relative', height:"100px", width:"100%"}}>
                <img
                    src={MSU}
                    alt="Background"
                    style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    position: 'absolute',
                    zIndex: -1,
                    top: 0,
                    left: 0,
                    }}
                />
                <Box
                    sx={
                    isDesktop ?    
                    {
                    backgroundColor: 'rgba(0, 0, 255, 0.19)', // Adjust the color and opacity
                    padding: '20px', // Add any other styling you need
                    height:"80%",
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center"
                    }:
                    {
                    backgroundColor: 'rgba(0, 0, 255, 0.19)', // Adjust the color and opacity
                    padding: '20px', // Add any other styling you need
                    height:"60%",
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center"
                    }
                    }
                >
                    <h4 style={isDesktop ? {color:'white', fontSize:50} : {color:'white', fontSize:30}}>ABOUT LESOTHO</h4>
                </Box>
            </div>
            <Box sx={isDesktop ? {pl:20,pr:20, pt:3, pb:3,fontSize:30, textAlign:"justify"} : {p:3, textAlign:"justify"}}>
                <p>
                 <b>Indroduction</b>
                 <br/>
                 <br/>
                 Lesotho, often referred to as "The Kingdom in the Sky," is a landlocked country situated in the southern part of Africa. Known for its breathtaking mountain ranges, diverse flora and fauna, and rich cultural heritage, Lesotho offers a plethora of activities and experiences for adventurers, cultural enthusiasts, and nature lovers.
                </p>
            </Box>

            <Box sx={isDesktop ? {pl:20,pr:20, pt:3, pb:3,fontSize:30, textAlign:"justify"} : {p:3, textAlign:"justify"}}>
                <p>
                 <b>Our Vision</b>
                 <br/>
                 <br/>
                  Our vision is to empower women in tourism, enabling them to fully participate in economic activities that result in job creation and contribute to stable societies and communities.
                </p>
            </Box>
            <Box sx={isDesktop ? {pl:20,pr:20, pt:3, pb:1,fontSize:30, textAlign:"justify"} : {pb:1,pl:3, textAlign:"justify"}}>
              <p><b>Key Attrations</b></p>
            </Box>

            <PictureBanner title="Mohale Dam" />
            <Box sx={isDesktop ? {pl:20,pr:20, pt:3, pb:3,fontSize:30, textAlign:"justify"} : {p:3, textAlign:"justify"}}>
                <p>
                  <br/>
                  Mohale Dam stands as a remarkable engineering marvel in Lesotho. It is the tallest rock-fill concrete-face dam in Africa, measuring 145 meters in height and impounding the Senqunyane River. The dam plays a critical role in water diversion and augmentation, contributing to the region's water needs.
                  </p>
                 <ul>
                 <p>Quick Facts</p>
                  <li>Height: 145 meters</li>
                  <li>Length: 700 meters</li>
                  <li>Purpose: Water diversion and augmentation</li>
                 </ul>
            </Box>

            <PictureBanner title="Katse Dam" />
            <Box sx={isDesktop ? {pl:20,pr:20, pt:3, pb:3,fontSize:30, textAlign:"justify"} : {p:3, textAlign:"justify"}}>
                <p>
                  <br/>
                  Katse Dam, one of the most ambitious engineering projects in Southern Africa, is the continent's second-largest double-curvature arch dam. It impounds a sprawling reservoir along the Malibamat'so River, supplying water to downstream regions.
                  </p>
                 <ul>
                 <p>Quick Facts</p>
                  <li>Height: 185 meters</li>
                  <li>Length: 710 meters</li>
                  <li>Surface Area: 38.5 square kilometers</li>
                 </ul>
            </Box>

            <PictureBanner title="Semonkong" />
            <Box sx={isDesktop ? {pl:20,pr:20, pt:3, pb:1,fontSize:30, textAlign:"justify"} : {pb:1,pl:3, textAlign:"justify"}}>
              <p>Semonkong, known for the 'Maletsunyane waterfall, the highest single drop waterfall in the world, offers a variety of activities. From pony and horse riding to abseiling down the stunning waterfall, Semonkong provides an adrenaline-pumping experience.</p>
            </Box>

            <PictureBanner title="Afri Ski" />
            <Box sx={isDesktop ? {pl:20,pr:20, pt:3, pb:1,fontSize:30, textAlign:"justify"} : {pb:1,pl:3, textAlign:"justify"}}>
              <p>Lesotho, due to its high altitude, hosts one of Southern Africa's only two skiing facilities, Afri Ski. Situated in the Maluti Mountains, it offers skiing opportunities during the winter months, making it a popular destination for snow sports enthusiasts.</p>
            </Box>

            <PictureBanner title="Sehlabathebe National Park" />
            <Box sx={isDesktop ? {pl:20,pr:20, pt:3, pb:1,fontSize:30, textAlign:"justify"} : {pb:1,pl:3, textAlign:"justify"}}>
              <p>Sehlabathebe, a national park situated in the Drakensberg escarpment, is an undisturbed area of natural beauty. It is home to unique rock formations, endemic plant species, diverse birdlife, and stunning landscapes.</p>
            </Box>

            <PictureBanner title="Experience the Floral Splendor" />
            <Box sx={isDesktop ? {pl:20,pr:20, pt:3, pb:3,fontSize:30, textAlign:"justify"} : {p:3, textAlign:"justify"}}>
                <p>
                  <br/>
                  Lesotho boasts a rich variety of indigenous flora and fauna, making it a haven for botanical enthusiasts. The country has distinct altitude zones, each offering a unique ecosystem and a wealth of plant species.
                  </p>
                 <ul>
                 <p>Altitude Zones</p>
                  <li>Montane Zone (1300 to 1800m)</li>
                  <li>Sub-Alpine Zone (1800 to 2800m)</li>
                  <li>Alpine Zone (2800 to 3482m)</li>
                 </ul>
            </Box>

            <PictureBanner title="Quick Facts about Lesotho" />
            <Box sx={isDesktop ? {pl:20,pr:20, pt:3, pb:3,fontSize:30, textAlign:"justify"} : {p:3, textAlign:"justify"}}>
                 <ul>
                  <li>Capital: Maseru</li>
                  <li>Official Language: Sesotho, English</li>
                  <li>Currency: Loti (LSL)</li>
                  <li>Time Zone: Central Africa Time (CAT)</li>
                  <li>Population: Approximately 2.2 million</li>
                 </ul>
            </Box>

        </Box>
        <Divider />
        <Divider />
        <br/>
        <Footer />
    </Box>
  )
}

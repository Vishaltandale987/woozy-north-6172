import React from 'react'
import {Button, Stack,Grid,GridItem,Heading, Img} from "@chakra-ui/react"

import "./Home.css"
const Home = () => {
  return (
    <home>
        <div className='AvnishDiv-1'>
          <div>
            <div className='AvnishDiv-2'>
            <h1 className='heading_1'>
            Create free surveys and forms online in minutes
          </h1>
            <p  className='para_1'>
            Ask, listen, and act on insights fast with a global leader in surveys and forms software.
            </p>
            <div className='AvnishButton-1'>
                <button className='btn-1'>Sign up free</button>
                <button className='btn-2'>Explore plans</button> 
            </div>
            </div>
          </div>
          <div className='imgDiv'>
            <img src="https://prod.smassets.net/assets/cms/sm/uploads//homepage-hero-exp-bg-green.png" alt="" />
          </div>
        </div>

     {/* Who is your survey audience? */}
        <div className='AvnishDiv-3'>
          <Heading size={'xl'}>Who is your survey audience?</Heading>
            <div className='btn-3'>
                
                <Button border={"none"} borderRadius="5px" fontWaight="bold" bgColor={"white"} color='#000' size='sm'w='20%' h="45px" fontSize="18px" boxShadow={"box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;"} >Employees</Button>
                <Button border={"none"} borderRadius="5px" fontWaight="bold" bgColor={"white"}  color='#000' size='sm'w='20%' h="45px" fontSize="18px">Custumer</Button>
                <Button border={"none"} borderRadius="5px" fontWaight="bold" bgColor={"white"}  color='#000' size='sm'w='20%' h="45px" fontSize="18px">target Market</Button>
                <Button border={"none"} borderRadius="5px" fontWaight="bold" bgColor={"white"}  color='#000' size='sm'w='20%' h="45px" fontSize="18px">other</Button>

            </div>
        <Grid
            h='200px'
            templateRows='repeat(2, 1fr)'
            templateColumns='repeat(5, 1fr)'
            gap={4}
             marginTop="40px"
           
            >
           <GridItem rowSpan={2} colSpan={1} bg='tomato' />
            <GridItem colSpan={2} bg='papayawhip' />
            <GridItem colSpan={2} bg='papayawhip' />
            <GridItem colSpan={2} bg='tomato' />
            <GridItem colSpan={2} bg='tomato' />
            </Grid>
        </div>
       
         {/* _______________________________________________________________________________________ */}

         <div className='mainLogoImgDiv'>
         <Heading size={'xl'}>Who is your survey audience?</Heading>
         <div className='logImage'>
           <img src="https://prod.smassets.net/assets/cms/sm/uploads//Allbirds-slate.png" alt="" />
           <img src="https://prod.smassets.net/assets/cms/sm/uploads//Tweezerman-logo-2x.png" alt="" />
           <img src="https://prod.smassets.net/assets/cms/sm/uploads//Adobe-logo-2x.png" alt="" />
           <img src="https://prod.smassets.net/assets/cms/sm/uploads//Verizon-logo-2x.png" alt="" />
           <img src="https://prod.smassets.net/assets/cms/sm/uploads//sephora-logo.png" alt="" />
           
         </div>
         </div>
      

    </home>
  )
}

export default Home
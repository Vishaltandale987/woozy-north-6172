import React from 'react'
import {Button, Stack,Grid,GridItem,Heading, Image} from "@chakra-ui/react"

import "./Home.css"
import PriceWrapper from './expmle'
import PriceWrapper2 from "./expmle2"
import PriceWrapper3 from './exple3'
import PriceWrapper4 from "./last"
import Navbar from '../../compounts/navbar/Navbar'
const Home = () => {
  return (
    <home>
      <Navbar/>

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
            h='500px'
            templateRows='repeat(2, 1fr)'
            templateColumns='repeat(5, 1fr)'
            gap={1}
             marginTop="40px"
           
            >
           <GridItem rowSpan={4} colSpan={1} h='200px' >
           <Image src="https://prod.smassets.net/assets/website/2.197.0/images/FoW.png" alt=""/>
            </GridItem>
           <GridItem colSpan={2} >
            <Image src="https://prod.smassets.net/assets/website/2.197.0/images/FoW.png" alt=""/>
            </GridItem>
            <GridItem colSpan={2}>
            <Image src="https://prod.smassets.net/assets/website/2.197.0/images/FoW.png" alt=""/>
            </GridItem>
            <GridItem colSpan={2}>
            <Image src="https://prod.smassets.net/assets/website/2.197.0/images/FoW.png" alt=""/>
            </GridItem>
            <GridItem colSpan={2}>
              <Image src="https://prod.smassets.net/assets/website/2.197.0/images/FoW.png" alt=""/>
            </GridItem>
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
      
      {/* --------------------------------------------------------------------------- */}

  

      <PriceWrapper/>
    
       <div className='LearnMore'>
          <Image src="https://prod.smassets.net/assets/cms/sm/uploads//AudienceBG-NEW.png" h="400px"alt=""/>
          <div className='LearnCenter'>
          Looking for targeted responses to your surveys?
Get the responses you need in minutes with SurveyMonkey Audience, our trusted panel of more than 175 million respondents from across the globe.
          <div className='LearnBtn'>
          <Button color="black"> Learn More</Button>
          </div>
          </div>

       </div>


        <div className='temp'>
        <div className='HeadingTeamplet'>
          <h1> Start with an expert-written template</h1>
        </div>
        <div className='ParaTeamplet'>
          <p>
          Our <span style={{color:"blue",fontSize:"20px", cursor:"pointer",}} > sample survey templates </span> make it easy for you to start 
          collecting feedback in just minutes. Explore hundreds of questions
           across different survey types, all designed to get you accurate 
           results you can rely on.
          </p>
        </div>
        </div>
      {/* ------------------------------------------------------------------------------------------/ */}

      <div className='temp'>
        <div className='HeadingTeamplet'>
          <h1> Tools that spark business breakthroughs</h1>
        </div>
        <div className='ParaTeamplet'>
          <p>
          
             Discover specialized toolkits designed for your role and industry.
           results you can rely on.
          </p>
        </div>
        </div>

        <PriceWrapper2/>

        <div className='feedback'>
          <div className='feedbackHeading'>
          <Heading as='h4' size={"lg"}>  Go beyond collecting feedback—deliver better experiences that drive your business</Heading>
          </div>
          <PriceWrapper3/>
        </div>

        <PriceWrapper4/>
    </home>
  )
}

export default Home
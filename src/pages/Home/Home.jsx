import React from 'react'
import{
  Button, 
  InputRightAddon,
  Heading, Image,
   Input,InputGroup,
  Box,Checkbox,
  CheckboxGroup,Stack,
  Text
  } from "@chakra-ui/react"
// import   {FaCheckSquare } from 'react-icons/fa';
import "./Home.css"
import PriceWrapper from './expmle'
import PriceWrapper2 from "./expmle2"
import PriceWrapper3 from './exple3'
import PriceWrapper4 from "./last"
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
            <div className='grid-who-is-you-servey-audi'>
              <div className='grid-who-is-you-servey-audi-img'>
                <img src='https://prod.smassets.net/assets/website/2.197.0/images/Templates_L.png' alt=''/>
                 <div className='grid-who-is-you-servey-audi-text'>
                  <Text >TEMPLATE LIBRARY</Text>
                  <Heading as='h4'size={"md"}>Explore written survey questions and template</Heading>
                 </div>
              </div>
              <div className='grid-who-is-you-servey-audi-1'>
                <div className='grid-who-is-you-servey-audi-img'>
                <img src='https://prod.smassets.net/assets/website/2.197.0/images/HowItWorks_S.png' alt=''/>
                 <div className='grid-who-is-you-servey-audi-text-white'>
                  <Text >HOW IT WORKS</Text>
                  <Heading as='h4'size={"md"}>See how esey to it create send and analyze survey</Heading>
                 </div>
                </div>

                 <div className='grid-who-is-you-servey-audi-img'>
                <img src='https://prod.smassets.net/assets/website/2.197.0/images/Features_S.png' alt=''/>
                 <div className='grid-who-is-you-servey-audi-text'>
                  <Text >COMPARE FEATURES</Text>
                  <Heading as='h4'size={"md"}>Get price details and our full of set of survey features across plans.</Heading>
                 </div>
                </div>

                <div className='grid-who-is-you-servey-audi-img'>
                <img src='https://prod.smassets.net/assets/website/2.197.0/images/RacialEquity_S.png' alt=''/>
                 <div className='grid-who-is-you-servey-audi-text'>
                  <Text >RACIAL EQUITY</Text>
                  <Heading as='h4'size={"md"}>Get resources for addressin advercity , equity ,and inclusion</Heading>
                 </div>
                </div>

               <div className='grid-who-is-you-servey-audi-img'>
                <img src='https://prod.smassets.net/assets/website/2.197.0/images/FoW.png' alt=''/>
                 <div className='grid-who-is-you-servey-audi-text-white'>
                  <Text >FUTURE OF WORK</Text>
                  <Heading as='h4'size={"md"}>Reimaigin your business by gathering feedback</Heading>
                 </div>
                </div>
              </div>
            </div>
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
  {/* ----------------------Start with an expert-written template------------------------------------------------------------------ */}

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

        <div className=' grid-temp-a'>
          <div className='grid-temp-search'>
          <InputGroup size='lg'>
            <Input placeholder='search' />
              <InputRightAddon children='search' />
             </InputGroup>
             <Heading as={'h4'} size='md'>Filter by survey type</Heading>
            {/* -----------list--------------- */}
           <Box py={10} spacing={4}>
           <CheckboxGroup colorScheme='green' defaultValue={['naruto', 'kakashi']}>
            <Stack spacing={8} direction={['row', 'column']}>
            <Checkbox size='lg' colorScheme='green' >Customers</Checkbox>
            <Checkbox size='lg' colorScheme='green' >Education</Checkbox>
            <Checkbox size='lg' colorScheme='green' >Employees</Checkbox>
           <Checkbox size='lg' colorScheme='green' >Healthcare</Checkbox>
           <Checkbox size='lg' colorScheme='green' >Market Research</Checkbox>
           <Checkbox size='lg' colorScheme='green' >Nonprofit</Checkbox>
           <Checkbox size='lg' colorScheme='green' >Other</Checkbox>
           <Checkbox size='lg' colorScheme='green' >Events</Checkbox>
           <Checkbox size='lg' colorScheme='green' >Events</Checkbox>

           </Stack>
           </CheckboxGroup>
           </Box>
            {/* ----------------------------- */}
          </div>
          <div className='grid-temp-b'>
            <div className='grid-temp-img'>
              <img src="https://prod.smassets.net/assets/cms/sm/uploads//customer-satisfaction-survey-template-1.png" alt="" />
              <div className='grid-temp-text'>Custumer  sutisfaction survey</div>
            </div>
            <div className='grid-temp-img'>
              <img src="https://prod.smassets.net/assets/cms/sm/uploads//Product-Survey.png" alt="" />
              <div className='grid-temp-text'>Market research- product survey</div>
            </div>
            <div className='grid-temp-img'>
              <img src="https://prod.smassets.net/assets/cms/sm/uploads//360-Degree-Employee-Evaluation.png" alt="" />
              <div className='grid-temp-text'>360-degree employee evaluation</div>
            </div>
            <div className='grid-temp-img'>
              <img src="https://prod.smassets.net/assets/cms/sm/uploads//Brand-Awareness.png" alt="" />
              <div className='grid-temp-text'>Brand awareness survey template</div>
            </div>
            <div className='grid-temp-img'>
              <img src="https://prod.smassets.net/assets/cms/sm/uploads//product-testing-survey-template.png" alt="" />
              <div className='grid-temp-text'>Product testing</div>
            </div>
            <div className='grid-temp-img'>
              <img src="https://prod.smassets.net/assets/cms/sm/uploads//employee-engagement-survey-template.png" alt="" />
              <div className='grid-temp-text'>Employee engagement</div>
            </div>
            <div className='grid-temp-img'>
              <img src="https://prod.smassets.net/assets/cms/sm/uploads//customer-service-survey-template.png" alt="" />
              <div className='grid-temp-text'>Customer service</div>
            </div>
            <div className='grid-temp-img'>
              <img src="https://prod.smassets.net/assets/cms/sm/uploads//customer-satisfaction-survey-template-1.png" alt="" />
              <div className='grid-temp-text'>Website feedback servey template</div>
            </div>
            <div className='grid-temp-img'>
              <img src="https://prod.smassets.net/assets/cms/sm/uploads//Website_surveys.png" alt="" />
              <div className='grid-temp-text'>Management performance</div>
            </div>
            <div className='grid-temp-img'>
              <img src="https://prod.smassets.net/assets/cms/sm/uploads//management-performance-survey-template.png" alt="" />
              <div className='grid-temp-text'>General event feedback survey template</div>
            </div>
            <div className='grid-temp-img'>
              <img src="https://prod.smassets.net/assets/cms/sm/uploads//employee-satisfaction-survey-template.png" alt="" />
              <div className='grid-temp-text'>Employee satisfaction </div>
            </div>
            <div className='grid-temp-img'>
              <img src="https://prod.smassets.net/assets/cms/sm/uploads//university-student-satisfaction-survey-template.png" alt="" />
              <div className='grid-temp-text'>University student satisfaction</div>
            </div>
            <div className='grid-temp-img'>
              <img src="https://prod.smassets.net/assets/cms/sm/uploads//environmental-issues-survey-template.png" alt="" />
              <div className='grid-temp-text'>Environmental issues</div>
            </div>
            <div className='grid-temp-img'>
              <img src="https://prod.smassets.net/assets/cms/sm/uploads//net-promoter-score-survey-template.png" alt="" />
              <div className='grid-temp-text'>Net Promoter Score (NPS)</div>
            </div>
            <div className='grid-temp-img'>
              <img src="https://prod.smassets.net/assets/cms/sm/uploads//software-evaluation-survey-template.png" alt="" />
              <div className='grid-temp-text'>Software evaluation servey template</div>
            </div>
            <div className='grid-temp-img'>
              <img src="https://prod.smassets.net/assets/cms/sm/uploads//education-demographics-survey-template.png" alt="" />
              <div className='grid-temp-text'>Education demographics</div>
            </div>
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
import { Box ,Flex,Heading,Spacer,Button,ButtonGroup} from '@chakra-ui/react'
import React from 'react'
import Inside from '../Inside'

const Navbar = ({text}) => {
    const val=text;
   const handleA=()=>{
    console.log(val)
   }
  return (
    <>
   
    <Flex minWidth='max-content' alignItems='center' gap='40'>
        
   <Box>
    <img src={"https://prod.smassets.net/assets/website/2.196.2/images/logo-surveymonkey.svg"}></img>
   </Box>
    <Box>
    <Heading onClick={handleA} size='md'>Products	▼</Heading>
    </Box>
    <Box>
    <Heading size='md'>Solution ▼</Heading>
    </Box>
   <Box>
   <Heading size='md'>Resources ▼</Heading>
   </Box>
   <Box>
   <Heading size='md'>Plans & Pricing ▼</Heading>
   </Box>
   
  
  <Spacer />
  <ButtonGroup gap='2'>
    <Box>
   <Heading size='md'>Login in</Heading>
   </Box>
<Button style={{backgroundColor:"orange",border:"none"}}>Sign Up Free</Button>
</ButtonGroup>
</Flex>


    </>
  )
}

export default Navbar
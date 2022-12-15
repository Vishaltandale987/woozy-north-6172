import { Box ,Flex,Heading,Spacer,Button,ButtonGroup} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';

import Solutions from '../Solutions';

const Navbar = ({text}) => {
    const val=text;
   const handleA=()=>{
   
   }
  return (
    <>
   
    <Flex minWidth='max-content' alignItems='center' gap='40'>
        
   <Box>
    <img src={"https://prod.smassets.net/assets/website/2.196.2/images/logo-surveymonkey.svg"}></img>
   </Box>
   <Solutions/>
   
  
  <Spacer />
  <ButtonGroup gap='2'>
    <Box>
      <Link to="/login">
      <Heading  size='md'>Login in</Heading>
      </Link>
  
   </Box>
   <Link  to="/signup">
   <Button style={{backgroundColor:"orange",border:"none"}}>Sign Up Free</Button>
   </Link>

</ButtonGroup>
</Flex>


    </>
  )
}

export default Navbar
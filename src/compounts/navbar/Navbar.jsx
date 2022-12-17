import { Box ,Flex,Heading,Spacer,Button,ButtonGroup, Image} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';
import Company_logo from "../PvtNavbar/assets/company-logo.png"


import Solutions from './Solutions';

const Navbar = ({text}) => {
    const val=text;
   const handleA=()=>{
   
   }
  return (
    <>
   
    <Flex minWidth='max-content' alignItems='center' gap='1'>
        
   <Box>
    <Link to="/">

    <Image h={'60px'} w={'100px'} src={Company_logo} alt={'logo'}/>


    </Link>
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
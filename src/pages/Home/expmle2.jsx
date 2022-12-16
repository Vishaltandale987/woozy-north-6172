import { ReactNode } from 'react';
import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
} from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';

function PriceWrapper2({ children }) {
  return (
    <Box
      mb={4}
   
      alignSelf={{ base: 'center', lg: 'flex-start' }}
   
      borderRadius={'xl'}>
      {children}
    </Box>
  );
}

export default function ThreeTierPricing() {
  return (
    <Box py={12}>
     
      <Stack
        direction={{ base: 'column', md: 'row' }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}>
        <PriceWrapper2>
          <Box py={0} px={0}>
          

            <HStack justifyContent="center">
              
            </HStack>
          </Box>
          <VStack
         
            py={4}
            borderBottomRadius={'xl'}>
                 <Box textAlign={'center'} w='100%'   borderRadius={'10px'}  fontWeight="300" fontSize="2xl">
                 <img src="https://prod.smassets.net/assets/cms/sm/uploads//customer-support-toolkit-directory.png"  alt="" />
                </Box>
           
            <List  spacing={2} textAlign="start" py={20} px={14}>
              <ListItem>
              
               <Heading as='h4' size='md'>Customer support</Heading>
              </ListItem>
              <ListItem>
             
              Provide better customer experiences
              </ListItem>
              <ListItem>
           
              while keeping your teams engaged.
              </ListItem>
             
            </List>
           
           
          </VStack>
        </PriceWrapper2>

        <PriceWrapper2>
          <Box position="relative">
            <Box
              position="absolute"
              top="-16px"
              left="50%"
              style={{ transform: 'translate(-50%)' }}>
             
            </Box>
            <Box py={0} px={0}>
          
            </Box>
            <VStack

              py={4}
              borderBottomRadius={'xl'}>
                 {/* <Box w="80%" pt={7}>
                <Button w="full" colorScheme="blue">
                See all features
                </Button>
              </Box> */}
               <Box textAlign={'center'} w='100%'   borderRadius={'10px'}  fontWeight="300" fontSize="2xl">
                 <img src="https://prod.smassets.net/assets/cms/sm/uploads//hr-leader-toolkit-directory.png"  alt="" />
                </Box>
              <List spacing={2} textAlign="start" py={12} px={14}>
                <ListItem>
                  <Heading as={'h4'} size='md'>
                  Human resources
                  </Heading>
                </ListItem>
                <ListItem>
               
                Retain your workforce by fostering a
                </ListItem>
                <ListItem>
               
                world-class employee experience.
                </ListItem>
                <ListItem>
              
                </ListItem>
                <ListItem>
                
                 
                </ListItem>
              </List>
             
            </VStack>
          </Box>
        </PriceWrapper2>
        <PriceWrapper2>
        <Box py={0} px={0}>
           
          </Box>
          <VStack
          
            py={4}
            borderBottomRadius={'xl'}>
              
 <Box textAlign={'center'} w='100%'   borderRadius={'10px'}  fontWeight="300" fontSize="2xl">
                 <img src="https://prod.smassets.net/assets/cms/sm/uploads//product-manager-toolkit-directory.png"  alt="" />
                </Box>

            <List spacing={2} textAlign="start" py={16} px={12}>
              <ListItem>
             
                <Heading as='h4' size='md'>Product management</Heading>
                
              </ListItem>
              <ListItem>
             
              Build products that drive impact and
              </ListItem>
              <ListItem>
             
              offer a strong product-market fit.
              </ListItem>
            </List>
            
          </VStack>
        </PriceWrapper2>
      </Stack>
    </Box>
  );
}
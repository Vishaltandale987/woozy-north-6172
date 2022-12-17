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

function PriceWrapper3({ children }) {
  return (
    <Box
      mb={2}
   
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
        <PriceWrapper3>
         
          <VStack
         
            
            borderBottomRadius={'xl'}>
                 <Box >
                 <img src="https://prod.smassets.net/assets/cms/sm/uploads//Momentive-Symbol-RGB-1-1.png"  alt="" />
                </Box>
           
            <List  spacing={2} textAlign="start" py={10} px={40}>
              <ListItem>
              
              <Heading as='h1' size='xl'>Momentive Solutions</Heading>
              </ListItem>
              <ListItem>
              <Text fontSize={'2xl'}> 
              Get a platform that can grow and change along with
              your survey needs over time. Browse our plans to
              learn more about specific features.
              </Text>
              </ListItem>       
            </List>
            <Button colorScheme='white' variant='outline'  size='lg'>Visit Momentive</Button>
           
          </VStack>
        </PriceWrapper3>

       
        <PriceWrapper3>
        
          <VStack
          
           
            borderBottomRadius={'xl'}>
              
                  <Box px={10}>
                 <img src="https://prod.smassets.net/assets/cms/sm/uploads//gfp-logo-rgb-2x-1.png"  alt="" />
                </Box>

            <List spacing={2} textAlign="start" py={20} px={40}>
              <ListItem>
                <Heading as='h1' size='xl'>GetFeedback</Heading>
              </ListItem>

              <ListItem>
              <Text fontSize={'2xl'}> 
               Manage your company’s data with advanced security
              and control, so you can enable your teams to share
              and collaborate safely.
              </Text>
              </ListItem>
              
              <Button colorScheme='white' variant='outline'  size='lg'>Visit GetFeedback</Button>
            </List>
            
          </VStack>
        </PriceWrapper3>
      </Stack>
    </Box>
  );
}
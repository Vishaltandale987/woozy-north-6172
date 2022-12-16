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
          <Box py={0} px={0}>
          

            <HStack justifyContent="center">
              
            </HStack>
          </Box>
          <VStack
         
            py={4}
            borderBottomRadius={'xl'}>
                 <Box textAlign={'center'} w='100%'   borderRadius={'10px'}  fontWeight="300" fontSize="2xl">
                 <img src="https://prod.smassets.net/assets/cms/sm/uploads//Momentive-Symbol-RGB-1-1.png"  alt="" />
                </Box>
           
            <List  spacing={2} textAlign="start" py={20} px={14}>
              <ListItem>
              
              <Heading as='h1' size='xl'>Momentive Solutions</Heading>
              </ListItem>
              <ListItem>
             
              Get a platform that can grow and change along with
              </ListItem>
              <ListItem>
              your survey needs over time. Browse our plans to
              </ListItem>
              <ListItem>
              learn more about specific features.
              </ListItem>
             
            </List>
           
           
          </VStack>
        </PriceWrapper3>

       
        <PriceWrapper3>
        <Box py={0} px={0}>
           
          </Box>
          <VStack
          
            py={4}
            borderBottomRadius={'xl'}>
              
                  <Box textAlign={'center'} w='100%'   borderRadius={'10px'}  fontWeight="300" fontSize="2xl">
                 <img src="https://prod.smassets.net/assets/cms/sm/uploads//gfp-logo-rgb-2x-1.png"  alt="" />
                </Box>

            <List spacing={2} textAlign="start" py={16} px={12}>
              <ListItem>
             
                <Heading as='h1' size='xl'>GetFeedback</Heading>
                
              </ListItem>
              <ListItem>
             
              Manage your company’s data with advanced security
              </ListItem>
              <ListItem>
             
              and control, so you can enable your teams to share
              </ListItem>
              <Text size={'2xl'}>
              and collaborate safely.
              </Text>
            </List>
            
          </VStack>
        </PriceWrapper3>
      </Stack>
    </Box>
  );
}
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

function PriceWrapper4({ children }) {
  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: 'center', lg: 'flex-start' }}
      borderColor={useColorModeValue('gray.200', 'gray.500')}
      borderRadius={'xl'}>
      {children}
    </Box>
  );
}

export default function ThreeTierPricing() {
  return (
    <Box py={12}>
      <VStack spacing={2} textAlign="center">
        <Heading as="h1" fontSize="4xl">
        Still curious?
        </Heading>
        <Text fontSize="2xl" >
        Explore these additional resources to help you launch successful survey projects.
        </Text>
      </VStack>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}>
        <PriceWrapper4>
          <Box py={0} px={0}>
            <Box  w='100%' borderRadius={'5px'} height="100px" color="#FFFFFF" bgColor='#00bf6f'fontWeight="300" fontSize="2xl">
              Basic
            </Box>
           

            <HStack justifyContent="center">
              
            </HStack>
          </Box>
          <VStack
         
            py={4}
            borderBottomRadius={'xl'}>
                 <Box textAlign={'center'} w='30%' h='60px' border='3px solid green' borderRadius={'10px'}  fontWeight="300" fontSize="2xl">
                 <img src="https://www.investopedia.com/thmb/rvzfHEl2Ai0USEUk6_KGhAo6b68=/735x0/goldie_sabaeus_rgb-5bfc2e0a46e0fb0083c0ebb9.png" margin-left="20px" width='50px' alt="" />
                </Box>
            <Box w="80%" pt={7}>
                <Button w="full" colorScheme="green">
               Sign up
              </Button>
            </Box>
            <List  spacing={2} textAlign="start" py={20} px={14}>
              <ListItem>
              
                Send unlimited surveys
              </ListItem>
              <ListItem>
             
                with up to 10 questions.
              </ListItem>
              <ListItem>
           
                Response limits apply.
              </ListItem>
             
            </List>
           
           
          </VStack>
        </PriceWrapper4>

        <PriceWrapper4>
          <Box position="relative">
            <Box
              position="absolute"
              top="-16px"
              left="50%"
              style={{ transform: 'translate(-50%)' }}>
             
            </Box>
            <Box py={0} px={0}>
            <Box  w='100%' borderRadius={'5px'} height="100px" color="#FFFFFF" bgColor='#05467e'fontWeight="300" fontSize="2xl">
            Individual Advantage
            </Box>
              <HStack justifyContent="center">
                <Text fontSize="3xl" fontWeight="600">
                ₹
                </Text>
                <Text fontSize="5xl" fontWeight="900">
                1,999
                </Text>
              
              </HStack>
              <Text fontSize="3xl" >
                /month
              </Text>
            <Text>Billed ₹23,988 annually</Text>
            </Box>
            <VStack

              py={4}
              borderBottomRadius={'xl'}>
                 <Box w="80%" pt={7}>
                <Button w="full" colorScheme="blue">
                See all features
                </Button>
              </Box>
              <List spacing={2} textAlign="start" py={12} px={14}>
                <ListItem>
                  {/* <ListIcon as={FaCheckCircle} color="green.500" /> */}
                  Get our most popular
                </ListItem>
                <ListItem>
               
                  features for creating,
                </ListItem>
                <ListItem>
               
                  sending & analyzing
                </ListItem>
                <ListItem>
              
                </ListItem>
                <ListItem>
                
                  5TB Lorem, ipsum dolor.
                </ListItem>
              </List>
             
            </VStack>
          </Box>
        </PriceWrapper4>
        <PriceWrapper4>
        <Box py={0} px={0}>
            <Box  w='100%' borderRadius={'5px'} height="100px" color="#FFFFFF" bgColor='#53225b'fontWeight="300" fontSize="2xl">
             Team Advantage
            </Box>
            <HStack justifyContent="center">
              <Text fontSize="3xl" fontWeight="600">
              ₹
              </Text>
              <Text fontSize="5xl" fontWeight="900">
              ₹1,550


              </Text>
             
            
            </HStack>
            <Text fontSize="3xl" >
            per user / month
              </Text>
            <Text>Starting at 3 users, billed annually</Text>
          </Box>
          <VStack
          
            py={4}
            borderBottomRadius={'xl'}>
                <Box w="80%" pt={7}>
                <Button w="full" colorScheme="rgb(83,34,91)" bgColor={"rgb(83,34,91)"} color={'#EEEEEE'}>
                See all features
              </Button>
            </Box>
            <List spacing={2} textAlign="start" py={16} px={12}>
              <ListItem>
             
                Collaboration tools and
              </ListItem>
              <ListItem>
             
                survey features that help
              </ListItem>
              <ListItem>
             
                your team work more efficiently.
              </ListItem>
            </List>
            
          </VStack>
        </PriceWrapper4>
      </Stack>
    </Box>
  );
}
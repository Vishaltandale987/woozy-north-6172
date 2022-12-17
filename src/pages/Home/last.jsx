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
    
      alignSelf={{ base: 'center', lg: 'flex-start' }}
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
          

            <HStack justifyContent="center">
              
            </HStack>
          </Box>
          <VStack
          px={4}
            py={4}
            borderBottomRadius={'xl'}>
                 <Box textAlign={'center'} w='100%'   borderRadius={'10px'}  fontWeight="300" fontSize="2xl">
                 <img src="https://prod.smassets.net/assets/cms/sm/uploads//golden-state-warriors.png"  width='90%'alt="" />
                </Box>
           
               <List  spacing={2} textAlign="start" py={20} px={10}>
              <ListItem>
              
               <Heading as='h4' size='md'>Success Stories</Heading>
              </ListItem>
              <ListItem>
             
             
              </ListItem>
              <ListItem>
             <Text  fontSize='xl' >Read about our customers, explore our webinars, and get guides on collecting feedback in your industry.</Text>
              </ListItem>

              <Text fontSize='2xl' color='blue' cursor={'pointer'} _hover={{borderBottom:'1px solid blue.400'}}>Explore resources</Text>
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
          
            </Box>
            <VStack
                  px={4}
              py={4}
              borderBottomRadius={'xl'}>
                 {/* <Box w="80%" pt={7}>
                <Button w="full" colorScheme="blue">
                See all features
                </Button>
              </Box> */}
               <Box textAlign={'center'} w='100%'   borderRadius={'10px'}  fontWeight="300" fontSize="2xl">
                 <img src="https://prod.smassets.net/assets/cms/sm/uploads//blog-tile-card.png"  w='70%'alt="" />
                </Box>
              <List spacing={4} textAlign="start" py={12} px={10}>
              <ListItem>
              
              <Heading as='h4' size='md'>Blog</Heading>
             </ListItem>
             <ListItem>
            
            
             </ListItem>
             <ListItem>
            <Text  fontSize='xl' >Get tips on how to create better surveys, hear the latest product news, or check out our signature research.</Text>
             </ListItem>
             <Text fontSize='2xl' color='blue' cursor={'pointer'} _hover={{borderBottom:'1px solid blue.400'}}>See Curiosity at Work</Text>
              </List>
             
            </VStack>
          </Box>
        </PriceWrapper4>
        <PriceWrapper4>
        <Box py={0} px={0}>
           
          </Box>
          <VStack
             px={4}
            py={4}
            borderBottomRadius={'xl'}>
              
 <Box textAlign={'center'} w='100%'   borderRadius={'10px'}  fontWeight="300" fontSize="2xl">
 <img src="https://prod.smassets.net/assets/cms/sm/uploads//help-center-tile.png"  w='90%'alt="" />
                </Box>

            <List spacing={4} textAlign="start" py={16} px={12}>
              <ListItem>
             
                <Heading as='h4' size='md'>Help Center</Heading>
                
              </ListItem>
              <ListItem>
            <Text  fontSize='xl' >Access tutorials on how features work, learn more about billing, contact Customer Support, and more.</Text>
             </ListItem>
             <Text fontSize='2xl' color='blue' cursor={'pointer'} _hover={{borderBottom:'1px solid blue.400'}}>Visit Help Center</Text>
            </List>
            
          </VStack>
        </PriceWrapper4>
      </Stack>
  </Box>
  );
}
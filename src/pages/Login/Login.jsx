import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
    useDisclosure,
    Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  } from '@chakra-ui/react';
import { useState } from 'react';
  import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../Redux/Login/Login.action';
  
  export default function Login() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [user,setUser]= useState({email:"",password:""});
    const dispatch = useDispatch();
    const state= useSelector((store)=>store.loginManager);


    const handleChange=(e)=>{
     const {name,value}=e.target;
     setUser({...user,[name]:value})
    }
  
    const handleLogin=()=>{
        dispatch(login(user));
    }


    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Login to your account</Heading>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" name='email' onChange={handleChange} />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" name='password' onChange={handleChange} />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link onClick={onOpen} color={'blue.400'}>Forgot password?</Link>
                  <Modal isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay />
                    <ModalContent>
                        <ModalCloseButton />
                        <ModalBody>
                        
                            <Flex
                            align={'center'}
                            justify={'center'}
                            bg={useColorModeValue('gray.50', 'gray.800')}>
                                <Stack
                                spacing={4}
                                w={'full'}
                                maxW={'md'}
                                bg={useColorModeValue('white', 'gray.700')}
                                rounded={'xl'}
                                boxShadow={'lg'}
                                p={6}
                                my={12}>
                                    <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
                                    Forgot your password?
                                    </Heading>
                                    <Text
                                        fontSize={{ base: 'sm', sm: 'md' }}
                                        color={useColorModeValue('gray.800', 'gray.400')}>
                                        You&apos;ll get an email with a reset link
                                    </Text>
                                    <FormControl id="email">
                                        <Input
                                            placeholder="your-email@example.com"
                                            _placeholder={{ color: 'gray.500' }}
                                            type="email"
                                        />
                                    </FormControl>
                                <Stack spacing={6}>
                                <Button
                                 bg={'blue.400'}
                                 color={'white'}
                                _hover={{
                                 bg: 'blue.500',
                                 }}>
                                     Request Reset
                                </Button>
                             </Stack>
                            </Stack>
                        </Flex>
                        </ModalBody>
                         <ModalFooter>
                         <Button colorScheme='blue' mr={3} onClick={onClose}>
                           Close
                         </Button>
                        </ModalFooter>
                     </ModalContent>
                    </Modal>
                </Stack>
                <Button onClick={handleLogin}
                  isLoading={state.loading}
                  loadingText={'Submiting'}
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Login
                </Button>
                <Stack pt={3}>
                <Text align={'center'}>
                  Didn't signup? <Link color={'blue.400'}>Create an Account</Link>
                </Text>
              </Stack>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }
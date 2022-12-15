import { Text,Box,useDisclosure,Button,Modal,ModalOverlay,ModalContent,ModalHeader,ModalCloseButton,ModalBody,ModalFooter } from '@chakra-ui/react'
import React,{useState} from 'react'
import { Link } from 'react-router-dom'


const Solutions = () => {
   
        const { isOpen, onOpen, onClose } = useDisclosure()
        const [size, setSize] = React.useState('md')
      
        const handleSizeClick = (newSize) => {
          setSize(newSize)
          onOpen()
        }
      
        const sizes = ['Products ▼','Solutions ▼', 'Resources ▼', 'Plans & Pricing ▼'];
        const shadow="box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;"
      
        return (
          <>
            {sizes.map((size) => (
              <Button
            //   style={{border:"none"}}
            border={"none"}
           boxShadow={shadow}
                onClick={() => handleSizeClick(size)}
                key={size}
                m={4}
              >{`${size}`}</Button>
            ))}
      
            <Modal onClose={onClose}  isOpen={isOpen}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>
                   
                  <Box  m={"auto"} mt={80} display="flex" h={450} justifyContent={"space-between"} w={"50%"} bg={"white"}>
                    <Box color={"gold"}>
                      <Text fontSize={"6xl"}>Surveys</Text>
                      <Link to="/survey-monkey">
                      <Box color={"blue"}>
                            Survey Monkey
                        </Box></Link>
                       
                        <Text w={"50%"} color="gray" fontSize="3xl">
                           Create & send Survey
                            with the worlds leading
                            online survey software
                        </Text>
                        <Box>
                            <Text color={"blue"} fontSize={"4xl"}>Enterprise</Text>
                        </Box>
                        <Text w={"50%"} color={"gray"} fontSize={"3xl"}>Empower your organization with our secure survey platfrom </Text>
                        <Text color={"blue"} fontSize={"4xl"}>Intregation </Text>
                        <Text w={"50%"} color={"gray"} fontsize={"3xl"}>Bring survry insight into your business apps</Text>
                    </Box>
                    
                   
                    <Box>
                       <Text>Spcialized Products</Text>
                    </Box>
                    <Box>
                        TechValidate
                    </Box>
                  </Box>
                 
                </ModalHeader>
                <ModalCloseButton m={"auto"} w={"60%"} />
                <ModalBody>
                  {/* <Lorem count={2} /> */}
                </ModalBody>
                <ModalFooter>
                
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
        )
      }
 


export default Solutions

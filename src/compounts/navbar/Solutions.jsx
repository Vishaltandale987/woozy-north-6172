import { Text,Box,useDisclosure,Modal,ModalOverlay,ModalContent,ModalHeader,ModalCloseButton,ModalBody,ModalFooter } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'


const Solutions = () => {
   
        const { isOpen, onOpen, onClose } = useDisclosure()
        const [size, setSize] = React.useState('md')
      
        const handleSizeClick = (newSize) => {
          setSize(newSize)
          onOpen()
        }
      
        const sizes = ['Products ▼','Solutions ▼'];
        const shadow="box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;"
        const sizes1="6xl";
      
        return (
          <>
            {sizes.map((size) => (
              <Text
            //   style={{border:"none"}}
            border={"none"}
           boxShadow={shadow}
                onClick={() => handleSizeClick(size)}
                key={size}
                m={4}
              >{`${size}`}</Text>
            ))}
            <Link to="/plan">
            <h1>Plans & Pricing</h1>
            </Link>

            <Link to="/dashbord" style={{"marginLeft":"1em"}}>
            <h1>Dashboard</h1>
            </Link>

      
            <Modal onClose={onClose}  size={sizes1}  isOpen={isOpen}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>
                   
                   <Box   m={"auto"}   display={"flex"} justifyContent={"space-evenly"} gap={10}  bg={"white"}>
                    <Box color={"gold"} >
                      <Text fontSize={"2xl"}>Surveys</Text>
                      <Link to="/survey-monkey">
                      <Text border={"none"} color={"skyblue"}>
                            Survey Monkey
                        </Text>
                       
                        </Link>
                        <Text color="gray" fontSize="1xl">
                           Create & send Survey
                            with the worlds leading
                            online survey software
                        </Text>
                       
                       
                        <Box>
                            <Text color={"skyblue"} fontSize={"2xl"}>Enterprise</Text>
                        </Box>
                        <Text color={"gray"} fontSize={"xl"}>Empower your organization with our secure survey platfrom </Text>
                        <Text color={"skyblue"} fontSize={"2xl"}>Intregation </Text>
                        <Text color={"gray"} fontsize={"xl"}>Bring survey insight into your business apps</Text>
                        <Text color={"skyblue"}>Apply</Text>
                        <Text fontSize={"xl"} color={"gray"}>Collect,review and manage applications</Text>
                    </Box>
                    
                   
                    <Box >
                       <Text  color={"goldenrod"} >Spcialized Products</Text>
                       <Text color={"skyblue"}>Audience</Text>
                       <Text color={"gray"} >Collect survey responses from global panel</Text>
                       <Text color={"skyblue"}>CX</Text>
                       <Text color={"gray"}>Understand and improve customer experience</Text>
                       <Text color={"skyblue"}>Engage</Text>
                       <Text color={"gray"}>Understand and engage employment factors</Text>
                         
                    </Box>
                    <Box>
                      
                       <Text color={"skyblue"}>Tech Validate</Text>
                       <Text color={"gray"} >Creating marketing content for customers feedback</Text>
                       <Text color={"skyblue"}>Apply</Text>
                       <Text color={"gray"}>Collect,review and manage applications </Text>
                       <Text color={"skyblue"}>Wuffo</Text>
                       <Text color={"gray"}>Gather data & payments with online forms</Text>
                       <Text color={"skyblue"}>Get Feedback</Text>
                       <Text color={"gray"}> Customers feedback for sailforce </Text>
                    </Box>

                    
                  </Box>
                  
                  
                 
                 
                </ModalHeader>
                
                <ModalBody>
                  {/* <Lorem count={2} /> */}
                </ModalBody>
                
                <ModalFooter>
                <ModalCloseButton />
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
        )
      }
 


export default Solutions
import React from 'react'
import {Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Checkbox, FormControl, FormLabel, Heading, Icon, Image, Input, List, ListIcon, ListItem, SimpleGrid, Tab, TabList, TabPanel, TabPanels, Tabs, Text, UnorderedList} from "@chakra-ui/react";
import { MdCheckCircle } from 'react-icons/md';
import {AiFillCloseCircle,AiOutlineArrowRight} from "react-icons/ai"
const Plan = () => {
  return (
    <Box>
        <Box>
            <Heading display={{base:"inherit",sm:"inherit",md:"inherit",lg:"none","2xl":"none"}} fontSize={"42px"} fontWeight="500" lineHeight={"48px"} marginBottom="10px" color="#4a4a3b">Compare all Plans</Heading>
            <Heading display={{base:"none",sm:"none",md:"none",lg:"inherit","2xl":"inherit"}} fontSize={"42px"} fontWeight="500" lineHeight={"48px"} marginBottom="10px" color="#4a4a3b">Choose a plan that works for you</Heading>
        </Box>
        <Box w={"100%"}>
            <Tabs justifyContent={"center"} align="center" variant="unstyled" gap="3rem">
                <TabList>
                    <Tab _selected={{color:"green",borderBottom:"4px solid green"}} marginRight="25px">Team Plans</Tab>
                    <Tab _selected={{color:"green",borderBottom:"4px solid green"}} marginRight="25px">Individual Plans</Tab>
                    <Tab _selected={{color:"green",borderBottom:"4px solid green"}}>Enterprise</Tab>
                </TabList>

                <TabPanels mt="35px">
                    <TabPanel>
                        <Box>
                            <SimpleGrid  columns={{base:1,md:1,lg:1,xl:3,"2xl":3}} justifyContent="center" gap={"15px"} w={{base:"70%",sm:"90%",md:"80%",lg:"75%","2xl":"70%"}}>
                                <Box position={"relative"} _hover={{border: "1px solid #007FAA"}} border=".5px solid grey" p="10px" pt="0" pr="0">
                                    <Box float="right" right="0" top='0' position={"relative"} zIndex="1" overflow={"hidden"} w="96px" h="96px" textAlign={"right"}>
                                        <Text transform="translate(-50%,-50%) rotate(45deg) translateY(-11px)" w="184px" position={"absolute"} top="50%" left="50%" backgroundColor={"#007FAA"} fontSize="10px" fontWeight={"bold"} color="white" textAlign={"center"} lineHeight="20px" _before={{backgroundColor:"#005977",content:"''",position:"absolute",left:0,top:0,zIndex:-1,h:"3px",w:"10px",borderTopLeftRadius:"3px"}} >SAVE 22% *</Text>
                                    </Box>    
                                    <Heading size="sm" mt="50px" textAlign={"right"}>TEAM ADVANTAGE</Heading>
                                    <Text fontSize="3xl" ml="5px" mt="13px" textAlign={"right"} w="100%" display={"flex"} fontWeight="500" color="#4a4a3b" justifyContent={"center"}>Rs 1,550 <Text mt="13px" ml="8px" fontSize={"md"}> / user / month</Text></Text>
                                    <Text fontSize={"11px"} fontWeight="400" mt="8px">Starting at 3 users, build annually</Text>
                                    <Button color="white" mt="30px" colorScheme={"#007FAA"} w={{base:"80%",sm:"30%",md:"30%",xl:"80%","2xl":"80%"}} backgroundColor="#007FAA">SIGN UP</Button>
                                    <Box w="90%" mt="25px" color="#4a4a3b" fontSize={"13px"} textAlign="left" >
                                        <UnorderedList>
                                            <ListItem mb="17px">Survey sharing with fine control over who can view and edit</ListItem>
                                            <ListItem mb="17px">Gather comments all in one place</ListItem>
                                            <ListItem mb="17px">Let team members analyze, filter, and export results</ListItem>
                                            <ListItem mb="17px">Notify others when you get new responses</ListItem>
                                            <ListItem mb="17px">Shared asset library for on-brand surveys</ListItem>
                                            <ListItem mb="17px">Add Contributor Seats</ListItem>
                                            <ListItem mb="17px">Add or reassign accounts at any time</ListItem>
                                            <ListItem mb="17px">Free integrations with popular collaboration apps</ListItem>
                                            <ListItem mb="17px">50,000 responses per year**</ListItem>
                                            <ListItem mb="17px">24/7 Expedited email support</ListItem>
                                            <ListItem mb="17px">Quizzes with custom feedback</ListItem>
                                            <ListItem mb="17px">Custom logo, colors, and survey URL</ListItem>
                                            <ListItem mb="17px">Question and page skip logic</ListItem>
                                            <ListItem mb="17px">All data exports (CSV, PDF, PPT, SPSS, XLS)</ListItem>
                                            <ListItem mb="17px">Accepsts Payments</ListItem>
                                            <ListItem mb="17px">Advanced analyze features</ListItem>
                                            <ListItem mb="17px">SurveyMonkey industry benchmarks</ListItem>
                                            <ListItem mb="17px">Multilingual surveys</ListItem>
                                        </UnorderedList>
                                    </Box>
                                    <Box position="absolute" bottom="10px" justifyContent={"center"} w="100%">
                                        <Button variant="link">See all plan features</Button>
                                    </Box>
                                </Box>
                                <Box position="relative" _hover={{border: "1px solid #671E75"}} border=".5px solid grey" p="10px" pt="0" pr="0">
                                    <Box float="right" right="0" top="0" position={"relative"} zIndex="1" overflow={"hidden"} w="96px" h="96px" textAlign={"right"}>
                                        <Text transform="translate(-50%,-50%) rotate(45deg) translateY(-11px)" w="184px" position={"absolute"} top="50%" left="50%" backgroundColor={"#671E75"} fontSize="10px" fontWeight={"bold"} color="white" textAlign={"center"} lineHeight="20px" _before={{backgroundColor:"#005977",content:"''",position:"absolute",left:0,top:0,zIndex:-1,h:"3px",w:"10px",borderTopLeftRadius:"3px"}} >SAVE 23% *</Text>
                                    </Box>    
                                    <Heading size="sm" mt="50px" textAlign={"right"}>TEAM PREMIER</Heading>
                                    <Text fontSize="3xl" ml="5px" mt="13px" textAlign={"right"} w="100%" display={"flex"} fontWeight="500" color="#4a4a3b" justifyContent={"center"}>Rs 3,800 <Text mt="13px" ml="8px" fontSize={"md"}> / user / month</Text></Text>
                                    <Text fontSize={"11px"} fontWeight="400" mt="8px">Starting at 3 users, build annually</Text>
                                    <Button color="white" mt="30px" colorScheme={"#671E75"} w={{base:"80%",sm:"30%",md:"30%",xl:"80%","2xl":"80%"}} backgroundColor="#671E75">SIGN UP</Button>
                                    <Box w="90%" mt="25px" color="#4a4a3b" fontSize={"13px"} textAlign="left" >
                                        <UnorderedList>
                                            <ListItem mb="17px">Survey sharing with fine control over who can view and edit</ListItem>
                                            <ListItem mb="17px">Gather comments all in one place</ListItem>
                                            <ListItem mb="17px">Let team members analyze, filter, and export results</ListItem>
                                            <ListItem mb="17px">Notify others when you get new responses</ListItem>
                                            <ListItem mb="17px">Shared asset library for on-brand surveys</ListItem>
                                            <ListItem mb="17px">Add Contributor Seats</ListItem>
                                            <ListItem mb="17px">Add or reassign accounts at any time</ListItem>
                                            <ListItem mb="17px">Free integrations with popular collaboration apps</ListItem>
                                            <ListItem mb="17px">100,000 responses per year**</ListItem>
                                            <ListItem mb="17px">Phone support and 24/7 email support</ListItem>
                                            <ListItem mb="17px">Quizzes with custom feedback</ListItem>
                                            <ListItem mb="17px">Custom logo, colors, and survey URL</ListItem>
                                            <ListItem mb="17px">Question and page skip logic</ListItem>
                                            <ListItem mb="17px">All data exports (CSV, PDF, PPT, SPSS, XLS)</ListItem>
                                            <ListItem mb="17px">Accepsts Payments</ListItem>
                                            <ListItem mb="17px">Advanced analyze features</ListItem>
                                            <ListItem mb="17px">SurveyMonkey industry benchmarks</ListItem>
                                            <ListItem mb="17px">Click map data visualization</ListItem>
                                            <ListItem mb="17px">Multilingual surveys</ListItem>
                                            <ListItem mb="17px">Response Quality</ListItem>
                                            <ListItem mb="17px">Crosstabs</ListItem>
                                            <ListItem mb="17px">Unlimited filter and compare rules, data trends</ListItem>
                                            <ListItem mb="17px">Advanced survey logic tools</ListItem>
                                            <ListItem mb="17px">Block randomization</ListItem>
                                            <ListItem mb="17px">White label surveys</ListItem>
                                            <ListItem mb="17px">Survey completion redirect</ListItem>
                                            <ListItem mb="17px">Remove SurveyMonkey footer</ListItem>
                                        </UnorderedList>
                                    </Box>
                                    <Box position="absolute" bottom="10px" justifyContent={"center"} w="100%">
                                        <Button variant="link">See all plan features</Button>
                                    </Box>
                                    
                                </Box>
                                <Box position="relative" _hover={{border: "1px solid blue"}} border=".5px solid grey" p="10px">
                                    <Heading size="sm" mt="50px" textAlign={"center"}>ENTERPRISE</Heading>
                                    <Text mt="13px" ml="8px" fontSize={"md"}>Powerful admin tools, integrations, and collaboration features for your organization.</Text>
                                    <Button color="white" mt="30px" colorScheme={"#007FAA"} w={{base:"80%",sm:"30%",md:"30%",xl:"80%","2xl":"80%"}} backgroundColor="#007FAA">CONTACT SALES</Button>
                                    <Box mb="60px" w="90%" mt="25px" color="#4a4a3b" fontSize={"13px"} textAlign="left" >
                                        <UnorderedList>
                                            <ListItem mb="17px">Survey sharing with fine control over who can view and edit</ListItem>
                                            <ListItem mb="17px">Gather comments all in one place</ListItem>
                                            <ListItem mb="17px">Let team members analyze, filter, and export results</ListItem>
                                            <ListItem mb="17px">Notify others when you get new responses</ListItem>
                                            <ListItem mb="17px">Shared asset library for on-brand surveys</ListItem>
                                            <ListItem mb="17px">Advanced collaboration features</ListItem>
                                            <ListItem mb="17px">Add or reassign accounts at any time</ListItem>
                                            <ListItem mb="17px">Free integrations with popular collaboration apps</ListItem>
                                            <ListItem mb="17px">Unlimited surveys and questions</ListItem>
                                            <ListItem mb="17px">Phone support and 24/7 email support***</ListItem>
                                            <ListItem mb="17px">Quizzes with custom feedback</ListItem>
                                            <ListItem mb="17px">Custom logo, colors, and survey URL</ListItem>
                                            <ListItem mb="17px">Question and page skip logic</ListItem>
                                            <ListItem mb="17px">All data exports (CSV, PDF, PPT, SPSS, XLS)</ListItem>
                                            <ListItem mb="17px">Accepsts Payments</ListItem>
                                            <ListItem mb="17px">Advanced analyze features</ListItem>
                                            <ListItem mb="17px">SurveyMonkey industry benchmarks</ListItem>
                                            <ListItem mb="17px">Click map data visualization</ListItem>
                                            <ListItem mb="17px">Multilingual surveys</ListItem>
                                            <ListItem mb="17px">Response Quality</ListItem>
                                            <ListItem mb="17px">Crosstabs</ListItem>
                                            <ListItem mb="17px">Unlimited filter and compare rules, data trends</ListItem>
                                            <ListItem mb="17px">Advanced survey logic tools</ListItem>
                                            <ListItem mb="17px">Block randomization</ListItem>
                                            <ListItem mb="17px">White label surveys</ListItem>
                                            <ListItem mb="17px">Survey completion redirect</ListItem>
                                            <ListItem mb="17px">Remove SurveyMonkey footer</ListItem>
                                            <ListItem mb="17px">Unlimited API access***</ListItem>
                                            <ListItem mb="17px">Flexible Plan types for multiple users</ListItem>
                                            <ListItem mb="17px">HIPAA-compliant features***</ListItem>
                                            <ListItem mb="17px">Customization and branding</ListItem>
                                            <ListItem mb="17px">Integrations with Salesforce, Marketo, Eloqua, and Tableau***</ListItem>
                                            <ListItem mb="17px">Admin dashboard and user management</ListItem>
                                            <ListItem mb="17px">Account control and migration</ListItem>
                                            <ListItem mb="17px">Enhanced governance and security features</ListItem>
                                            <ListItem mb="17px">Single sign-on (SSO)</ListItem>
                                            <ListItem mb="17px">Activity tracking through audit logs</ListItem>
                                            <ListItem mb="17px">Dedicated customer success manger***</ListItem>
                                        </UnorderedList>
                                    </Box>
                                    <Box position="absolute" bottom="10px" justifyContent={"center"} w="100%">
                                        <Button variant="link">See all plan features</Button>
                                    </Box>
                                </Box>
                            </SimpleGrid>
                            <Box display={{base:"none",sm:"none",md:"none",lg:"flex",xl:"flex","2xl":"flex"}} w="70%" justifyContent={"center"} m="auto" gap="77px">
                                <Button color="white" mt="30px" colorScheme={"#007FAA"} w="25%" backgroundColor="#007FAA">SIGN UP</Button>
                                <Button color="white" mt="30px" colorScheme={"#671E75"} w="25%" backgroundColor="#671E75">SIGN UP</Button>
                                <Button color="white" mt="30px" colorScheme={"#007FAA"} w="25%" backgroundColor="#007FAA">CONTACT SALES</Button>
                            </Box>
                            <Box display={{base:"none",sm:"none",md:"none",lg:"inherit",xl:"inherit","2xl":"inherit"}}  mt="20px" textAlign={"left"} w="70%" lineHeight={"2em"} fontSize="13px" color="#4a4a3b">
                                <Text>*Displayed pricing represents a 20% or more savings per user per month compared to individual Advantage and Premier plans</Text>
                                <Text>**Rs 36 per additional response, SurveyMonkey Audience responses sold seperately</Text>
                                <Text>***Add-on features available with Enterprise plan must be purchased separately</Text>
                            </Box>
                            <Box w="70%" mt="40px" display={{base:"none",sm:"none",md:"none",lg:"inherit",xl:"inherit","2xl":"inherit"}} >
                                <Text fontWeight={"bold"} backgroundColor="#F9BE0040" p="7px">SurveyMonkey Audience includes access to Paid Features</Text>
                                <Box display={"flex"}>
                                    <Box>
                                        <Image src="https://prod.smassets.net/assets/billweb/billweb/13.88.0/assets/experiments/audience_ippm_footer_upsell.png" />
                                    </Box>
                                    <Box p="25px" textAlign={"left"}>
                                        <Text mb="18px">Get survey responses from around the world in minutes with SurveyMonkey Audience</Text>
                                        <Text mb="18px">Target the types of people you want to hear from based on specific attributes, like country, gender, age, income, employement status, and more</Text>
                                        <Button mb="25px" mt="10px" borderRadius={"3px"} colorScheme="#F9BE00" color="black" backgroundColor="#F9BE00">BUY TARGETED RESPONSES</Button>
                                        <Text fontWeight={"550"}>Advanced survey design and analysis features are included in the price of your Audience project.</Text>
                                        <List lineHeight={"1.7rem"} w="100%" p="15px" display={"grid"} gridTemplateColumns="repeat(2,1fr)" float="left" textAlign={"left"} justifyContent="space-between">
                                            <Box>
                                                <ListItem>
                                                    <ListIcon as={MdCheckCircle} color='green.500' />
                                                    Unlimited number of surveys
                                                </ListItem>
                                                <ListItem>
                                                    <ListIcon as={MdCheckCircle} color='green.500' />
                                                    Unlimited responses 
                                                </ListItem>
                                                <ListItem>
                                                    <ListIcon as={MdCheckCircle} color='green.500' />
                                                    Custom colors & survey URL
                                                </ListItem>
                                                <ListItem>
                                                    <ListIcon as={MdCheckCircle} color='green.500' />
                                                    Skip logic
                                                </ListItem>
                                                <ListItem>
                                                    <ListIcon as={AiFillCloseCircle} color='grey' />
                                                    File upload
                                                </ListItem>
                                                <ListItem>
                                                    <ListIcon as={MdCheckCircle} color='green.500' />
                                                    Hide SurveyMonkey footer
                                                </ListItem>
                                            </Box>
                                            <Box>
                                                <ListItem>
                                                    <ListIcon as={MdCheckCircle} color='green.500' />
                                                    50 questions per survey
                                                </ListItem>
                                                <ListItem>
                                                    <ListIcon as={MdCheckCircle} color='green.500' />
                                                    24/7 customer support via email
                                                </ListItem>
                                                <ListItem>
                                                    <ListIcon as={MdCheckCircle} color='green.500' />
                                                    Data exports (CSV, PDF, PPT, XLS)
                                                </ListItem>
                                                <ListItem>
                                                    <ListIcon as={MdCheckCircle} color='green.500' />
                                                    Question & answer piping
                                                </ListItem>
                                                <ListItem>
                                                    <ListIcon as={MdCheckCircle} color='green.500' />
                                                    A/B test text and images
                                                </ListItem>
                                                <ListItem>
                                                    <ListIcon as={MdCheckCircle} color='green.500' />
                                                    Multilingual surveys
                                                </ListItem>                                                
                                            </Box>
                                        </List>
                                    </Box>
                                </Box>
                            </Box>
                            <Box w="70%" mt="25px" display={{base:"inherit",sm:"inherit",md:"inherit",lg:"none",xl:"none","2xl":"none"}}>
                                <Heading size="lg" fontWeight={"600"}>Get started for free with our Basic plan.</Heading>
                                <Text>You get unlimited surveys, 10 questions per survey!</Text>
                                <Button color="white" backgroundColor={"green"} mt="30px" w="100%">SIGN UP</Button>
                            </Box>
                            <Box mt="15px" w="70%" display={{base:"none",sm:"none",md:"none",lg:"inherit",xl:"inherit","2xl":"inherit"}}>
                                <Heading size="md" fontWeight={"400"}>Just need the basics? <Button variant="link" fontSize={"lg"} color="#007FAA">Get started for free.</Button></Heading>
                                <Button variant="link" fontWeight={"700"} mt="15px" fontSize="lg" color={"#007FAA"}>SEE ALL PLAN FEATURES <Icon boxSize={17} mt="3px" as={AiOutlineArrowRight}/> </Button>
                            </Box>
                            <Box mt="50px" w="70%">
                                <Heading size={{base:"md",sm:"md",md:"md",lg:"lg","2xl":"lg"}}>More about plans and pricing</Heading>
                                <Box display={{base:"none",sm:"none",md:"none",lg:"inherit","2xl":"inherit"}}>
                                    <SimpleGrid columns={{base:2,sm:1,md:1,lg:2,"2xl":2}} textAlign="left" gap="50px" lineHeight={"2rem"} mt="50px">
                                        <Box>
                                            <Text fontWeight={"500"} mb="10px">How much does SurveyMonkey cost?</Text>
                                            <Text>The Basic plan is FREE.</Text>
                                            <Text>The standard Monthly plan costs Rs 899 a month.</Text>
                                            <Text>The Standard Annual plan costs Rs 699 a month, billed annually.</Text>
                                            <Text>The Advantage plan costs Rs 1,999 a month, billed annually.</Text>
                                            <Text>The Premier plan costs Rs 4,999 a month, billed annually.</Text>
                                            <Text>The Team Advantage plan costs RS 1,550 a month, per user, billed annually.</Text>
                                            <Text>The Team Premier plan costs Rs 3,800 a month, per user, billed annually.</Text>
                                        </Box>
                                        <Box>
                                            <Text fontWeight={"500"} mb="10px">Do you offer discounts for teams?</Text>
                                            <Text>We offer discounts when you sign up for business plans that include 3 or more people. With Team Advantage and Team Premier plans, you'll save 20% or more over personal plans and get access to additional collaboration features. <Button variant="link" color="#007FAA">See pricing <Icon as={AiOutlineArrowRight}/></Button></Text>
                                            <Text fontWeight={"500"} mt="15px" mb="10px">Do you offer plans for corporate needs?</Text>
                                            <Text>Our Enterprise plans offer HIPAA compliance, advanced security, and admin features for increased governance and control. <Button variant="link" color="#007FAA">Contact Sales<Icon as={AiOutlineArrowRight}/></Button></Text>
                                        </Box>
                                    </SimpleGrid>
                                </Box>
                            </Box>
                            <Box display={{base:"inherit",sm:"inherit",md:"inherit",lg:"none","2xl":"none"}}>
                                <Accordion allowToggle>
                                    <AccordionItem>
                                        <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                How much does SurveyMonkey cost?
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        </h2>
                                        <AccordionPanel textAlign={"left"} pb={4}>
                                            The Team Advantage plan costs Rs 1,550 a month, per user, billed annually.
                                            The Team Premier plan costs Rs 3,800 a month, per user, billed annually.
                                        </AccordionPanel>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                Do you offer discounts for teams? 
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4} textAlign="left">
                                            We offer discounts when you sign up for business plans that include 3 or more
                                            people. With Team Advantage and Team Premier plans, you'll save 20% or more
                                            over personal plans and get access to additional collaboration features. <Button variant="link" color="#007FAA">See Pricing <Icon as={AiOutlineArrowRight} /></Button>
                                        </AccordionPanel>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                Corporate needs 
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4} textAlign="left">
                                        Our Enterprise plans offer HIPAA compliance, advanced security, and admin features for increased governance and control. <Button variant="link" color="#007FAA">Contact Sales<Icon as={AiOutlineArrowRight}/></Button>
                                        </AccordionPanel>
                                    </AccordionItem>
                                </Accordion>
                            </Box>
                        </Box>
                    </TabPanel>
                    <TabPanel>
                    <Box>
                            <SimpleGrid mt="50px" columns={{base:1,md:1,lg:1,xl:3,"2xl":3}} justifyContent="center" gap={"15px"} w={{base:"70%",sm:"90%",md:"80%",lg:"75%","2xl":"70%"}}>
                                <Box position={"relative"} _hover={{border: "1px solid #05467E"}} border=".5px solid grey" p="10px" pt="0" pr="0">
                                    <Heading size="sm" mt="50px" textAlign={"center"}>Premier Annual</Heading>
                                    <Text fontSize="3xl" ml="5px" mt="27px" textAlign={"right"} w="100%" display={"flex"} fontWeight="500" color="#4a4a3b" justifyContent={"center"}>Rs 4,999 <Text mt="13px" ml="8px" fontSize={"md"}> / month</Text></Text>
                                    <Text fontSize={"11px"} fontWeight="400" mt="8px">Rs 59,988 billed annually</Text>
                                    <Button color="white" mt="30px" colorScheme={"#05467E"} w={{base:"80%",sm:"30%",md:"30%",xl:"80%","2xl":"80%"}} backgroundColor="#007FAA">SIGN UP</Button>
                                    <Box w="90%" mt="25px" color="#4a4a3b" fontSize={"13px"} textAlign="left" >
                                        <UnorderedList>
                                            <ListItem mb="17px">Unlimited number of surveys</ListItem>
                                            <ListItem mb="17px">Unlimited questions per survey</ListItem>
                                            <ListItem mb="17px">40,000 responses per year*</ListItem>
                                            <ListItem mb="17px">Phone support and 24/7 email support</ListItem>
                                            <ListItem mb="17px">Quizzes with custom feedback</ListItem>
                                            <ListItem mb="17px">Data exports (CSV, PDF, PPT, XLS)</ListItem>
                                            <ListItem mb="17px">Skip logic, question & answer piping</ListItem>
                                            <ListItem mb="17px">Text analysis & statistical significance</ListItem>
                                            <ListItem mb="17px">Custom logo, colors, and survey URL</ListItem>
                                            <ListItem mb="17px">Advanced data exports (SPSS)</ListItem>
                                            <ListItem mb="17px">A/B testing, randomization, quotas</ListItem>
                                            <ListItem mb="17px">Custom vairables</ListItem>
                                            <ListItem mb="17px">Accept Payments</ListItem>
                                            <ListItem mb="17px">File upload</ListItem>
                                            <ListItem mb="17px">SurveyMonkey industry benchmarks</ListItem>
                                            <ListItem mb="17px">Click map data visualization</ListItem>
                                            <ListItem mb="17px">Multilingual surveys</ListItem>
                                            <ListItem mb="17px">Response Quality</ListItem>
                                            <ListItem mb="17px">Crosstabs</ListItem>
                                            <ListItem mb="17px">Unlimited filter and compare rules, data trends</ListItem>
                                            <ListItem mb="17px">Advanced branching & piping, block randomization</ListItem>
                                            <ListItem mb="17px">White label surveys</ListItem>
                                        </UnorderedList>
                                    </Box>
                                    <Box position="absolute" bottom="10px" justifyContent={"center"} w="100%">
                                        <Button variant="link">See all plan features</Button>
                                    </Box>
                                </Box>
                                <Box position="relative" _hover={{border: "1px solid #00BF6F"}} border=".5px solid #00BF6F" p="10px" pt="0" pr="0" mt={{base:"15px",sm:"15px",md:"15px",xl:"-35px","2xl":"-35px"}}>
                                    <Box float="right" right="0" top="0" position={"relative"} zIndex="1" overflow={"hidden"} w="96px" h="96px" textAlign={"right"}>
                                        <Text transform="translate(-50%,-50%) rotate(45deg) translateY(-11px)" w="184px" position={"absolute"} top="50%" left="50%" backgroundColor={"#00BF6F"} fontSize="10px" fontWeight={"bold"} color="white" textAlign={"center"} lineHeight="20px" _before={{backgroundColor:"#00BF6F",content:"''",position:"absolute",left:0,top:0,zIndex:-1,h:"3px",w:"10px",borderTopLeftRadius:"3px"}} >BEST VALUE</Text>
                                    </Box>    
                                    <Heading size="sm" mt="85px" textAlign={"right"}>Advantage Annual</Heading>
                                    <Text fontSize="3xl" ml="5px" mt="25px" textAlign={"right"} w="100%" display={"flex"} fontWeight="500" color="#4a4a3b" justifyContent={"center"}>Rs 1,999 <Text mt="13px" ml="8px" fontSize={"md"}> / month</Text></Text>
                                    <Text fontSize={"11px"} fontWeight="400" mt="8px">Rs 23,988 billed annually</Text>
                                    <Button color="white" mt="30px" colorScheme={"#00BF6F"} w={{base:"80%",sm:"30%",md:"30%",xl:"80%","2xl":"80%"}} backgroundColor="#00BF6F">SIGN UP</Button>
                                    <Box w="90%" mt="25px" color="#4a4a3b" fontSize={"13px"} textAlign="left" >
                                        <UnorderedList>
                                            <ListItem mb="17px">Unlimited number of surveys</ListItem>
                                            <ListItem mb="17px">Unlimited questions per survey</ListItem>
                                            <ListItem mb="17px">15,000 responses per year*</ListItem>
                                            <ListItem mb="17px">24/7 expedited email support</ListItem>
                                            <ListItem mb="17px">Quizzes with custom feedback</ListItem>
                                            <ListItem mb="17px">Data exports (CSV, PDF, PPT, XLS)</ListItem>
                                            <ListItem mb="17px">Skip logic, question & answer piping</ListItem>
                                            <ListItem mb="17px">Text analysis & statistical significance</ListItem>
                                            <ListItem mb="17px">Custom logo, colors, and survey URL</ListItem>
                                            <ListItem mb="17px">Advanced data exports (SPSS)</ListItem>
                                            <ListItem mb="17px">A/B testing, randomization, quotas</ListItem>
                                            <ListItem mb="17px">Custom vairables</ListItem>
                                            <ListItem mb="17px">Accept Payments</ListItem>
                                            <ListItem mb="17px">File upload</ListItem>
                                            <ListItem mb="17px">SurveyMonkey industry benchmarks</ListItem>
                                            <ListItem mb="17px">Multilingual surveys</ListItem>
                                        </UnorderedList>
                                    </Box>
                                    <Box position="absolute" bottom="10px" justifyContent={"center"} w="100%">
                                        <Button variant="link">See all plan features</Button>
                                    </Box>
                                    
                                </Box>
                                <Box position="relative" _hover={{border: "1px solid #2DCCD3"}} border=".5px solid grey" p="10px">
                                    <Heading size="sm" mt="50px" textAlign={"center"}>Standard Monthly</Heading>
                                    <Text fontSize="3xl" ml="5px" mt="18px" textAlign={"right"} w="100%" display={"flex"} fontWeight="500" color="#4a4a3b" justifyContent={"center"}>Rs 899 <Text mt="13px" ml="8px" fontSize={"md"}> / month</Text></Text>
                                    <Button color="white" mt="53px" colorScheme={"#007FAA"} w={{base:"80%",sm:"30%",md:"30%",xl:"80%","2xl":"80%"}} backgroundColor="#2DCCD3">SIGN UP</Button>
                                    <Box mb="60px" w="90%" mt="25px" color="#4a4a3b" fontSize={"13px"} textAlign="left" >
                                        <UnorderedList>
                                            <ListItem mb="17px">Unlimited number of surveys</ListItem>
                                            <ListItem mb="17px">Unlimited questions per survey</ListItem>
                                            <ListItem mb="17px">1,000 responses per month*</ListItem>
                                            <ListItem mb="17px">24/7 customer support via email</ListItem>
                                            <ListItem mb="17px">Quizzes with custom feedback</ListItem>
                                            <ListItem mb="17px">Data exports (CSV, PDF, PPT, XLS)</ListItem>
                                            <ListItem mb="17px">Skip logic only</ListItem>
                                            <ListItem mb="17px">Text analysis</ListItem>
                                        </UnorderedList>
                                    </Box>
                                    <Box position="absolute" bottom="10px" justifyContent={"center"} w="100%">
                                        <Button variant="link">See all plan features</Button>
                                    </Box>
                                </Box>
                            </SimpleGrid>
                            <Box display={{base:"none",sm:"none",md:"none",lg:"flex",xl:"flex","2xl":"flex"}} w="70%" justifyContent={"center"} m="auto" gap="77px">
                                <Button color="white" mt="30px" colorScheme={"#007FAA"} w="25%" backgroundColor="#05467E">SIGN UP</Button>
                                <Button color="white" mt="30px" colorScheme={"#671E75"} w="25%" backgroundColor="#00BF6F">SIGN UP</Button>
                                <Button color="white" mt="30px" colorScheme={"#007FAA"} w="25%" backgroundColor="#007FAA">SIGN UP</Button>
                            </Box>
                            <Box display={{base:"none",sm:"none",md:"none",lg:"inherit",xl:"inherit","2xl":"inherit"}} mt="20px" textAlign={"left"} w="70%" lineHeight={"2em"} fontSize="13px" color="#4a4a3b">
                                <Text>*Rs 36 per additional response. SurveyMonkey responses sold seperately.</Text>
                            </Box>
                            <Box display={{base:"none",sm:"none",md:"none",lg:"inherit",xl:"inherit","2xl":"inherit"}} w="70%" mt="40px">
                                <Text fontWeight={"bold"} backgroundColor="#F9BE0040" p="7px">SurveyMonkey Audience includes access to Paid Features</Text>
                                <Box display={"flex"}>
                                    <Box>
                                        <Image src="https://prod.smassets.net/assets/billweb/billweb/13.88.0/assets/experiments/audience_ippm_footer_upsell.png" />
                                    </Box>
                                    <Box p="25px" textAlign={"left"}>
                                        <Text mb="18px">Get survey responses from around the world in minutes with SurveyMonkey Audience</Text>
                                        <Text mb="18px">Target the types of people you want to hear from based on specific attributes, like country, gender, age, income, employement status, and more</Text>
                                        <Button mb="25px" mt="10px" borderRadius={"3px"} colorScheme="#F9BE00" color="black" backgroundColor="#F9BE00">BUY TARGETED RESPONSES</Button>
                                        <Text fontWeight={"550"}>Advanced survey design and analysis features are included in the price of your Audience project.</Text>
                                        <List lineHeight={"1.7rem"} w="100%" p="15px" display={"grid"} gridTemplateColumns="repeat(2,1fr)" float="left" textAlign={"left"} justifyContent="space-between">
                                            <Box>
                                                <ListItem>
                                                    <ListIcon as={MdCheckCircle} color='green.500' />
                                                    Unlimited number of surveys
                                                </ListItem>
                                                <ListItem>
                                                    <ListIcon as={MdCheckCircle} color='green.500' />
                                                    Unlimited responses 
                                                </ListItem>
                                                <ListItem>
                                                    <ListIcon as={MdCheckCircle} color='green.500' />
                                                    Custom colors & survey URL
                                                </ListItem>
                                                <ListItem>
                                                    <ListIcon as={MdCheckCircle} color='green.500' />
                                                    Skip logic
                                                </ListItem>
                                                <ListItem>
                                                    <ListIcon as={AiFillCloseCircle} color='grey' />
                                                    File upload
                                                </ListItem>
                                                <ListItem>
                                                    <ListIcon as={MdCheckCircle} color='green.500' />
                                                    Hide SurveyMonkey footer
                                                </ListItem>
                                            </Box>
                                            <Box>
                                                <ListItem>
                                                    <ListIcon as={MdCheckCircle} color='green.500' />
                                                    50 questions per survey
                                                </ListItem>
                                                <ListItem>
                                                    <ListIcon as={MdCheckCircle} color='green.500' />
                                                    24/7 customer support via email
                                                </ListItem>
                                                <ListItem>
                                                    <ListIcon as={MdCheckCircle} color='green.500' />
                                                    Data exports (CSV, PDF, PPT, XLS)
                                                </ListItem>
                                                <ListItem>
                                                    <ListIcon as={MdCheckCircle} color='green.500' />
                                                    Question & answer piping
                                                </ListItem>
                                                <ListItem>
                                                    <ListIcon as={MdCheckCircle} color='green.500' />
                                                    A/B test text and images
                                                </ListItem>
                                                <ListItem>
                                                    <ListIcon as={MdCheckCircle} color='green.500' />
                                                    Multilingual surveys
                                                </ListItem>                                                
                                            </Box>
                                        </List>
                                    </Box>
                                </Box>
                            </Box>
                            <Box w="70%" mt="25px" display={{base:"inherit",sm:"inherit",md:"inherit",lg:"none",xl:"none","2xl":"none"}}>
                                <Heading size="lg" fontWeight={"600"}>Get started for free with our Basic plan.</Heading>
                                <Text>You get unlimited surveys, 10 questions per survey!</Text>
                                <Button color="white" backgroundColor={"green"} mt="30px" w="100%">SIGN UP</Button>
                            </Box>
                            <Box mt="15px" w="70%" display={{base:"none",sm:"none",md:"none",lg:"inherit",xl:"inherit","2xl":"inherit"}}>
                                <Heading size="md" fontWeight={"400"}>Just need the basics? <Button variant="link" fontSize={"lg"} color="#007FAA">Get started for free.</Button></Heading>
                                <Button variant="link" fontWeight={"700"} mt="15px" fontSize="lg" color={"#007FAA"}>SEE ALL PLAN FEATURES <Icon boxSize={17} mt="3px" as={AiOutlineArrowRight}/> </Button>
                            </Box>
                            <Box mt="50px" w="70%">
                                <Heading size={{base:"md",sm:"md",md:"md",lg:"lg","2xl":"lg"}}>More about plans and pricing</Heading>
                                <Box display={{base:"none",sm:"none",md:"none",lg:"inherit","2xl":"inherit"}}>
                                    <SimpleGrid columns={{base:2,sm:1,md:1,lg:2,"2xl":2}} textAlign="left" gap="50px" lineHeight={"2rem"} mt="50px">
                                        <Box>
                                            <Text fontWeight={"500"} mb="10px">How much does SurveyMonkey cost?</Text>
                                            <Text>The Basic plan is FREE.</Text>
                                            <Text>The standard Monthly plan costs Rs 899 a month.</Text>
                                            <Text>The Standard Annual plan costs Rs 699 a month, billed annually.</Text>
                                            <Text>The Advantage plan costs Rs 1,999 a month, billed annually.</Text>
                                            <Text>The Premier plan costs Rs 4,999 a month, billed annually.</Text>
                                            <Text>The Team Advantage plan costs RS 1,550 a month, per user, billed annually.</Text>
                                            <Text>The Team Premier plan costs Rs 3,800 a month, per user, billed annually.</Text>
                                        </Box>
                                        <Box>
                                            <Text fontWeight={"500"} mb="10px">Do you offer discounts for teams?</Text>
                                            <Text>We offer discounts when you sign up for business plans that include 3 or more people. With Team Advantage and Team Premier plans, you'll save 20% or more over personal plans and get access to additional collaboration features. <Button variant="link" color="#007FAA">See pricing <Icon as={AiOutlineArrowRight}/></Button></Text>
                                            <Text fontWeight={"500"} mt="15px" mb="10px">Do you offer plans for corporate needs?</Text>
                                            <Text>Our Enterprise plans offer HIPAA compliance, advanced security, and admin features for increased governance and control. <Button variant="link" color="#007FAA">Contact Sales<Icon as={AiOutlineArrowRight}/></Button></Text>
                                        </Box>
                                    </SimpleGrid>
                                </Box>
                            </Box>
                            <Box display={{base:"inherit",sm:"inherit",md:"inherit",lg:"none","2xl":"none"}}>
                                <Accordion allowToggle>
                                    <AccordionItem>
                                        <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                How much does SurveyMonkey cost?
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        </h2>
                                        <AccordionPanel textAlign={"left"} pb={4}>
                                            The Team Advantage plan costs Rs 1,550 a month, per user, billed annually.
                                            The Team Premier plan costs Rs 3,800 a month, per user, billed annually.
                                        </AccordionPanel>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                Do you offer discounts for teams? 
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4} textAlign="left">
                                            We offer discounts when you sign up for business plans that include 3 or more
                                            people. With Team Advantage and Team Premier plans, you'll save 20% or more
                                            over personal plans and get access to additional collaboration features. <Button variant="link" color="#007FAA">See Pricing <Icon as={AiOutlineArrowRight} /></Button>
                                        </AccordionPanel>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                Corporate needs 
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4} textAlign="left">
                                        Our Enterprise plans offer HIPAA compliance, advanced security, and admin features for increased governance and control. <Button variant="link" color="#007FAA">Contact Sales<Icon as={AiOutlineArrowRight}/></Button>
                                        </AccordionPanel>
                                    </AccordionItem>
                                </Accordion>
                            </Box>
                        </Box>
                    </TabPanel>
                    <TabPanel>
                        <Box>
                            <SimpleGrid w="70%" columns={{base:1,sm:1,md:1,lg:2,"2xl":2}}>
                                <Box textAlign={"left"}>
                                    <Heading size="lg">Contact us today</Heading>
                                    <Text mt="30px" textAlign={"left"}>Learn more about SurveyMonkey Enterprise and schedule a demo.</Text>
                                    <UnorderedList lineHeight={"35px"} textAlign={"left"} p="15px" w="90%">
                                        <ListItem mb="15px">Manage multiple users and gain visibility into all survey data collected across your organization with admin controls and dashboards.</ListItem>
                                        <ListItem mb="15px">Ensure confidential data is protected with enhanced security including encryption, SSO, and features that help you remain complaint with HIPAA and GDPR.</ListItem>
                                        <ListItem>Make feedback automated and actionable by connecting to key business systems using APIs and powerful integrations, including Salesforce, Marketo, Tableau, and more.</ListItem>
                                    </UnorderedList>
                                </Box>
                                <Box backgroundColor={"#F7F8FA"} p="30px" textAlign={"left"}>
                                    <FormControl isRequired>
                                        <FormLabel>First name</FormLabel>
                                        <Input type="text"/>
                                    </FormControl>
                                    <FormControl isRequired>
                                        <FormLabel>Last name</FormLabel>
                                        <Input type="text"/>
                                    </FormControl>
                                    <FormControl isRequired>
                                        <FormLabel>Business email</FormLabel>
                                        <Input type="email"/>
                                    </FormControl>
                                    <FormControl isRequired>
                                        <FormLabel>Job title</FormLabel>
                                        <Input type="text"/>
                                    </FormControl>
                                    <FormControl isRequired>
                                        <FormLabel>Company</FormLabel>
                                        <Input type="text"/>
                                    </FormControl>
                                    <FormControl isRequired>
                                        <FormLabel>Phone number</FormLabel>
                                        <Input type="number"/>
                                    </FormControl>
                                    <Box display="flex" mt="20px">
                                        <Checkbox size='lg'mt="-50px">
                                        </Checkbox>
                                        <Text ml="8px" fontSize={"xs"}>Contact me about SurveyMonkey Business Solutions like product updates, news, information, and special promotions. I can unsubscribe <Button size="xs" variant={"link"} color="#007FAA">here</Button> at any time and can visit SurveyMonkey's <Button variant={"link"} size="xs" color="#007FAA">privacy notice </Button>if have any questtions. We remember your preference so you do not have to submit it to us again and we will retain this preference until you opt-out.
                                        </Text>    
                                    </Box>
                                    
                                    <Button size="lg" mt="15px" backgroundColor={"#00BF6F"} color="white">Contact Sales</Button>
                                </Box>
                            </SimpleGrid>
                        </Box>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    </Box>
  )
}

export default Plan
import React, { useEffect } from "react";
import {
  Box,
  Button,
  Heading,
  Input,
  Radio,
  RadioGroup,
  Select,
} from "@chakra-ui/react";
import { useState } from "react";
import Survyed from "./Survyed";
import PvtNavbar from "../../compounts/PvtNavbar/PvtNavbar";
const NewSurvey = () => {
  let [question, setQuestion] = useState([]);
  let [input, setInput] = useState("");
  let [option, setOption] = useState("");

  const [data, setdata] = useState({});

  const d = () => {
    let storedata = JSON.parse(localStorage.getItem("dashbord_data"));

    setdata(storedata[0]);
  };

  console.log(data);

  useEffect(() => {
    d();
  }, []);

  let handleClick = () => {
    let newQues = {
      title: input,
      option: option,
      id: Date.now(),
    };
    setQuestion([...question, newQues]);
    setInput("");
  };
  return (
    <Box>
      <PvtNavbar />
      <Box boxShadow={"xl"} w="50%" p="20px" m="auto" mb="20px">
        <Heading color="green" size="xl">
          Enter your Survey
        </Heading>
      </Box>

      <Box boxShadow={"xl"} w="50%" p="20px" m="auto">
        <Box gap="25px" display="flex" mb="20px">
          <Input
            placeholder="Enter your question"
            w="60%"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          {/* <Select placeholder='Select option' onChange={(e)=>setOption(e.target.value)} w="20%">
                    <option value='mcq'>Multiple Choice</option>
                    <option value='free'>Free Response</option>
                    <option value='rating'>Rating</option>
                </Select> */}
          <Button
            colorScheme={"green"}
            backgroundColor="green.700"
            color="white"
            onClick={handleClick}
          >
            continue
          </Button>
        </Box>
        {/* <Box display={option === "rating" ? "inherit":"none"}>
                <RadioGroup display={"flex"} gap="20px">
                    <Radio>Very Poor</Radio>
                    <Radio>Poor</Radio>
                    <Radio>Average</Radio>
                    <Radio>Good</Radio>
                    <Radio>Very Good</Radio>
                </RadioGroup>
            </Box> */}
        {/* <Box display={option==="mcq"?"inherit":"none"}>
                <Input placeholder='Enter Options'/>
                <Input placeholder='Enter Options'/>
                <Input placeholder='Enter Options'/>
                <Input placeholder='Enter Options'/>
            </Box> */}
      </Box>
      {question &&
        question.map((item) => {
          return (
            <Survyed title={item.title} option={item.option} key={item.id} />
          );
        })}
     <Box
     textAlign="left"
     m="auto"
     w="70%"
     >
        <h2> <b> Survay Name</b> -  {data.name}</h2> 
        <h2> <b> Survay Category</b> -  {data.survey}</h2>
     </Box>
    </Box>



  );
};

export default NewSurvey;

import { Box, Heading, Radio, RadioGroup } from '@chakra-ui/react'
import React from 'react'

const Survyed = ({option,title}) => {

  return (
    <Box w="70%" m="auto" p="20px"mb="30px" boxShadow={"xl"} textAlign="left">
        <Heading size="md" mb="20px">{title}</Heading>
        
        <Box display={option === "rating" ? "inherit":"none"}>
            <RadioGroup display={"flex"} gap="20px">
                <Radio>Very Poor</Radio>
                <Radio>Poor</Radio>
                <Radio>Average</Radio>
                <Radio>Good</Radio>
                <Radio>Very Good</Radio>
            </RadioGroup>
        </Box>
    </Box>
  )
}

export default Survyed
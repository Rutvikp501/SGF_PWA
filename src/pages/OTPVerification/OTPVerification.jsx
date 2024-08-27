
import React, { useState } from 'react';
import {
  Flex,
  Text,
  Input,
  Button,
  HStack,
  PinInput,
  PinInputField,
} from '@chakra-ui/react';


const OTPVerification = () => {
    const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <Flex flexDir="column" p="1rem 1.5rem" align="center"bg="#3A9FB6" minH="100vh" justify="center">
      <Text color="#67D4FF" fontWeight={700}fontSize="1.25rem" mb="0.5rem"alignSelf="flex-start" >
        Verification Code
      </Text>
      <Text color="#fff" fontWeight={600} mb="1.5rem" fontSize="0.9rem" alignSelf="flex-start">
        We have sent the verification code to your email address
      </Text>

      <HStack spacing="1rem" mb="2rem">
        <PinInput size="lg">
          <PinInputField bg="#3A9FB6"color="white"border="2px solid white"borderRadius="0.5rem"/>
          <PinInputField bg="#3A9FB6"color="white"border="2px solid white"borderRadius="0.5rem"/>
          <PinInputField bg="#3A9FB6"color="white"border="2px solid white"borderRadius="0.5rem"/>
          <PinInputField bg="#3A9FB6"color="white"border="2px solid white"borderRadius="0.5rem"/>
        
        </PinInput>
      </HStack>

      <Input placeholder="New Password" mb="1rem"value={newPassword}onChange={(e) => setNewPassword(e.target.value)} borderRadius="2rem"bg="transparent"
      borderColor="white"color="white" />
      <Input placeholder="Confirm Password" mb="2rem"value={confirmPassword}onChange={(e) => setConfirmPassword(e.target.value)}borderRadius="2rem"
        bg="transparent"borderColor="white"color="white"/>
      <Button bg="linear-gradient(145deg, #58D3D3, #3A9FB6)" color="white" width="full"mb="1rem"borderRadius="2rem"  
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)" _hover={{ bg: "#3A9FB6" }} _active={{ bg: "#3A9FB6" }}onClick={() => alert('Password Confirmed')}>
        Confirm
      </Button>
    </Flex>
  )
}

export default OTPVerification

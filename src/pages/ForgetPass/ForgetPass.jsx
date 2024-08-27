import React, { useState } from 'react';
import {
  Flex,
  Text,
  Input,
  Button,
  Image,
  InputGroup,
  InputRightElement,
  useToast,
} from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import FImage from '../../assets/images/png/Image.png';
import { sendotpFn } from '../../services/API';
function ForgetPass() {
    const [email, setEmail] = useState('');
    const navigate = useNavigate(); // Initialize navigate
    const toast = useToast();
    const [isLoading, setisLoading] = useState(false)
    const handleSendOTP = async () => {
        setisLoading(true)
        try {
          const payload = {email}
          const res = await sendotpFn(payload)
          if(res?.status){
            setTimeout(() => {
                navigate('/submit-otp', { state: { email } });
              setisLoading(false)
            }, 1500);
          }else{
            setTimeout(() => {
              setisLoading(false)
            }, 1500);
          }
        } catch (error) {
            
            console.error(error);
        }
    };
  
    return (
      <Flex
        flexDir="column"
        p="1rem 1.5rem"
        align="center"
        bg="#92e1f3"
        minH="100vh"
        justify="center"
      >
        <Image src={FImage} w="209px" h="246px" marginBottom="1.5rem" />
        <Text color="#fff" fontWeight={700} fontSize="2rem" mb=".5rem">
          OTP Verification
        </Text>
        <Text color="#fff" fontWeight={600} mb="1rem" fontSize="1rem">
          Enter email to send one time Password
        </Text>
        <InputGroup mb="1rem" borderRadius="2rem">
          <Input
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            bg="#fff"
            color="#3A9FB6"
            borderRadius="2rem"
            focusBorderColor="teal.500"
          />
          <InputRightElement>
            <EditIcon color="#3A9FB6" />
          </InputRightElement>
        </InputGroup>
        <Button
        isLoading={isLoading}
          bg="linear-gradient(145deg, #58D3D3, #3A9FB6)"
          color="#fff"
          width="full"
          mb="1rem"
          borderRadius="2rem"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          _hover={{ bg: "#3A9FB6" }}
          _active={{ bg: "#3A9FB6" }}
          onClick={handleSendOTP} // Use the API call function
        >
          Send OTP
        </Button>
      </Flex>
  )
}

export default ForgetPass

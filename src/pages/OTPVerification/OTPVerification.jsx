
import React, { useState } from 'react';
import {
  Flex,
  Text,
  Input,
  Button,
  HStack,
  PinInput,
  PinInputField,
  useToast,
  Image,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import FImage from '../../assets/images/png/Image.png';
import { otpVerificationFn } from '../../services/API';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

const OTPVerification = () => {
  const navigate = useNavigate();

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword);
  };

  const handleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const [isLoading, setisLoading] = useState(false)
  const [otp, setOtp] = useState('');
  const isPasswordMatching = newPassword && confirmPassword && newPassword === confirmPassword;
  const handleResetPass = async () => {
    setisLoading(true)
    try {
      const payload = { newPassword, otp }
      const res = await otpVerificationFn(payload)
      console.log(res);

      if (res?.success) {
        setTimeout(() => {
          navigate('/',);
          setisLoading(false)
        }, 1500);
      } else {
        setTimeout(() => {
          setisLoading(false)
        }, 1500);
      }
    } catch (error) {

      console.error(error);
    }
  };


  return (
    <Flex flexDir="column" p="1rem 1.5rem" align="center" bg="#3A9FB6" minH="100vh" justify="center">
      <Image src={FImage} w="190px" h="190px" marginBottom="1.5rem" />
      <Text color="#67D4FF" fontWeight={700} fontSize="1.25rem" mb="0.5rem" alignSelf="flex-start">
        Verification Code
      </Text>
      <Text color="#fff" fontWeight={600} mb="1.5rem" fontSize="0.9rem" alignSelf="flex-start">
        We have sent the verification code to your email address
      </Text>

      <HStack spacing="1rem" mb="2rem">
        <PinInput size="lg" onChange={(value) => setOtp(value)}>
          <PinInputField bg="#3A9FB6" color="#3a9fb6" border="2px solid white" borderRadius="0.5rem" />
          <PinInputField bg="#3A9FB6" color="#3a9fb6" border="2px solid white" borderRadius="0.5rem" />
          <PinInputField bg="#3A9FB6" color="#3a9fb6" border="2px solid white" borderRadius="0.5rem" />
          <PinInputField bg="#3A9FB6" color="#3a9fb6" border="2px solid white" borderRadius="0.5rem" />
        </PinInput>
      </HStack>
      <InputGroup mb="1rem">
        <Input
          type={showNewPassword ? 'text' : 'password'}
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          borderRadius="2rem"
          bg="transparent"
          borderColor="white"
          color="#3A9FB6"
        />
        <InputRightElement onClick={handleNewPasswordVisibility} cursor="pointer">
          {showNewPassword ? <ViewIcon color="#3A9FB6" /> : <ViewOffIcon color="#3A9FB6" />}
        </InputRightElement>
      </InputGroup>

      <InputGroup mb="1rem">
        <Input
          type={showConfirmPassword ? 'text' : 'password'}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          borderRadius="2rem"
          bg="transparent"
          borderColor="white"
          color="#3A9FB6"
        />
        <InputRightElement onClick={handleConfirmPasswordVisibility} cursor="pointer">
          {showConfirmPassword ? <ViewIcon color="#3A9FB6" /> : <ViewOffIcon color="#3A9FB6" />}
        </InputRightElement>
      </InputGroup>

      <Button
        isLoading={isLoading}
        isDisabled={!isPasswordMatching}
        bg="linear-gradient(145deg, #58D3D3, #3A9FB6)"
        color="#fff"
        width="full"
        mb="1rem"
        borderRadius="2rem"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        _hover={{ bg: "#3A9FB6" }}
        _active={{ bg: "#3A9FB6" }}
        onClick={handleResetPass}
      >
        Confirm
      </Button>
      {/* {!isPasswordMatching && (
        <Text color="red.500" mt="1rem">
          Passwords do not match.
        </Text>
      )} */}
    </Flex>
  );
}

export default OTPVerification

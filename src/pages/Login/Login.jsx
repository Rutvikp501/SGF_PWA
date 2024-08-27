import React from 'react';
import {
  Box,
  Flex,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  Checkbox,
  Button,
  Image,
  Link,
} from '@chakra-ui/react';
import { CheckIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import Logo from '../../assets/images/png/New-Logo-4-Small.png'
// import { Link } from 'react-router-dom';
function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Flex flexDir="column" p="1rem 1.5rem"  >
      <Text color="#3A9FB6" fontWeight={700} fontSize="3rem">
        Welcome
      </Text>
      <Text color="#1A1717" fontWeight={600} mb=".5rem">
        See what's next.
      </Text>
      <Image src={Logo} w={160} margin={'auto'} />
      <Text color="#1A1717" alignSelf="flex-start" mb="0.5rem">
        Your email:
      </Text>
      <Input placeholder="example@gmail.com" mb="1rem" borderRadius={'2rem'}/>
      <Text color="#1A1717" alignSelf="flex-start" mb="0.5rem">
        Password:
      </Text>
      <InputGroup mb="1rem">
        <Input
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          pr="4.5rem"
          borderRadius={'2rem'}
        />
        <InputRightElement onClick={handlePasswordVisibility} cursor="pointer">
          {showPassword ? <ViewIcon color="#3A9FB6" /> : <ViewOffIcon color="#3A9FB6" />}
        </InputRightElement>
      </InputGroup>
      <Checkbox colorScheme="teal" mb="1rem">
        Keep me logged in
      </Checkbox>
      <Button
        colorScheme="teal"
        width="full"
        mb="1rem"
        borderRadius={'2rem'}
        onClick={() => alert('Logging in...')}
      >
        Login
      </Button>
      <Link href="/forgetpass" color="#3A9FB6" alignSelf="flex-center">
        Forgot Password?
      </Link>
    </Flex>
    
  );
}

export default Login

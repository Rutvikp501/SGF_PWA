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
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import Logo from '../../assets/images/png/New-Logo-4-Small.png'
import { Link } from 'react-router-dom';
function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Flex flexDir={'column'} p={'1rem'}>
      <Text color={'#3A9FB6'} fontWeight={700} fontSize={'3rem'}>Welcome</Text>
      <Text color={'#1A1717'} fontWeight={600}>See what's next.</Text>
      <Image src={Logo} w={207} margin={'auto'}/>
      <Text color={'rgba'}>Email.</Text>
      <Input/>
      <Text>Password</Text>
      <Input/>
      <Button>Login</Button>
      <Link>Forget Password ?</Link>
    </Flex>
  );
}

export default Login

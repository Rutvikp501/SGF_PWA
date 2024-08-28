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
import { loginFn } from '../../services/API';
import { useNavigate } from 'react-router-dom';
function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email_id, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const [isLoading, setisLoading] = useState(false)
  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleLoginFn = async () => {
    setisLoading(true)
    try {
      const payload = { email_id, password }
      const res = await loginFn(payload)
      console.log(res);

      if (res?.success) {
        sessionStorage.setItem('token', res.data)
        setTimeout(() => {
          navigate('/home', { state: { email_id } });
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
      <Input placeholder="example@gmail.com" value={email_id}
        onChange={(e) => setEmail(e.target.value)}
        mb="1rem" borderRadius={'2rem'} />
      <Text color="#1A1717" alignSelf="flex-start" mb="0.5rem">
        Password:
      </Text>
      <InputGroup mb="1rem">
        <Input
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => setpassword(e.target.value)}
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
        isLoading={isLoading}
        colorScheme="teal"
        width="full"
        mb="1rem"
        borderRadius={'2rem'}
        onClick={handleLoginFn}
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

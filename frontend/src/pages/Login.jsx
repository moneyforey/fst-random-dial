import React, { useEffect, useState } from 'react';

import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { userloginApi } from '../store/user/user.actions';
import { useNavigate } from 'react-router-dom';
  
  const initUser = {
    email:'',
    password:''
  }
  export default function Login() {
    const [user,setUser] = useState(initUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {token,isAuth,message}  = useSelector((store)=>store.user);
    const {email,password} = user;
    const handleChange =(e)=>{
          const {name,value} = e.target;
          setUser({
            ...user,
            [name]:value
          })
    }
    const handleClick=()=>{
        console.log(user);
        dispatch(userloginApi(user));
    }

    useEffect(()=>{
        if(isAuth){
            navigate('/');
        }
    },[isAuth])

    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" name='email' value={email} onChange={handleChange} />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" name='password' value={password} onChange={handleChange} />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link href='/forgot' color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Button
                  onClick={handleClick}
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign in
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  If new user? <Link color={'blue.400'} href='/signup'>Sign up</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }
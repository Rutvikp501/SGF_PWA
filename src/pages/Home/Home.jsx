import React, { useEffect, useState } from 'react';
import {
  Box,
  Flex,
  Text,
  Button,
  Grid,
  GridItem,
  Spinner,
  useToast,
} from '@chakra-ui/react';
import axios from 'axios';
import { getDashboardLeadscount } from '../../services/API';
import { getSessionDecode } from '../../utils/comon';

const Home = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const toast = useToast();
  const [userData, setUserData] = useState(null);
useEffect(() => {
    const res = getDashboardLeadscount()
    const tokenData = getSessionDecode();
    if (tokenData) {
      setUserData(tokenData);
    }
    // const getSessionData = getSessionDecode()
    console.log(tokenData);
    
  }, [toast]);

  if (loading) {
    return (
      <Flex justify="center" align="center" height="100vh">
        <Spinner size="xl" />
      </Flex>
    );
  }

  return (
    <Box p={5}>
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        What do you want to do today?
      </Text>
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        <GridItem w="100%" h="100px" bg="blue.200" borderRadius="md" p={4}>
          <Text fontSize="2xl" fontWeight="bold">
            {data?.SeasonalLeads.numAllLeads || 0}
          </Text>
          <Text>SEASONAL LEADS</Text>
          <Text fontSize="sm">To wallet, bank or mobile number</Text>
        </GridItem>
        <GridItem w="100%" h="100px" bg="green.200" borderRadius="md" p={4}>
          <Text fontSize="2xl" fontWeight="bold">
            {data?.SeasonalLeads.numConvertedLeads || 0}
          </Text>
          <Text>Converted Leads</Text>
          <Text fontSize="sm">To wallet, bank or mobile number</Text>
        </GridItem>
        <GridItem w="100%" h="100px" bg="yellow.200" borderRadius="md" p={4}>
          <Text fontSize="2xl" fontWeight="bold">
            {data?.RegularLeads.numAllLeads || 0}
          </Text>
          <Text>REGULAR LEADS</Text>
          <Text fontSize="sm">To wallet, bank or mobile number</Text>
        </GridItem>
        <GridItem w="100%" h="100px" bg="green.200" borderRadius="md" p={4}>
          <Text fontSize="2xl" fontWeight="bold">
            {data?.RegularLeads.numConvertedLeads || 0}
          </Text>
          <Text>Converted Leads</Text>
          <Text fontSize="sm">To wallet, bank or mobile number</Text>
        </GridItem>
      </Grid>
      <Button
        mt={4}
        colorScheme="teal"
        size="lg"
        width="100%"
        borderRadius="md"
      >
        + Add Leads
      </Button>
    </Box>
  );
};

export default Home

import { Heading, VStack, Text } from '@chakra-ui/react';
import React from 'react'
import OrderItem from "../components/OrderItem";
import orderData from "../models/orders.json";


export const Home = () => {
    return (
        <VStack>
            <Heading>
                DivvyUp
            </Heading>
            <Text>
                The new way to pay
            </Text>
        </VStack>
    )
}

import { Heading, VStack, Text, Button } from '@chakra-ui/react';
import React from 'react'
import OrderItem from "./OrderItem";
import orderData from "../models/orders.json";
import { useParams } from 'react-router-dom';
import { NotFound } from './NotFound';

export const OrderSummary = () => {
    let params = useParams()

    let order = {
        _id: "",
        paid: true,
        restaurant: "",
        orderItems: [
            {
                name: "",
                cost: 0,
                quantity: 0
            }
        ]
    }

    for (let index = 0; index < orderData.length; index++) {
        const element = orderData[index];
        if (element._id === params.orderId) {
            order = element
            break
        }
    }

    if (order._id === "") {
        return <NotFound />
    }


    let total = 0
    order.orderItems.forEach(element => {
        total += element.cost
    });

    return (
        <VStack>
            <Heading>
                {order.restaurant}
            </Heading>
            {order.orderItems.map((item) => <OrderItem key={item.name} order={item} />)}
            <Text fontWeight={'bold'}>
                Total: ${total.toFixed(2)}
            </Text>
            <Button
                onClick={() => { console.log('Clicked!') }}
            >
                Pay Now
            </Button>
        </VStack>
    )
}

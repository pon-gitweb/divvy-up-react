import { Center, Heading, Spinner, VStack, Button } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import OrderItem from "./OrderItem";
import { useParams } from 'react-router-dom';
import { NoData } from './NoData';

const LoadingAnimation = <Center>
    <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl' />
</Center>;

type Order = {
    _id: string,
    business: string,
    date: string,
    items: OItem[]
}
type OItem = {
    name: string,
    cost: number,
    quantity: number
}

export const OrderSummary = () => {

    let order: Order = {
        _id: "",
        business: "",
        date: "",
        items: []
    }

    const [dataLoaded, setDataLoaded] = useState(false)
    const [timedOut, settimedOut] = useState(false)
    const [apiData, setApiData] = useState(order)

    let { orderId } = useParams()

    useEffect(() => {
        FetchApiData(setApiData, setDataLoaded, settimedOut, orderId);
        const timer = setTimeout(() => {
            if (!dataLoaded) {
                settimedOut(true)
            }
        }, 5000)
        return () => {
            clearTimeout(timer)
        }
    }, [dataLoaded, orderId])


    if (!timedOut) {
        return (LoadingAnimation)
    }
    else {
        if (!dataLoaded) {
            return (<NoData />)
        }
        else {
            let total = 0
            for (let index = 0; index < apiData.items.length; index++) {
                const element = apiData.items[index];
                total += element.cost
            }

            return (
                <VStack spacing={8}>
                    <Heading>{apiData.business}</Heading>
                    <VStack spacing={4}>
                        {apiData.items.map((order) => <OrderItem key={order.name} order={order} />)}
                    </VStack>
                    <Heading size={'md'}>Total: ${total.toFixed(2)}</Heading>
                    <Button size={'lg'}>
                        Pay Now
                    </Button>
                </VStack>
            )
        }
    }
}

function FetchApiData(
    setApiData: React.Dispatch<React.SetStateAction<Order>>,
    setDataLoaded: React.Dispatch<React.SetStateAction<boolean>>,
    settimedOut: React.Dispatch<React.SetStateAction<boolean>>,
    orderId: string | undefined) {

    fetch(`https://divvee-up.herokuapp.com/order/${orderId}`)
        .then(res => res.json())
        .then(res => {
            setApiData(res);
            setDataLoaded(true);
            settimedOut(true);
        })
        .catch(err => err);
}


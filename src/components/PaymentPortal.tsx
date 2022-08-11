import { Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { useLocation } from 'react-router-dom'
import { NotFound } from './NotFound'

type SummaryState = {
    totalBill: number
}

export const PaymentPortal = () => {
    const location = useLocation();

    if (location.state === null) {
        return (
            <NotFound />
        );
    }

    const { totalBill } = location.state as SummaryState
    console.log(totalBill)
    return (
        <VStack>
            <Heading>
                Payment Success!
            </Heading>
            <Text>You paid ${totalBill.toFixed(2)}</Text>
        </VStack>
    )
}
import { Button, Heading, VStack } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const NotFound = () => {
    let navigate = useNavigate()

    return (
        <VStack>
            <Heading>
                Oh dear... you seem to be lost
            </Heading>
            <Button onClick={() => { navigate('/') }}>
                Un-lose yaself
            </Button>
        </VStack>
    )
}
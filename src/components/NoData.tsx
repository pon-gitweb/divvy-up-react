import { Button, Heading, VStack } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const NoData = () => {
    let navigate = useNavigate()

    return (
        <VStack>
            <Heading>
                Nothing to see here...
            </Heading>
            <Button onClick={() => { navigate('/') }}>
                Go somewhere more exciting
            </Button>
        </VStack>
    )
}
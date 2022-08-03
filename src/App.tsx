import * as React from "react"
import {
  ChakraProvider,
  Box,
  Grid,
  Text,
  theme,
  VStack,
} from "@chakra-ui/react"
import orderData from "./models/order.json"
import OrderItem from "./components/OrderItem"
import Footer from "./components/Footer";
import { ColorModeSwitcher } from "./components/ColorModeSwitcher";

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <Main />
        </Grid>
        <Footer />
      </Box>
    </ChakraProvider>
  )
}

const Main = () => {
  let order = orderData

  if (!order.paid) {
    return (
      <VStack>
        {order.orderItems.map((item) => <OrderItem order={item} />)}
      </VStack>
    )
  }
  else {
    return (
      <Text>
        Nothing to see here :)
      </Text>
    )
  }
}

/* 
TODO Use this to put the color switcher feature somewhere
<ColorModeSwitcher justifySelf="flex-end" /> 
*/


import {
  Box, ChakraProvider, Grid,
  theme
} from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { ColorModeSwitcher } from "./components/ColorModeSwitcher";
import Footer from "./components/Footer";


export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign={'end'}>
        <ColorModeSwitcher />
      </Box>
      <Grid minH="100vh" alignItems={'center'} p={3}>
        <Outlet />
      </Grid>
      <Footer />
    </ChakraProvider >
  )
}





/* 
TODO Use this to put the color switcher feature somewhere
<ColorModeSwitcher justifySelf="flex-end" /> 
*/


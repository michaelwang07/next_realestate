import Head from 'next/head';
import {Box} from '@chakra-ui/react';

import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <Box maxWidth="1290px" m="auto">
        <Navbar />
        <main>
          {children}
        </main>
        <footer>
          Footer
        </footer>
    </Box>
  )
}

export default Layout;
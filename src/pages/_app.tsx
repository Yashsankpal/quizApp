import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { AuthProvider } from "../lib/auth";
export default function App({Component,pageProps}:AppProps) {
  return (
    <ChakraProvider>
      <AuthProvider>
        <Component {...pageProps}/>
      </AuthProvider>
    </ChakraProvider>
  )
}
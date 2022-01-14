import { AppProps } from 'next/app'
import {Header} from '../components/Header'
import {SessionProvider as NextAuthProvider} from 'next-auth/react'

import '../styles/global.scss'

//component é a pagina - ele é recarregado toda vez que o usuario troca de pagina.
function MyApp({ Component, pageProps }:AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
    <Header/>
     <Component {...pageProps} />
     </NextAuthProvider>
    )
}

export default MyApp

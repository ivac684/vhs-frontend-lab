// App.js
import { ThemeContextProvider } from '@/context/ThemeContext'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { SWRConfig } from 'swr'
import { useState } from 'react'
import Header from './header'
import Footer from './footer'
import styled from 'styled-components'

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1800px;
  width: 100%;
`;

const FooterWrapper = styled.div`
  margin-top: auto;
`;


//@ts-ignore
export const fetcher = (...args) =>
  //@ts-ignore
  fetch(...args).then(res => {
    if (res.ok) {
      return res.json()
    } else {
      throw new Error('404')
    }
  })

  export default function App({ Component, pageProps }: AppProps) {
    return (
      <SWRConfig value={{ fetcher }}>
        <ThemeContextProvider>
          <MainContainer>
            <ContentWrapper>
              <Component {...pageProps} />
            </ContentWrapper>
            <FooterWrapper>
              <Footer />
            </FooterWrapper>
          </MainContainer>
        </ThemeContextProvider>
      </SWRConfig>
    )
  }
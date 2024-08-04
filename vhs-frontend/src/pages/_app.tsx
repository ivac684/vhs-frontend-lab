import { ThemeContextProvider } from '@/context/ThemeContext';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import styled, { StyleSheetManager } from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  width: 100%;
`;

//@ts-ignore
export const fetcher = (...args) =>
  //@ts-ignore
  fetch(...args).then(res => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error('404');
    }
  });

const isPropValid = (prop: string) => {
  return !['available'].includes(prop);
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <StyleSheetManager shouldForwardProp={isPropValid}>
        <MainContainer>
          <ContentWrapper>
            <Component {...pageProps} />
          </ContentWrapper>
        </MainContainer>
      </StyleSheetManager>
    </ThemeContextProvider>
  );
}

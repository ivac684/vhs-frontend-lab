import React from 'react'
import { useThemeContext } from '@/context/ThemeContext'
import styled from 'styled-components'
import { ItemTitle, ItemInfo, ArrowBackIcon } from '@/styles/styledComponents'
import Header from '../components/Header/header'
import Footer from '../components/Footer/footer'
import Link from 'next/link'
import { MainContent, FormContainer } from '@/components/FormStyle'

export const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; 
`;

const RadioContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  text-align: center;
`;

const RadioButton = styled.label`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  input {
    margin-left: 10px;
    width: 15px;
    height: 15px;
  }
`;

const SectionTitle = styled.h2`
  margin-bottom: 10px;
  text-align: center;
  font-size: 20px;
`;


const SectionInfo = styled.p`
  margin-top: 20px;
  margin-bottom: 15px;
  text-align: center;
`;

const Settings = () => {
  const { setIsDark, isDark } = useThemeContext()

  const handleSetLightTheme = () => setIsDark(false)
  const handleSetDarkTheme = () => setIsDark(true)

  return (
    <SettingsContainer>
      <Header />
      <MainContent>
        <Link href="/">
          <ArrowBackIcon />
        </Link>
        <FormContainer>
          <SectionTitle>Theme</SectionTitle>
          <RadioContainer>
            <RadioButton>
              Light
              <input type="radio" name="theme" checked={!isDark} onChange={handleSetLightTheme} />
            </RadioButton>
            <RadioButton>
              Dark
              <input type="radio" name="theme" checked={isDark} onChange={handleSetDarkTheme} />
            </RadioButton>
          </RadioContainer>
        </FormContainer>
        <FormContainer>
          <SectionTitle>About This Page</SectionTitle>
          <SectionInfo>
            This is the admin panel for the VHS rental shop. Admins can add, edit, delete, and view all details of a movie.
            Depending on their preferences, the page theme can be changed (light or dark).
          </SectionInfo>
        </FormContainer>
        <FormContainer>
          <SectionTitle>Developer</SectionTitle>
          <SectionInfo>Designed and developed by Iva Burić</SectionInfo>
        </FormContainer>
      </MainContent>
      <Footer />
    </SettingsContainer>
  )
}

export default Settings

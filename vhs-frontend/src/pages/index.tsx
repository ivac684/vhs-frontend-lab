import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import Catalogue from './Catalogue/catalogue'
import Footer from '../components/Footer/footer'
import { PageContainer } from '@/styles/FormStyle'

interface HomeProps {
  searchQuery: string
}

export default function Home({ searchQuery }: HomeProps) {
  return (
    <>
      <Head>
        <title>Rent VHS</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <PageContainer>
        <Layout>
          <Catalogue searchQuery={searchQuery} />
        </Layout>
        <Footer />
        </PageContainer>
    </>
  )
}

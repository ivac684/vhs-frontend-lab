import React, { useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import { ArrowBackIcon, ItemTitle } from '@/styles/styledComponents'
import Link from 'next/link'
import Header from '../components/Header/header'
import Footer from '../components/Footer/footer'
import { ErrorMessage, FormContainer,FormField,FormHeader,Input,MainContent,PageContainer,SubmitButton,TextArea,
} from '@/components/FormStyle'

export default function AddMovie() {
  const [form, setForm] = useState<VHSForm>({
    title: '',
    description: '',
    genre: '',
    duration: 0,
    releasedAt: 0,
    rentalPrice: 0,
    rentalDuration: 0,
    quantity: 0,
    thumbnail: 'placeholder.png',
  })
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (
      !form.title ||
      !form.description ||
      !form.genre ||
      form.duration <= 0 ||
      form.releasedAt <= 0 ||
      form.rentalPrice <= 0 ||
      form.rentalDuration <= 0 ||
      form.quantity < 0
    ) {
      window.confirm('All fields except thumbnail are required and must be valid.')
      return
    }

    const formData = new FormData()
    for (const [key, value] of Object.entries(form)) {
      formData.append(key, value as string | Blob)
    }

    try {
      await axios.post('http://localhost:3000/api/vhs', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      router.push('/')
    } catch {
      setError('Failed to add movie')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, files } = e.target as HTMLInputElement

    if (type === 'file' && files) {
      const file = files[0] || 'placeholder.png'
      setForm(prevForm => ({
        ...prevForm,
        thumbnail: file,
      }))
    } else {
      setForm(prevForm => ({
        ...prevForm,
        [name]: value,
      }))
    }
  }

  return (
    <PageContainer>
      <Header />
      <MainContent>
        <Link href="/">
          <ArrowBackIcon />
        </Link>
        <FormContainer>
          <FormHeader>ADD NEW MOVIE</FormHeader>
          <form onSubmit={handleSubmit}>
            <FormField>
              <ItemTitle>Title</ItemTitle>
              <Input type="text" name="title" value={form.title} onChange={handleChange} placeholder="Title" required />
            </FormField>
            <FormField>
              <ItemTitle>Synopsis</ItemTitle>
              <TextArea
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Description"
                required
              />
            </FormField>
            <FormField>
              <ItemTitle>Genre</ItemTitle>
              <Input type="text" name="genre" value={form.genre} onChange={handleChange} placeholder="Genre" required />
            </FormField>
            <FormField>
              <ItemTitle>Duration</ItemTitle>
              <Input
                type="number"
                name="duration"
                value={form.duration}
                onChange={handleChange}
                placeholder="Duration (minutes)"
                required
              />
            </FormField>
            <FormField>
              <ItemTitle>Released in (year)</ItemTitle>
              <Input
                type="number"
                name="releasedAt"
                value={form.releasedAt}
                onChange={handleChange}
                placeholder="Released Year"
                required
              />
            </FormField>
            <FormField>
              <ItemTitle>Rent price</ItemTitle>
              <Input
                type="number"
                name="rentalPrice"
                value={form.rentalPrice}
                onChange={handleChange}
                placeholder="Rental Price"
                required
              />
            </FormField>
            <FormField>
              <ItemTitle>Rent duration</ItemTitle>
              <Input
                type="number"
                name="rentalDuration"
                value={form.rentalDuration}
                onChange={handleChange}
                placeholder="Rental Duration (days)"
                required
              />
            </FormField>
            <FormField>
              <ItemTitle>In stock</ItemTitle>
              <Input
                type="number"
                name="quantity"
                value={form.quantity}
                onChange={handleChange}
                placeholder="Quantity"
                required
              />
            </FormField>
            <FormField>
              <ItemTitle>Thumbnail</ItemTitle>
              <Input type="file" name="thumbnail" onChange={handleChange} />
              <div>
                <img
                  src={
                    typeof form.thumbnail === 'string'
                      ? `http://localhost:3000/${form.thumbnail}`
                      : form.thumbnail
                      ? URL.createObjectURL(form.thumbnail)
                      : '/placeholder.png'
                  }
                  alt="Thumbnail"
                  width={200}
                  height={130}
                />
              </div>
            </FormField>
            <SubmitButton type="submit">
              <b>SAVE</b>
            </SubmitButton>
            {error && <ErrorMessage>{error}</ErrorMessage>}
          </form>
        </FormContainer>
      </MainContent>
      <Footer />
    </PageContainer>
  )
}
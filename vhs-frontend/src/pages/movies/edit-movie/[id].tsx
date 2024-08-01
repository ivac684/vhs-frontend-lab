import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import {
  FormHeader,
  FormField,
  Input,
  TextArea,
  SubmitButton,
  ErrorMessage,
  PageContainer,
  MainContent,
  ItemTitle,
} from '../../../styles/styledComponents'
import FormContainer from '@/components/FormContainer'
import Link from 'next/link'
import Header from '@/pages/header'
import { handleChange } from '@/utils/handleChangeForm'
import Footer from '@/pages/footer'

export default function EditMovie() {
  const [form, setForm] = useState<VHSForm>({
    title: '',
    description: '',
    genre: '',
    duration: 0,
    releasedAt: 0,
    rentalPrice: 0,
    rentalDuration: 0,
    quantity: 0,
    thumbnail: '',
  })
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:3000/api/vhs/${id}`)
        .then(response => {
          setForm(response.data)
          setLoading(false)
        })
        .catch(() => {
          setError('Failed to load movie data')
          setLoading(false)
        })
    }
  }, [id])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await axios.patch(`http://localhost:3000/api/vhs/${id}`, form)
      router.push('/')
    } catch {
      setError('Failed to update movie')
    }
  }

  if (loading) return <p>Loading...</p>

  return (
    <PageContainer>
      <Header />
      <MainContent>
        <Link href="/">
          <ItemTitle>GO BACK</ItemTitle>
        </Link>
        <FormContainer>
          <FormHeader>EDIT MOVIE</FormHeader>
          <form onSubmit={handleSubmit}>
            <FormField>
              <ItemTitle>Title</ItemTitle>
              <Input
                type="text"
                name="title"
                value={form.title}
                onChange={e => handleChange({ e, setForm })}
                placeholder="Title"
              />
            </FormField>
            <FormField>
              <ItemTitle>Synopsis</ItemTitle>
              <TextArea
                name="description"
                value={form.description}
                onChange={e => handleChange({ e, setForm })}
                placeholder="Description"
              />
            </FormField>
            <FormField>
              <ItemTitle>Genre</ItemTitle>
              <Input
                type="text"
                name="genre"
                value={form.genre}
                onChange={e => handleChange({ e, setForm })}
                placeholder="Genre"
              />
            </FormField>
            <FormField>
              <ItemTitle>Duration</ItemTitle>
              <Input
                type="number"
                name="duration"
                value={form.duration}
                onChange={e => handleChange({ e, setForm })}
                placeholder="Duration (minutes)"
              />
            </FormField>
            <FormField>
              <ItemTitle>Released in (year)</ItemTitle>
              <Input
                type="number"
                name="releasedAt"
                value={form.releasedAt}
                onChange={e => handleChange({ e, setForm })}
                placeholder="Released Year"
              />
            </FormField>
            <FormField>
              <ItemTitle>Rent price</ItemTitle>
              <Input
                type="number"
                name="rentalPrice"
                value={form.rentalPrice}
                onChange={e => handleChange({ e, setForm })}
                placeholder="Rental Price"
              />
            </FormField>
            <FormField>
              <ItemTitle>Rent duration</ItemTitle>
              <Input
                type="number"
                name="rentalDuration"
                value={form.rentalDuration}
                onChange={e => handleChange({ e, setForm })}
                placeholder="Rental Duration (days)"
              />
            </FormField>
            <FormField>
              <ItemTitle>In stock</ItemTitle>
              <Input
                type="number"
                name="quantity"
                value={form.quantity}
                onChange={e => handleChange({ e, setForm })}
                placeholder="Quantity"
              />
            </FormField>
            <FormField>
              <ItemTitle>Thumbnail</ItemTitle>
              <Input
                type="text"
                name="thumbnail"
                value={form.thumbnail}
                onChange={e => handleChange({ e, setForm })}
                placeholder="Thumbnail URL (optional)"
              />
            </FormField>
            <SubmitButton type="submit">SAVE</SubmitButton>
            {error && <ErrorMessage>{error}</ErrorMessage>}
          </form>
        </FormContainer>
      </MainContent>
      <Footer/>
    </PageContainer>
  )
}

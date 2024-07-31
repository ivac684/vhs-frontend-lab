import { useState } from 'react'
import { useRouter } from 'next/router'
import { addMovie } from '@/utils/addMovie'
import {
  ErrorMessage,
  FormField,
  FormHeader,
  Input,
  ItemTitle,
  MainContent,
  PageContainer,
  SubmitButton,
  TextArea,
} from '@/styles/styledComponents'
import Header from '../header'
import Link from 'next/link'
import FormContainer from '@/components/FormContainer'
import { handleChange } from '@/utils/handleChangeForm'

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
    thumbnail: '',
  })
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await addMovie(form)
      router.push('/')
    } catch {
      setError('Failed to add movie')
    }
  }

  return (
    <PageContainer>
      <Header />
      <MainContent>
        <Link href="/">
          <ItemTitle>GO BACK</ItemTitle>
        </Link>
        <FormContainer>
          <FormHeader>ADD NEW MOVIE</FormHeader>
          <form onSubmit={handleSubmit}>
            <FormField>
              <Input
                type="text"
                name="title"
                value={form.title}
                onChange={e => handleChange({ e, setForm })}
                placeholder="Title"
                required
              />
            </FormField>
            <FormField>
              <TextArea
                name="description"
                value={form.description}
                onChange={e => handleChange({ e, setForm })}
                placeholder="Description"
                required
              />
            </FormField>
            <FormField>
              <Input
                type="text"
                name="genre"
                value={form.genre}
                onChange={e => handleChange({ e, setForm })}
                placeholder="Genre"
                required
              />
            </FormField>
            <FormField>
              <Input
                type="number"
                name="duration"
                value={form.duration}
                onChange={e => handleChange({ e, setForm })}
                placeholder="Duration (minutes)"
                required
              />
            </FormField>
            <FormField>
              <Input
                type="number"
                name="releasedAt"
                value={form.releasedAt}
                onChange={e => handleChange({ e, setForm })}
                placeholder="Released Year"
                required
              />
            </FormField>
            <FormField>
              <Input
                type="number"
                name="rentalPrice"
                value={form.rentalPrice}
                onChange={e => handleChange({ e, setForm })}
                placeholder="Rental Price"
                required
              />
            </FormField>
            <FormField>
              <Input
                type="number"
                name="rentalDuration"
                value={form.rentalDuration}
                onChange={e => handleChange({ e, setForm })}
                placeholder="Rental Duration (days)"
                required
              />
            </FormField>
            <FormField>
              <Input
                type="number"
                name="quantity"
                value={form.quantity}
                onChange={e => handleChange({ e, setForm })}
                placeholder="Quantity"
                required
              />
            </FormField>
            <FormField>
              <Input
                type="text"
                name="thumbnail"
                value={form.thumbnail}
                onChange={e => handleChange({ e, setForm })}
                placeholder="Thumbnail URL (optional)"
              />
            </FormField>
            <SubmitButton type="submit">
              <b>SAVE</b>
            </SubmitButton>
            {error && <ErrorMessage>{error}</ErrorMessage>}
          </form>
        </FormContainer>
      </MainContent>
    </PageContainer>
  )
}

import { useState } from 'react'
import { useRouter } from 'next/router'
import { addMovie } from '@/utils/addMovie'
import { ArrowBackIcon, ItemTitle } from '@/styles/styledComponents'
import Link from 'next/link'
import { handleChange } from '@/utils/handleChangeForm'
import Header from '../components/Header/header'
import Footer from '../components/Footer/footer'
import ImageUploader from '@/components/ImageUploader'
import { ErrorMessage, FormContainer, FormField, FormHeader, Input, MainContent, PageContainer, SubmitButton, TextArea } from '@/components/FormStyle'

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
      setError('All fields except thumbnail are required and must be valid.');
      return;
    }
    try {
      await addMovie(form)
      router.push('/')
    } catch {
      setError('Failed to add movie')
    }
  }

  function handleImageSelect(file: File | null): void {
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setForm(prevForm => ({
          ...prevForm,
          thumbnail: reader.result as string,
        }))
      }
      reader.readAsDataURL(file)
    } else {
      setForm(prevForm => ({
        ...prevForm,
        thumbnail: '',
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
            <ItemTitle>Synopsis</ItemTitle>
              <TextArea
                name="description"
                value={form.description}
                onChange={e => handleChange({ e, setForm })}
                placeholder="Description"
                required
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
                required
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
                required
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
                required
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
                required
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
                required
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
              <ImageUploader onImageSelect={handleImageSelect} initialImage={form.thumbnail} />
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

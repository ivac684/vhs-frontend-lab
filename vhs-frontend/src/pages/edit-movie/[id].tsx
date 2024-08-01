import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
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
  ArrowBackIcon,
} from '../../styles/styledComponents';
import FormContainer from '@/components/FormContainer';
import Link from 'next/link';
import Header from '@/pages/header';
import Footer from '@/pages/footer';
import UploadAndDisplayImage from '@/components/uploadImage';

type VHSForm = {
  title: string;
  description: string;
  genre: string;
  duration: number;
  releasedAt: number;
  rentalPrice: number;
  rentalDuration: number;
  quantity: number;
  thumbnail: string | File;
};

const EditMovie = () => {
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
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:3000/api/vhs/${id}`)
        .then(response => {
          setForm(response.data);
          setLoading(false);
        })
        .catch(() => {
          setError('Failed to load movie data');
          setLoading(false);
        });
    }
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    for (const [key, value] of Object.entries(form)) {
      formData.append(key, value as string | Blob);
    }
    try {
      await axios.patch(`http://localhost:3000/api/vhs/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      router.push('/');
    } catch {
      setError('Failed to update movie');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prevForm => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleImageSelect = (file: File | null) => {
    setForm(prevForm => ({
      ...prevForm,
      thumbnail: file || '',
    }));
  };

  if (loading) return <p>Loading...</p>;

  return (
    <PageContainer>
      <Header />
      <MainContent>
        <Link href="/">
          <ArrowBackIcon />
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
                onChange={handleChange}
                placeholder="Title"
              />
            </FormField>
            <FormField>
              <ItemTitle>Synopsis</ItemTitle>
              <TextArea
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Description"
              />
            </FormField>
            <FormField>
              <ItemTitle>Genre</ItemTitle>
              <Input
                type="text"
                name="genre"
                value={form.genre}
                onChange={handleChange}
                placeholder="Genre"
              />
            </FormField>
            <FormField>
              <ItemTitle>Duration</ItemTitle>
              <Input
                type="number"
                name="duration"
                value={form.duration}
                onChange={handleChange}
                placeholder="Duration (minutes)"
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
              />
            </FormField>
            <FormField>
              <ItemTitle>Thumbnail</ItemTitle>
              <UploadAndDisplayImage onImageSelect={handleImageSelect} />
            </FormField>
            <SubmitButton type="submit">SAVE</SubmitButton>
            {error && <ErrorMessage>{error}</ErrorMessage>}
          </form>
        </FormContainer>
      </MainContent>
      <Footer />
    </PageContainer>
  );
};

export default EditMovie;

import { Dispatch, SetStateAction } from 'react';

interface HandleChangeParams {
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
  setForm: Dispatch<SetStateAction<VHSForm>>;
}
export function handleChange({ e, setForm }: { e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, setForm: React.Dispatch<React.SetStateAction<VHSForm>> }) {
  const { name, value, type } = e.target;

  setForm(prevForm => ({
    ...prevForm,
    [name]: type === 'number' ? parseFloat(value) : value,
  }));
}

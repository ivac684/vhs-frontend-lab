import { Dispatch, SetStateAction } from 'react';

interface HandleChangeParams {
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
  setForm: Dispatch<SetStateAction<VHSForm>>;
}

export const handleChange = ({ e, setForm }: HandleChangeParams) => {
  const { name, value } = e.target;
  setForm(prevForm => ({ ...prevForm, [name]: value }));
};

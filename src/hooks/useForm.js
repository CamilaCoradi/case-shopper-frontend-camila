import { useState } from "react";

const useForm = (initialState) => {
  const [form, setForm] = useState(initialState);

  const handleForm = (event) => {
    const { value, name } = event.target;
    setForm({ ...form, [name]: value });
  };

  const clear = () => {
    setForm(initialState);
  };

  return [form, handleForm, clear];
};

export default useForm;

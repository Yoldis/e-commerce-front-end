import { ChangeEvent, useState } from "react"




export const useForm = <T, >(initialState:T) => {
  const [isDirty, setIsDirty] = useState(false);
  const [form, setForm] = useState(initialState);

  const onChangeInput = (e:ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const name = e.target.name;
    setForm({...form, [name]:value});
    setIsDirty(true)
  }

  const onResetInput = () => {
    setForm(initialState);
  }

  return {
    ...form,
    form,
    isDirty,
    setIsDirty,
    setForm,
    onChangeInput,
    onResetInput
  }
}

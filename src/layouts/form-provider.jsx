import { FormspreeProvider } from "@formspree/react";
import RegisterForm from "../components/form/register-form";

export default function FormProvider() {
  return (
    <FormspreeProvider project="2519561271884381488">
      <RegisterForm />
    </FormspreeProvider>
  )
}

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RegisterForm from '../components/form/RegisterForm';

export default function FormLayout() {
  return (
    <>
      <ToastContainer />
      <RegisterForm  />
    </>
  )
}

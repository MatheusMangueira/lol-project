import * as yup from "yup";

 export const schema = yup.object().shape({
    name: yup.string().min(2, 'Your name must be at least 5 characters long').required('Name is mandatory'),
    email: yup.string().email('Invalid email').required('Email is mandatory'),
    password: yup.string().min(8, 'At least 8 characters').required('Password is mandatory'),
  })
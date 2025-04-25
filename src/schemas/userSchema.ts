import * as yup from 'yup';

export const generalInformationSchema = yup.object({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().email('Invalid email address').required('Email is required'),
  phoneNumber: yup.string().required('Phone number is required'),
  name: yup.string().required('Required'),
  age: yup.number().min(10, 'Age must be at least 10').required('Age is required'),
});

export const loginSchema = yup.object({
  email: yup.string().email('Invalid email address').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

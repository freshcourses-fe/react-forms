import * as yup from 'yup';

export const SIGN_UP_CHEMA = yup.object({
  login: yup.string().matches(/[\w!@#$%^]{4,16}/).required(),
  password: yup
    .string()
    .matches(/^[A-Z][a-zA-Z0-9]{7,32}$/)
    .required(),
  passwordConfirm: yup.string().oneOf([yup.ref('password')]),
  email: yup.string().email().required(),
  isSubscribed: yup.boolean().required(),
});

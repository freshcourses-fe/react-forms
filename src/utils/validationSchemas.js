import * as yup from 'yup';

export const SIGN_UP_CHEMA = yup.object({
  login: yup.string().matches(/[\w!@#$%^]{4,16}/, 'Login must be 4 - 16 characters').required(),
  password: yup
    .string()
    .matches(/^[A-Z][a-zA-Z0-9]{7,32}$/, 'password must be 8 - 32 characters long')
    .required(),
  passwordConfirm: yup.string().oneOf([yup.ref('password')], 'password must match'),
  email: yup.string().email().required(),
  isSubscribed: yup.boolean().required(),
});

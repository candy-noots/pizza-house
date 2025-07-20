import React from 'react';

import { Form, Formik } from 'formik';
import { Box, Button, TextField } from '@mui/material';
import * as Yup from 'yup';

const phoneRegExp = /^(\+?38)?0\d{9}$/;

const validationSchema = Yup.object().shape({
  phone: Yup.string()
  .matches(phoneRegExp, 'Будь-ласка, перевірте коректність номера телефону')
    .required('Поле має бути заповнене'),
  password: Yup.string().required('Пароль не має бути порожнім'),
});

const LoginForm = () => {
  const handleFormSubmit = (values: any) => {
    console.log(values);
  }
  return (
    <Formik
      initialValues={{ phone: +380, password: '' }}
      validationSchema={validationSchema}
      onSubmit={handleFormSubmit}
    >
      {({
        handleSubmit,
        touched,
        errors,
        handleChange,
        handleBlur
      }) => (
        <Form onSubmit={handleSubmit}>
          <TextField
            label="Номер телефону"
            variant="outlined"
            name="phone"
            fullWidth
            required
            onChange={handleChange}
            onBlur={handleBlur}
            error={Boolean(touched.phone && errors.phone)}
            helperText={touched.phone && errors.phone}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Пароль"
            variant="outlined"
            name="password"
            type="password"
            fullWidth
            required
            onChange={handleChange}
            onBlur={handleBlur}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
            sx={{ mb: 2 }}
          />
          <Box mt={1}>
            <Button color="inherit">Зареєструватися</Button>
            <Button color="inherit">Забули пароль?</Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};


export default LoginForm;

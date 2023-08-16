export const validate = (values: any) => {
  const errors: any = {};
  if (!values) {
    errors.email = 'Lütfen e-posta giriniz.';
  }
  if (values.email.length > 6) {
    errors.email = 'E-posta en fazla 6 karakter olabilir.';
  }

  return errors;
};

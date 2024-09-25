import { Form, Formik } from "formik";
import ContainerForm from "src/components/ContainerForm";
import InputField from "src/components/InputField";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import * as Yup from "yup";
import ButtonApp from "src/components/Button";
import { validateCPF, validatePhone } from "validations-br";
import { useState } from "react";
import { IUser } from "src/types/IUser";
import useSignUpWithEmailAndPassword from "src/hooks/useSignUpWithEmailAndPassword";
import ToastComponent from "src/components/Toast";
import { Spinner } from "react-bootstrap";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordRepeat, setShowPasswordRepeat] = useState(false);
  const { signUp, loading, error } = useSignUpWithEmailAndPassword();

  const initialValues = {
    name: "",
    lastname: "",
    email: "",
    cpf: "",
    cellphone: "",
    password: "",
    passwordRepeat: "",
  };

  const schema = Yup.object({
    name: Yup.string()
      .required("Обов'язкове поле")
      .min(3, "Введіть дійсне ім'я"),
    lastname: Yup.string()
      .required("Обов'язкове поле")
      .min(3, "Введіть дійсне прізвище"),
    email: Yup.string()
      .required("Обов'язкове поле")
      .email("Введіть дійсну електронну адресу"),
    cpf: Yup.string()
      .required("Обов'язкове поле")
      .test("is-cpf", "Введіть дійсний CPF", (value) => validateCPF(value)),
    cellphone: Yup.string()
      .required("Обов'язкове поле")
      .test("is-cellphone", "Введіть дійсний номер", (value) =>
        validatePhone(value)
      ),
    password: Yup.string()
      .required("Обов'язкове поле")
      .min(6, "Має містити не менше 6 символів"),
    passwordRepeat: Yup.string()
      .required("Обов'язкове поле")
      .oneOf([Yup.ref("password"), ""], "Введені паролі не збігаються"),
  });

  const onSubmit = (values: IUser) => {
    signUp(values);
  };

  const iconProps = {
    className: "icon-eye",
    size: "25",
  };

  return (
    <>
      <ContainerForm
        title="Ми раді вітати вас тут!"
        subtitle="Завершіть вашу реєстрацію:"
        
      >
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={schema}
        >
          {(formik) => (
            <Form>
             <InputField
  name="name"
  id="floatingName"
  label="Ім'я:"
  type="text"
  placeholder="Введіть своє ім'я"
/>
<InputField
  name="lastname"
  id="floatingLastName"
  label="Прізвище:"
  type="text"
  placeholder="Введіть своє прізвище"
/>
<InputField
  name="email"
  id="floatingEmail"
  label="Електронна пошта:"
  type="text"
  placeholder="Введіть свою електронну пошту"
/>
              <InputField
                name="cpf"
                id="floatingCPF"
                label="CPF:"
                type="text"
                placeholder="Введіть свій CPF"
              />
              <InputField
                name="cellphone"
                id="floatingCell"
                label="Мобільний телефон:"
                type="text"
                placeholder="Введіть свій мобільний телефон"
              />
              <InputField
                name="password"
                id="floatingPassword"
                label="Пароль:"
                type={showPassword ? "text" : "password"}
                placeholder="Створіть пароль"
              >
                {!showPassword && (
                  <IoMdEye
                    {...iconProps}
                    onClick={() => setShowPassword(!showPassword)}
                  />
                )}
                {showPassword && (
                  <IoMdEyeOff
                    {...iconProps}
                    onClick={() => setShowPassword(!showPassword)}
                  />
                )}
              </InputField>
              <InputField
                name="passwordRepeat"
                id="floatingPasswordRepeat"
                label="Підтвердьте свій пароль:"
                type={showPasswordRepeat ? "text" : "password"}
                placeholder="Підтвердьте свій пароль"
              >
                {!showPasswordRepeat && (
                  <IoMdEye
                    {...iconProps}
                    onClick={() => setShowPasswordRepeat(!showPasswordRepeat)}
                  />
                )}
                {showPasswordRepeat && (
                  <IoMdEyeOff
                    {...iconProps}
                    onClick={() => setShowPasswordRepeat(!showPasswordRepeat)}
                  />
                )}
              </InputField>
              <ButtonApp
                type="submit"
                disabled={!formik.isValid || formik.isSubmitting}
              >
                {loading ? (
                  <Spinner as="span" animation="border" size="sm" />
                ) : (
                  "Створити акаунт"
                )}
              </ButtonApp>
            </Form>
          )}
        </Formik>
      </ContainerForm>
      {error && (
        <ToastComponent title="Помилка" status="помилка" message={error.message} />
      )}
    </>
  );
};

export default Register;

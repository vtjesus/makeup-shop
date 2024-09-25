import { Form, Formik } from "formik";
import { Link } from "react-router-dom";
import ButtonApp from "src/components/Button";
import ContainerForm from "src/components/ContainerForm";
import InputField from "src/components/InputField";
import * as Yup from "yup";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import "./styles.css";
import { useState } from "react";
import { Spinner } from "react-bootstrap";
import { IFormLogin } from "src/types/IFormLogin";
import useLogin from "src/hooks/useLogin";
import ToastComponent from "src/components/Toast";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { login, loading, error } = useLogin();

  const iconProps = {
    className: "icon-eye",
    size: "25",
    onClick: () => setShowPassword(!showPassword),
  };

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Ви повинні заповнити електронну адресу")
      .email("Введіть дійсну електронну адресу."),
    password: Yup.string()
      .required("Введіть свій пароль")
      .min(6, "Невірний пароль"),
  });

  const onSubmit = async (values: IFormLogin) => {
    login(values);
  };

  return (
    <>
      <ContainerForm
        title="Привіт! авторизуватися ;)"
        subtitle="Увійдіть за допомогою електронної пошти та пароля:"
      >
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {(formik) => (
            <Form>
              <InputField
                name="email"
                id="floatingEmail"
                label="Email:"
                type="text"
                placeholder="Введіть адресу електронної пошти"
              />
              <InputField
                name="password"
                id="floatingPassword"
                label="Пароль:"
                type={showPassword ? "text" : "password"}
                placeholder="Введіть свій пароль"
              >
                {!showPassword && <IoMdEye {...iconProps} />}
                {showPassword && <IoMdEyeOff {...iconProps} />}
              </InputField>
              <div className="text-center mt-3">
                <ButtonApp
                  type="submit"
                  disabled={!formik.isValid || formik.isSubmitting}
                >
                  {loading ? (
                    <Spinner as="span" animation="border" size="sm" />
                  ) : (
                    "Щоб увійти"
                  )}
                </ButtonApp>
                <p className="mb-0 mt-3">У вас ще немає облікового запису?</p>
                <Link to="/cadastro">Натисніть тут і зареєструйтеся</Link>
              </div>
            </Form>
          )}
        </Formik>
      </ContainerForm>
      {error && (
        <ToastComponent title="Помилка" status="error" message={error.message} />
      )}
    </>
  );
};

export default Login;

import { Form, Formik } from "formik";
import InputField from "src/components/InputField";
import { IUser } from "src/types/IUser";
import { useAppSelector } from "src/types/hooks";
import "./styles.css";
import { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import ButtonApp from "src/components/Button";
import useEditData from "src/hooks/useEditData";
import { Spinner } from "react-bootstrap";
import ToastComponent from "src/components/Toast";

const ClientData = () => {
  const user = useAppSelector((state) => state.user);
  const [showPassword, setShowPassword] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const { editProfile, status, isLoading } = useEditData();

  const initialValues = {
    name: user.name,
    lastname: user.lastname,
    email: user.email,
    cpf: user.cpf,
    cellphone: user.cellphone,
    password: user.password,
  };

  const onSubmit = (values: IUser) => {
    editProfile(values);
    setDisabled(true);
  };

  const iconProps = {
    className: "icon-eye",
    size: "25",
  };

  return (
    <div className="container-xxl mt-5 mx-auto d-flex flex-column align-items-center">
      <h3 className="mb-5">Мої дані</h3>
      <main className="w-75 main">
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {(formik) => (
            <Form>
              <InputField
                name="name"
                id="floatingName"
                label="Ім'я:"
                type="text"
                placeholder="Введіть своє ім'я"
                disabled={disabled}
              />
              <InputField
                name="lastname"
                id="floatingLastName"
                label="прізвище:"
                type="text"
                placeholder="Введіть своє прізвище"
                disabled={disabled}
              />
              <InputField
                name="email"
                id="floatingEmail"
                label="Електронна пошта:"
                type="text"
                placeholder="Введіть адресу електронної пошти"
                disabled={disabled}
              />
              <InputField
                name="cpf"
                id="floatingCPF"
                label="CPF:"
                type="text"
                placeholder="Введіть свій CPF"
                disabled={disabled}
              />
              <InputField
                name="cellphone"
                id="floatingCell"
                label="Мобільний телефон:"
                type="text"
                placeholder="Введіть свій мобільний телефон"
                disabled={disabled}
              />
              <InputField
                name="password"
                id="floatingPassword"
                label="Пароль:"
                type={showPassword ? "text" : "password"}
                placeholder="Створіть пароль"
                disabled={disabled}
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
              <div className="d-flex gap-5">
                <ButtonApp type="button" onClick={() => setDisabled(false)}>
                Редагувати
                </ButtonApp>
                <ButtonApp type="submit" disabled={!formik.isValid}>
                  {isLoading ? (
                    <Spinner as="span" animation="border" size="sm" />
                  ) : (
                    "Для оновлення"
                  )}
                </ButtonApp>
              </div>
            </Form>
          )}
        </Formik>
      </main>
      {status && (
        <ToastComponent
          title={status.type}
          status={status.type}
          message={status.message}
        />
      )}
    </div>
  );
};

export default ClientData;

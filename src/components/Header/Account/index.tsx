import { Dropdown } from "react-bootstrap";
import { Heart } from "react-bootstrap-icons";
import ButtonIcon from "src/components/ButtonIcon";
import CartOffCanvas from "src/components/CartOffCanvas";
import LinkDropDown from "../LinkDropDown";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import ButtonApp from "src/components/Button";
import { useAppSelector } from "src/types/hooks";
import useLogout from "src/hooks/useLogout";

const Account = () => {
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.user);
  const isLoggedIn = Object.keys(user).length > 0;
  const { logout } = useLogout();

  const handleSignOut = () => {
    logout();
  };

  return (
    <div className="d-flex align-items-center">
      <Dropdown>
        <Dropdown.Toggle id="dropdown-basic" className="btn-login">
          <div className="d-flex flex-column align-items-start">
            {isLoggedIn ? (
              <p className="m-0">
                Привіт, {user.name}! <br />Мій акаунт
              </p>
            ) : (
              <p className="m-0">
                Привіт! Доступ <br /> до облікового запису

              </p>
            )}
          </div>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <div className="d-flex flex-column shadow-sm rounded-1 container-dropdown-account">
            <Dropdown.Item
              as={"span"}
              className={`d-flex justify-content-center 
              ${isLoggedIn && "order-last"}`}
            >
              {isLoggedIn ? (
                <ButtonApp onClick={handleSignOut} btnLogin>
                  Щоб вийти
                </ButtonApp>
              ) : (
                <ButtonApp onClick={() => navigate("/login")} btnLogin>
                  Щоб увійти
                </ButtonApp>
              )}
            </Dropdown.Item>

            {!isLoggedIn && (
              <div className="d-flex flex-column container-new-account">
               Немає облікового запису?
                <Dropdown.Item as={"span"}>
                  <LinkDropDown to="/cadastro" type="new-account">
                  Створіть його тут
                  </LinkDropDown>
                </Dropdown.Item>
              </div>
            )}

            <Dropdown.Item as={"span"}>
              <LinkDropDown
                to="/meus-pedidos"
                type="account"
                isLoggedIn={isLoggedIn}
              >
                Мої замовлення
              </LinkDropDown>
            </Dropdown.Item>
            <Dropdown.Item as={"span"}>
              <LinkDropDown to="/meus-dados" type="account">
              Мої дані
              </LinkDropDown>
            </Dropdown.Item>
            <Dropdown.Item as={"span"}>
              <LinkDropDown
                to="/favoritos"
                type="account"
                isLoggedIn={isLoggedIn}
              >
               Мої улюблені
              </LinkDropDown>
            </Dropdown.Item>
          </div>
        </Dropdown.Menu>
      </Dropdown>
      <ButtonIcon onClick={() => navigate("/favoritos")}>
        <Heart size={25} />
      </ButtonIcon>
      <CartOffCanvas />
    </div>
  );
};

export default Account;

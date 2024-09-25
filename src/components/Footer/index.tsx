import { Col, Row } from "react-bootstrap";
import { HiChevronRight, HiOutlineMail } from "react-icons/hi";
import { BsFillTelephoneFill } from "react-icons/bs";
import "./styles.css";
import { Link } from "react-router-dom";
import { useAppSelector } from "src/types/hooks";

const Footer = () => {
  const { face, eyes, mouth } = useAppSelector((state) => state.categories);
  const allCategoriesToShow = [];
  allCategoriesToShow.push(...face, ...eyes, ...mouth);

  return (
    <div className="w-100 container-footer">
      <footer className="footer py-5 mx-auto">
        <Row
          className="justify-content-center mx-auto"
          style={{ width: "85%" }}
        >
          <Col sm={6} md={3}>
            <p className="fs-3 footer-title">Наші продукти</p>
            <ul className="footer-list footer-list-products">
              {allCategoriesToShow.map((category, index) => (
                <span key={index}>
                  <li>
                    <Link
                      to={`/categorias/${category.id}`}
                      className="link-categories-footer d-flex align-items-center"
                    >
                      <HiChevronRight size="20" />
                      {category.name}
                    </Link>
                  </li>
                </span>
              ))}
            </ul>
          </Col>
          <Col sm={6} md={3}>
            <p className="fs-3 footer-title">Мій акаунт</p>
            <ul className="footer-list">
              <li>Персональні дані</li>
              <li>Мої адреси</li>
              <li>Змінити пароль</li>
              <li>Мої замовлення</li>
            </ul>
          </Col>
          <Col sm={6} md={3}>
            <p className="fs-3 footer-title">Без розуму від краси</p>
            <ul className="footer-list">
              <li>Посібники</li>
              <li>Підручники</li>
              <li>Знаменитості</li>
              <li>Відео</li>
            </ul>
          </Col>
          <Col sm={6} md={3}>
            <p className="fs-3 footer-title">Ми в мережах:</p>
            <ul className="footer-list">
              <li>
                <Link
                  to="/"
                  className="link-categories-footer d-flex align-items-center"
                >
                  <HiChevronRight size="20" />
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="link-categories-footer d-flex align-items-center"
                >
                  <HiChevronRight size="20" />
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="link-categories-footer d-flex align-items-center"
                >
                  <HiChevronRight size="20" />
                  Instagram
                </Link>
              </li>
            </ul>
            <p className="fs-3 footer-title">Зв'яжіться</p>
            <ul className="footer-list container-contact">
              <li>
                <a href="" className="d-flex align-items-center gap-1">
                  <HiOutlineMail size="20" /> Email
                </a>
              </li>
              <li>
                <a href="" className="d-flex align-items-center gap-1">
                  <BsFillTelephoneFill size="20" />
                  Телефон
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </footer>
    </div>
  );
};

export default Footer;

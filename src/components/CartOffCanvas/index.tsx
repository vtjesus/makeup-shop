import { Offcanvas } from "react-bootstrap";
import ButtonIcon from "../ButtonIcon";
import { Cart2 } from "react-bootstrap-icons";
import Product from "../Product";
import { openOrClose } from "src/store/reducers/offcanvasCart";
import { IProduct } from "src/types/IProduct";
import "./styles.css";
import { useAppDispatch, useAppSelector } from "src/types/hooks";
import ButtonApp from "../Button";
import { resetCart } from "src/store/reducers/cart";
import { useState } from "react";
import ToastComponent from "../Toast";

const CartOffCanvas = () => {
  const dispatch = useAppDispatch();
  const [showToast, setShowToast] = useState(false);

  const handleOpen = () => {
    dispatch(openOrClose());
  };

  const finalizePurchase = () => {
    dispatch(openOrClose());
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
      dispatch(resetCart());
    }, 5000);
  };

  const { productsOnCart, isOpen, total } = useAppSelector((state) => {
    let total = 0;
    const productsOnCart = state.cart.reduce<IProduct[]>(
      (items, itemOnCart) => {
        const product = state.items.find((item) => item.id === itemOnCart.id);
        if (product) {
          total += product.price * itemOnCart.quantity;
          items.push({
            ...product,
            quantity: itemOnCart.quantity,
          });
        }
        return items;
      },
      []
    );

    return {
      productsOnCart,
      isOpen: state.offcanvasCart,
      total,
    };
  });

  return (
    <>
      <ButtonIcon onClick={handleOpen}>
        <Cart2 size={25} />
      </ButtonIcon>

      <Offcanvas show={isOpen} onHide={handleOpen} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Кошик для покупок</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="d-flex flex-column justify-content-between">
          {productsOnCart.map((product) => (
            <Product key={product.id} {...product} isOnCart />
          ))}
          <div className="d-flex flex-column">
            <p className="fw-bold fs-5">Total: {total.toFixed(2)} </p>
            <ButtonApp onClick={finalizePurchase}>Завершити покупку</ButtonApp>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      {showToast && productsOnCart.length > 0 && (
        <ToastComponent
          title="Успіх!"
          status="success"
          message="Покупку успішно завершено"
        />
      )}
      {showToast && productsOnCart.length === 0 && (
        <ToastComponent
          title="Помилка!"
          status="error"
          message="У кошику немає товарів."
        />
      )}
    </>
  );
};

export default CartOffCanvas;

import { Link } from "react-router-dom";

const Orders = () => {
  return (
    <div className="container-xxl mt-5 mx-auto d-flex flex-column align-items-center">
      <h3>Мої замовлення</h3>
      <main className="w-100 text-center fs-5">
        <p className="mb-0">У вас ще немає замовлень.</p>
        <Link to="/" style={{ textDecoration: "none" }}>
        Повернутися на головну сторінку
        </Link>
      </main>
    </div>
  );
};

export default Orders;

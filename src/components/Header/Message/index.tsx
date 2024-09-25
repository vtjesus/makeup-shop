import { Truck } from "react-bootstrap-icons";
import "./styles.css";

const Message = () => {
  return (
    <div className="d-flex justify-content-center align-items-center gap-2 container-message">
      <Truck size="30" />
      <p className="m-0">Безкоштовна доставка для покупок на суму понад 299 реалів</p>
    </div>
  );
};

export default Message;

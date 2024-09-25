import { Row } from "react-bootstrap";
import CardBenefits from "./CardBenefits";
import { Truck, Gift, CreditCard, PersonCircle } from "react-bootstrap-icons";

const ContainerCardsBenefits = () => {
  return (
    <Row className="w-100 mx-auto my-5 justify-content-center gap-3">
      <CardBenefits
        title="Безкоштовна доставка"
        text="Ми пропонуємо безкоштовну доставку для всіх покупок на суму понад 299 реалів
        вся країна. Насолоджуйтесь."
        Icon={Truck}
      />
      <CardBenefits
        title="Безкоштовний подарунок на всі покупки"
        text="Всі наші клієнти отримують спеціальні пригощання на покупки на будь-яку суму."
        Icon={Gift}
      />

      <CardBenefits
        title="Безпечна оплата"
        text="Наш веб-сайт має високий рівень безпеки та зручність оплати."
        Icon={CreditCard}
      />

      <CardBenefits
        title="Якісний сервіс"
        text="Наша команда готова відповісти на всі ваші запитання."
        Icon={PersonCircle}
      />
    </Row>
  );
};

export default ContainerCardsBenefits;

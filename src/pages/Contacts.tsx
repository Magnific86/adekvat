import { Typography } from "antd";
import { useAppContext } from "../MyContext";

export const Contacts = () => {
  const { Title, Paragraph: P, Text } = Typography;
  const { handleToggleDrawer } = useAppContext();

  return (
    <div className="mainContacts">
      <span onClick={handleToggleDrawer}>
        Оставить заявку или связаться с нами
      </span>
      <div className="contactInfo">
        <div>
          <Title level={2}>Контакты:</Title>
          <P style={{ fontSize: 18 }} copyable>
            ООО «НПФ Адекват», Московская. обл. Пушкинский р. Пос. Челюскинский
            ул. 1-я тракторная 1/24, Тел.: 8(910) 402-25-50, E-mail:
            4022550@mail.ru, adekvat-avto@mail.ru
          </P>
        </div>
        <div>
          <Title level={2}>Реквизиты:</Title>
          <P style={{ fontSize: 20 }} copyable>
            ИНН: 5038032843
          </P>
          <P style={{ fontSize: 20 }} copyable>
            КПП: 503801001
          </P>
          <P style={{ fontSize: 20 }} copyable>
            Р/с: 40702810304100140922
          </P>
        </div>
        <div>
          <Title level={2}>Банк:</Title>
          <P style={{ fontSize: 18 }} copyable>
            Пушкинский филиал Банка "Возрождение" (ОАО) г.Пушкино М.О. К/с:
            30101810900000000181 БИК: 44525181
          </P>
        </div>
      </div>
    </div>
  );
};

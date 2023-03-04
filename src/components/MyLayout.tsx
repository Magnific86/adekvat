import { FC, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { navCategories } from "../utils/navCategories";
import { Layout, Menu, Typography } from "antd";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
  HomeTwoTone,
} from "@ant-design/icons";
import type { MenuProps } from "antd";

const { Header, Content, Footer, Sider } = Layout;

const siderItems: MenuProps["items"] = [
  "ГЛАВНАЯ",
  "ГДЕ КУПИТЬ",
  "ЭПОКСИДНЫЕ КОМПАУНДЫ",
  "АНАЭРОБНЫЕ КЛЕИ, АНАЭРОБНЫЙ ГЕРМЕТИК",
  "ПРОПИТЫВАЮЩИЕ КОМПОЗИЦИИ",
  "ЦИАНАНКРИЛАТНЫЕ КЛЕИ",
  "КЛЕИ УЛЬТРОФИОЛЕТОВОГО ОТВЕРЖДЕНИЯ",
  "ЭЛЕКТРОИЗОЛЯЦИОННЫЕ ЗАЛИВОЧНЫЕ КЛЕИ-КОМПАУНДЫ",
  "КОНСТРУКЦИОННЫЕ АКРИЛОВЫЕ КЛЕИ",
  "СОСТАВ ДЛЯ РЕМОНТА ПАРОПРОВОДОВ",
  "КЛЕИ РАСПЛАВЫ",
  "ВОДНОДИСПЕРСИОННЫЕ АКРИЛОВЫЕ КЛЕИ",
  "КЛЕИ АКРИЛОВЫЕ ОРГАНОРАСТВОРИМЫЕ",
  "ВСЕ О СКЛЕИВАНИИ",
  "КОНТАКТЫ",
].map((el) => {
  return {
    key: el,
    label: el,
  };
});

const { Title, Paragraph: P, Text } = Typography;

export const MyLayout: FC = () => {
  return (
    <>
      <div className="container">
        <Sider
          theme="light"
          style={{
            alignSelf: "self-start",
            background: "var(--footer-bg)",
            width: "15%",
          }}
        >
          <h1 style={{ padding: 20, color: "#fff", textAlign: "center" }}>
            Навигация
          </h1>
          <Menu mode="inline" items={siderItems} />
        </Sider>
        <div className="contentWrapper">
          <header>
            <nav>
              {navCategories.map(({ title, path }) => (
                <NavLink to={path}>{title}</NavLink>
              ))}
            </nav>
          </header>
          <Outlet />
          <footer>
            <Typography>
              <P style={{ fontSize: 20, padding: 20, textAlign: "center" }}>
                Контакты: ООО «НПФ Адекват», Московская. обл. Пушкинский р. Пос.
                Челюскинский ул. 1-я тракторная 1/24, Тел.: (910) 402-25-50,
                E-mail: 4022550@mail.ru , adekvat-avto@mail.ru © 2016 Контактол.
                Все права защищены.
              </P>
            </Typography>
          </footer>
        </div>
        <div className="rightCollection"></div>
      </div>
    </>
  );
};

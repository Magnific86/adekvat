import { FC, useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { navCategories } from "../utils/navCategories";
import { Image, Layout, Menu, Typography } from "antd";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
  HomeTwoTone,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { siderCetegories } from "../utils/siderItems";
import { useInView } from "react-intersection-observer";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { FreeMode, Navigation } from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";
import { useWindowSize } from "../utils/useWindowsSize";
import headerLogo from "../utils/headerLogo.png";

const { Header, Content, Footer, Sider } = Layout;

const siderItems: MenuProps["items"] = siderCetegories.map((el) => {
  return {
    key: el,
    label: el,
  };
});

const { Title, Paragraph: P, Text } = Typography;

export const MyLayout: FC = () => {
  const { ref, inView } = useInView();
  const { ref: secRef, inView: secInView } = useInView();
  const { width: w } = useWindowSize();
  // useEffect(() => {
  //   const prev = document.getElementsByClassName(
  //     "swiper-button-prev"
  //   )[2] as HTMLElement;
  //   secInView
  //     ? prev.setAttribute("style", "opacity:0")
  //     : prev.setAttribute("style", "opcity:1");
  // }, [secInView]);

  return (
    <>
      {!inView && (
        <nav className="stickyNav">
          <a href="#">Наверх</a>
          {navCategories.map(({ title, path }) => (
            <NavLink key={path} to={path}>
              {title}
            </NavLink>
          ))}
        </nav>
      )}
      <div className="container">
        <div className="contentWrapper">
          <header ref={ref}>
            <div className="upperHeader">
              <div className="headerLogo">
                <NavLink to="/">
                  <Image
                    preview={false}
                    src={headerLogo}
                    width={w > 576 ? 80 : 40}
                    height={w > 576 ? 60 : 30}
                    alt="logo"
                  />
                </NavLink>
              </div>
              {inView && (
                <nav className="staticNav">
                  {navCategories.map(({ title, path }) => (
                    <NavLink key={path} to={path}>
                      {title}
                    </NavLink>
                  ))}
                </nav>
              )}
            </div>
            <Swiper
              slidesPerView={w > 1300 ? 8 : w > 1100 ? 6 : w > 800 ? 4 : 3}
              spaceBetween={30}
              freeMode={true}
              navigation={true}
              modules={[FreeMode, Navigation]}
              className="swiperKleiKindsList"
            >
              {siderCetegories.map((el, index) => (
                <SwiperSlide key={el}>
                  <p
                    ref={index === 0 ? secRef : null}
                    style={{ color: "black" }}
                  >
                    {el}
                  </p>
                </SwiperSlide>
              ))}
            </Swiper>
          </header>
          <Outlet />
        </div>
      </div>
      <footer>
        <Typography>
          <P
            style={{
              fontSize: w > 768 ? 20 : 12,
              padding: w > 768 ? 20 : 8,
              textAlign: "center",
            }}
          >
            Контакты: ООО «НПФ Адекват», Московская. обл. Пушкинский р. Пос.
            Челюскинский ул. 1-я тракторная 1/24, Тел.: (910) 402-25-50, E-mail:
            4022550@mail.ru , adekvat-avto@mail.ru © 2016 Контактол. Все права
            защищены.
          </P>
        </Typography>
      </footer>
    </>
  );
};

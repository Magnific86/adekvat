import { useEffect } from "react";
import { Image } from "antd";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { FreeMode, Navigation } from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";
import { useInView } from "react-intersection-observer";
import { useWindowSize } from "../utils/useWindowsSize";
import { kleiCollection } from "../utils/kleiCollection";
import { swiperImages } from "../utils/swiperImages";

export const MainPage = () => {
  const { ref, inView } = useInView();

  const collection = kleiCollection.map((el, index) => (
    <div key={index} className="eachKlei">
      <h4>
        Сюда по-хорошему какое-то описание добавить, примерно столько текста,
        чтобы прям на главной странице было понятно, о чем речь
      </h4>
      <Image width={160} height={300} src={el} />
      <p>клей {index}</p>
    </div>
  ));
  const { width: w } = useWindowSize();

  useEffect(() => {
    const prev = document.getElementsByClassName(
      "swiper-button-prev"
    )[0] as HTMLElement;
    inView
      ? prev.setAttribute("style", "opacity:0")
      : prev.setAttribute("style", "opcity:1");
  }, [inView]);

  return (
    <div className="mainPage">
      <Swiper
        slidesPerView={w > 1300 ? 5 : w > 900 ? 3 : w < 576 && 2}
        spaceBetween={30}
        freeMode={true}
        navigation={true}
        modules={[FreeMode, Navigation]}
        className="swiperCategoriesList"
      >
        {swiperImages.map((el, index) => (
          <SwiperSlide key={index}>
            <div className="eachSideImage">
              <Image src={el} width={200} height={200} />
              <p ref={index === 0 ? ref : null}>картинка {index}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="collection">{collection}</div>
    </div>
  );
};

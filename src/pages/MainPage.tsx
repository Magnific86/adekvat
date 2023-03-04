import { useEffect } from "react";
import { Image } from "antd";
import k1 from "../utils/klei/k1.jpg";
import k2 from "../utils/klei/k2.jpg";
import k3 from "../utils/klei/k3.jpg";
import k4 from "../utils/klei/k4.jpg";
import k5 from "../utils/klei/k5.jpg";
import k6 from "../utils/klei/k6.jpg";
import k7 from "../utils/klei/k7.jpg";
import k8 from "../utils/klei/k8.jpg";
import k9 from "../utils/klei/k9.jpg";
import k10 from "../utils/klei/k10.jpg";
import k11 from "../utils/klei/k11.jpg";
import r1 from "../utils/rightImages/r1.png";
import r2 from "../utils/rightImages/r2.png";
import r3 from "../utils/rightImages/r3.png";
import r4 from "../utils/rightImages/r4.png";
import r5 from "../utils/rightImages/r5.png";
import r6 from "../utils/rightImages/r6.png";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { FreeMode, Navigation, Mousewheel } from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";
import { useInView } from "react-intersection-observer";
import { useWindowSize } from "../utils/useWindowsSize";

export const MainPage = () => {
  const { ref, inView } = useInView();
  const rightSideImages = [r1, r2, r3, r4, r5, r6];
  const collection = [k1, k2, k3, k4, k5, k6, k7, k8, k9, k10, k11].map(
    (el, index) => (
      <div key={index} className="eachKlei">
        <Image width={200} height={400} src={el} />
        <p>клей {index}</p>
      </div>
    )
  );
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
        // slidesPerView={w > 1400 ? 6 : w > 900 ? 4 : w < 675 && 3}
        slidesPerView={5}
        spaceBetween={30}
        freeMode={true}
        navigation={true}
        modules={[FreeMode, Navigation]}
        className="swiperCategoriesList"
      >
        {rightSideImages.map((el, index) => (
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

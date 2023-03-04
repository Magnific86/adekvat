import { Route, Routes } from "react-router-dom";
import { MyLayout } from "./components/MyLayout";
import { AllAbout } from "./pages/AllAbout";
import { Contacts } from "./pages/Contacts";
import { MainPage } from "./pages/MainPage";
import { NotFound } from "./pages/NotFound";
import { WhereToBuy } from "./pages/WhereToBuy";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MyLayout />}>
        <Route index element={<MainPage />} />
        <Route path="wheretobuy" element={<WhereToBuy />} />
        <Route path="allabout" element={<AllAbout />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

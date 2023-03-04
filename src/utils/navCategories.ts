interface INavCategory {
  title: string;
  path: string;
}
export const navCategories: INavCategory[] = [
  {
    title: "Главная",
    path: "",
  },
  {
    title: "Где купить",
    path: "wheretobuy",
  },
  {
    title: "Все о склеивании",
    path: "allabout",
  },
  {
    title: "Контакты",
    path: "contacts",
  },
];

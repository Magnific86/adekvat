import { Image, Table } from "antd";
import { ReactNode } from "react";
import pasker from "../utils/partnersData/pasker.gif";
import { useWindowSize } from "../utils/useWindowsSize";

const dataSource = [
  {
    key: "1",
    title: "ООО 'ПАСКЕР ЛТД'",
    site: "http://www.pasker.ru",
    address: "г. Москва Черницынский пр. 3",
    logo: <Image preview={false} src={pasker} width={80} height={40} />,
  },
  {
    key: "2",
    title: "ООО 'Восход-К Авто'",
    site: "http://www.pasker.ru",
    address: "г. Москва Черницынский пр. 3",
    logo: <Image preview={false} src={pasker} width={80} height={40} />,
  },
  {
    key: "3",
    title: "Торговый дом 'Воронеж-оил'",
    site: "http://www.voil.ru",
    address: "г. Воронеж, ул. 45-Стрелковой Дивизии, 253 Б",
    logo: <Image preview={false} src={pasker} width={80} height={40} />,
  },
  {
    key: "4",
    title: "ООО 'Восход-К Авто'",
    site: "http://www.pasker.ru",
    address: "г. Москва Черницынский пр. 3",
    logo: <Image preview={false} src={pasker} width={80} height={40} />,
  },
  {
    key: "5",
    title: "ООО 'Восход-К Авто'",
    site: "http://www.pasker.ru",
    address: "г. Москва Черницынский пр. 3",
    logo: <Image preview={false} src={pasker} width={80} height={40} />,
  },
  {
    key: "6",
    title: "ООО 'Восход-К Авто'",
    site: "http://www.pasker.ru",
    address: "г. Москва Черницынский пр. 3",
    logo: <Image preview={false} src={pasker} width={80} height={40} />,
  },
  {
    key: "7",
    title: "ООО 'Восход-К Авто'",
    site: "http://www.pasker.ru",
    address: "г. Москва Черницынский пр. 3",
    logo: <Image preview={false} src={pasker} width={80} height={40} />,
  },
];

export const WhereToBuy = () => {
  const { width: w } = useWindowSize();
  const columns = [
    {
      title: "Название",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Сайт",
      dataIndex: "site",
      key: "site",
      render: (site: string) => (
        <a target="_blank" href={site}>
          {site}
        </a>
      ),
    },
    {
      title: "Адрес",
      dataIndex: "address",
      key: "address",
      filters: [
        {
          text: "Москва",
          value: "Москва",
        },
        {
          text: "Воронеж",
          value: "Воронеж",
        },
      ],
      onFilter: (value: string, record: any) => {
        console.log("value", value);
        console.log("record.address", record.address);

        return record.address.includes(value);
      },
    },
    {
      title: "Лого",
      dataIndex: "logo",
      key: "key",
      render: (logo: ReactNode) => {
        if (w > 600) {
          return logo;
        }
      },
    },
  ];

  const adaptiveCols = [];
  columns.forEach((el, index) => {
    if (w > 600) {
      adaptiveCols.push(el);
    }
    if (w < 600 && index !== columns.length - 1) {
      adaptiveCols.push(el);
    }
  });

  return <Table dataSource={dataSource} columns={adaptiveCols} />;
};

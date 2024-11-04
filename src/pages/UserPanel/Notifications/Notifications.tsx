import { useTranslation } from "react-i18next";
import Layout from "../../../Layouts/UserLayouts";
import Title from "../../../components/modules/Title/Title";
import DataTable from "react-data-table-component";

const Notifications = () => {
  const { i18n, t } = useTranslation();

  const columns = [
    {
      name: t("notification.sms"),
      selector: (row: { title: string }) => row.title,
    },
    {
      name: t("notification.date"),
      selector: (row: { date: string }) => row.date,
    },
    {
      name: t("notification.time"),
      selector: (row: { time: string }) => row.time,
    },
  ];

  const data = [
    {
      id: 1,
      title: "صبخ بخیر عزیز دل",
      date: "1403/05/01",
      time: "07:00",
    },
    {
      id: 2,
      title: "شب بخیر جون دل",
      date: "1403/05/01",
      time: "21:00",
    },
    {
      id: 3,
      title: "صبخ بخیر عزیز دل",
      date: "1403/05/01",
      time: "07:00",
    },
    {
      id: 4,
      title: "شب بخیر جون دل",
      date: "1403/05/01",
      time: "21:00",
    },
    {
      id: 5,
      title: "صبخ بخیر عزیز دل",
      date: "1403/05/01",
      time: "07:00",
    },
    {
      id: 6,
      title: "شب بخیر جون دل",
      date: "1403/05/01",
      time: "21:00",
    },
    {
      id: 7,
      title: "صبخ بخیر عزیز دل",
      date: "1403/05/01",
      time: "07:00",
    },
    {
      id: 8,
      title: "شب بخیر جون دل",
      date: "1403/05/01",
      time: "21:00",
    },
  ];
  return (
    <Layout>
      <Title title={t("notification.title")} />
      <DataTable
        responsive
        progressComponent={".... "}
        pagination
        columns={columns}
        data={data}
      />
      <p className={`${i18n.language === 'fa' ? 'sm:text-right': 'sm:text-left'} mt-5 text-center text-xs xs:text-base sm:mt-0 `}>
        {t("notification.description")}
      </p>
    </Layout>
  );
};

export default Notifications;

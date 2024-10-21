import Layout from "../../Layouts/UserLayouts";
import Title from "../../components/modules/Title/Title";
import DataTable from "react-data-table-component";

const Notifications = () => {
  const columns = [
    {
      name: "پیغام",
      selector: (row) => row.title,
    },
    {
      name: "تاریخ",
      selector: (row) => row.date,
    },
    {
      name: "ساعت",
      selector: (row) => row.time,
    },
  ];

  const data = [
    {
      id: 1,
      title: "صبخ بخیر عزیز دل",
      date: "1403/05/01",
      time:'07:00'
    },
    {
      id: 2,
      title: "شب بخیر جون دل",
      date: "1403/05/01",
      time:'21:00'

    },
    {
      id: 3,
      title: "صبخ بخیر عزیز دل",
      date: "1403/05/01",
      time:'07:00'
    },
    {
      id: 4,
      title: "شب بخیر جون دل",
      date: "1403/05/01",
      time:'21:00'

    },
    {
      id: 5,
      title: "صبخ بخیر عزیز دل",
      date: "1403/05/01",
      time:'07:00'
    },
    {
      id: 6,
      title: "شب بخیر جون دل",
      date: "1403/05/01",
      time:'21:00'

    },
    {
      id: 7,
      title: "صبخ بخیر عزیز دل",
      date: "1403/05/01",
      time:'07:00'
    },
    {
      id: 8,
      title: "شب بخیر جون دل",
      date: "1403/05/01",
      time:'21:00'

    },
  ];
  return (
    <Layout>
      <Title title="اعلانات" />
      <DataTable
        responsive
        progressComponent={".... "}
        pagination
        columns={columns}
        data={data}
      />
      <p className="xs:text-base text-xs text-center mt-5 sm:mt-0 sm:text-right">بعد از پایان دوره رژیم اعلان های شما حذف خواهند شد.</p>
    </Layout>
  );
};

export default Notifications;

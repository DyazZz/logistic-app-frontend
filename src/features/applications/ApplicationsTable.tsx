import {
  Button,
  RenderRowActionsProps,
  Spin,
  Table,
  withTableActions,
  withTableSorting,
} from "@gravity-ui/uikit";
import { Application, ApplicationStatus } from "../../CustomTypes";
import useApplications from "../../hooks/useApplications";
import Error from "../../ui/Error";
import { useAppSelector } from "../../hooks";
import { formatDate, formatStatus } from "../../services/helpers";
import { getDisplayHidden } from "../settings/settingsSlice";
import TableDropdown from "../../ui/TableDropdown";
import { getSortType } from "../search/searchSlice";

const GravityTable = withTableSorting(withTableActions(Table<Application>));

const columns = [
  {
    id: "date",
    name: "Дата",
    template: (item: Application) => {
      return formatDate(item.date);
    },
  },
  { id: "companyName", name: "Компания" },
  { id: "driverName", name: "Перевозчик" },
  { id: "driverPhone", name: "Телефон" },
  { id: "comment", name: "Комментарий" },
  {
    id: "status",
    name: "Статус",
    template: (item: Application) => {
      return formatStatus(item.status);
    },
    width: 100,
    className: "text-center",
  },
  {
    id: "ATI",
    name: "ATI-код",
    template: (item: Application) => {
      return (
        <Button
          href={`https://ati.su/firms/${item.ATI}/info`}
          target="_blank"
          view="outlined-utility"
        >
          {item.ATI}
        </Button>
      );
    },
  },
];

const RowAction = ({ item }: RenderRowActionsProps<Application>) => {
  return <TableDropdown application={item} />;
};

function AppplicationsTable() {
  const { getApplicationsBySearchQuery } = useApplications();
  const isCompeleteHidden = useAppSelector(getDisplayHidden);
  const { isLoading, isError, error } = getApplicationsBySearchQuery;
  const sortType = useAppSelector(getSortType);

  let { data: applications } = getApplicationsBySearchQuery;

  if (isLoading)
    return (
      <div className="mt-24 flex justify-center">
        <Spin />
      </div>
    );

  if (isError || !applications)
    return <Error errMessage="Ошибка. Не удалось загрузить заявки." />;

  if (isCompeleteHidden) {
    applications = applications.filter(
      (application) => application.status !== ApplicationStatus.COMPLETED
    );
  }

  if (applications.length === 0) {
    return <p>Заявки не найдены. {error?.message}</p>;
  }

  return (
    <div>
      <h2 className="text-lg font-bold mb-8">Всего ({applications.length})</h2>
      <GravityTable
        className="application-table"
        data={sortType === "desc" ? [...applications].reverse() : applications}
        columns={columns}
        renderRowActions={RowAction}
      />
    </div>
  );
}

export default AppplicationsTable;

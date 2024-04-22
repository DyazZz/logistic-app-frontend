import { useAppSelector } from "../../hooks";
import useApplications from "../../hooks/useApplications";
import { Spin } from "@gravity-ui/uikit";
import ApplicationTableRow from "./ApplicationTableRow";
import Error from "../../ui/Error";
import { ApplicationStatus } from "../../CustomTypes";
import { getDisplayHidden } from "../settings/settingsSlice";

type Props = {
  children: React.ReactNode;
};

const Table = ({ children }: Props) => {
  return <table>{children}</table>;
};

const TableHead = ({ children }: Props) => {
  return (
    <thead className="bg-blue-500 rounded-xl text-white block">
      <tr className="px-4 py-4 mb-4 grid gap-4 grid-cols-[0.5fr_2fr_0.8fr_1.2fr_1.2fr_4fr_1.3fr_2fr_0.6fr] items-center">
        {children}
      </tr>
    </thead>
  );
};

const TableBody = ({ children }: Props) => {
  return <tbody className="flex flex-col px-4">{children}</tbody>;
};

function ApplicationTable() {
  const { getApplicationsBySearchQuery } = useApplications();
  const {
    data: applications,
    isLoading,
    isError,
    error,
  } = getApplicationsBySearchQuery;

  const isApplicationsHidden = useAppSelector(getDisplayHidden);

  if (isLoading)
    return (
      <div className="mt-24 flex justify-center">
        <Spin />
      </div>
    );

  if (isError || !applications)
    return <Error errMessage="Ошибка. Не удалось загрузить заявки 🤣" />;

  if (applications.length === 0) {
    return <p>Заявки не найдены. {error}</p>;
  }
  return (
    <>
      <p className="py-4 text-lg border-b-2">Всего: {applications.length}</p>
      <Table>
        <TableHead>
          <th>№</th>
          <th>Дата</th>
          <th>Компания</th>
          <th>Перевозчик</th>
          <th>Телефон</th>
          <th>Комментарий</th>
          <th>Статус</th>
          <th>ATI-код</th>
        </TableHead>
        <TableBody>
          {!isApplicationsHidden
            ? applications.map((application, index) => (
                <ApplicationTableRow
                  index={index + 1}
                  key={application.id}
                  application={application}
                />
              ))
            : applications
                .filter(
                  (application) =>
                    application.status !== ApplicationStatus.COMPLETED
                )
                .map((application, index) => (
                  <ApplicationTableRow
                    index={index + 1}
                    key={application.id}
                    application={application}
                  />
                ))}
        </TableBody>
      </Table>
    </>
  );
}

export default ApplicationTable;

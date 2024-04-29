import { Select } from "@gravity-ui/uikit";
import { useAppSelector } from "../../hooks";
import { getFilterColumnName } from "./searchSlice";

type Props = {
  setFilter: React.Dispatch<React.SetStateAction<string>>;
};

function ApplicationFilter({ setFilter }: Props) {
  const columName = useAppSelector(getFilterColumnName);
  return (
    <Select
      defaultValue={[columName]}
      onUpdate={(value) => {
        setFilter(value[0]);
      }}
    >
      <Select.Option value="">-</Select.Option>
      <Select.Option value="date">Дата</Select.Option>
      <Select.Option value="companyName">Компания</Select.Option>
      <Select.Option value="driverName">Перевозчик</Select.Option>
      <Select.Option value="status">Статус</Select.Option>
      <Select.Option value="comment">Комментарий</Select.Option>
      <Select.Option value="ATI">ATI</Select.Option>
    </Select>
  );
}

export default ApplicationFilter;

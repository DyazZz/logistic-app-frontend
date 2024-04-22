import { Select } from "@gravity-ui/uikit";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getSortValue, setSortValue } from "../search/searchSlice";

function ApplicationFilter() {
  const sortValue = useAppSelector(getSortValue);
  const dispatch = useAppDispatch();

  return (
    <div className="flex gap-1 items-center">
      <p>Сортировать</p>
      <Select
        defaultValue={[sortValue]}
        onUpdate={(value) => {
          dispatch(setSortValue(value[0])); //этот селект возвращает данные в виде массива
          //в моем случае значение только одно, поэтому достаем первый элемент
        }}
      >
        <Select.Option value="id">-</Select.Option>
        <Select.Option value="date">Дата</Select.Option>
        <Select.Option value="companyName">Компания</Select.Option>
        <Select.Option value="driverName">Перевозчик</Select.Option>
        <Select.Option value="status">Статус</Select.Option>
        <Select.Option value="ATI">ATI-код</Select.Option>
      </Select>
    </div>
  );
}

export default ApplicationFilter;

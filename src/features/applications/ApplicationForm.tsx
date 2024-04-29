import FormRow from "../../ui/FormRow";
import { useForm } from "react-hook-form";
import { Button } from "@gravity-ui/uikit";
import { numberOnlyRegEx, phoneNumberRegEx } from "../../services/regExes";
import { Application, ApplicationStatus } from "../../CustomTypes";
import { useAppDispatch } from "../../hooks";
import {
  setIsCreatingApplication,
  setEditingApplication,
} from "./applicationSlice";

type FormProps = {
  application?: Application;
  onSubmit?: (data: Application) => void;
  type: "create" | "update";
};

function ApplicationForm({
  application,
  onSubmit: submitForm,
  type,
}: FormProps) {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Application>();

  const inputStyle = "border-2 w-[40rem] px-2 py-1 rounded-md";

  return (
    <form
      onSubmit={handleSubmit((data: Application) => {
        data.status = Number(data.status);
        submitForm(data);
      })}
      className="flex flex-col gap-2 items-end w-fit px-10 py-8 bg-white h-fit"
    >
      <input hidden defaultValue={application?.id} {...register("id")} />
      {type === "create" && (
        <input hidden value={Date.now()} {...register("date")} />
      )}

      <FormRow label="Номер заявки" errorMessage={errors.companyName?.message}>
        <input
          className={inputStyle}
          defaultValue={application?.applicationUID}
          type="text"
          {...register("applicationUID", {
            required: "Заполните это поле",
          })}
        />
      </FormRow>

      <FormRow
        label="Название компании"
        errorMessage={errors.companyName?.message}
      >
        <input
          className={inputStyle}
          defaultValue={application?.companyName}
          type="text"
          {...register("companyName", {
            required: "Заполните это поле",
          })}
        />
      </FormRow>
      <FormRow
        label="ФИО перевозчика"
        errorMessage={errors.driverName?.message}
      >
        <input
          className={inputStyle}
          defaultValue={application?.driverName}
          type="text"
          {...register("driverName", { required: "Заполните это поле" })}
        />
      </FormRow>
      <FormRow
        label="Телефон перевозчика"
        errorMessage={errors.driverPhone?.message}
      >
        <input
          className={inputStyle}
          defaultValue={application?.driverPhone}
          type="text"
          {...register("driverPhone", {
            required: "Заполните это поле",
            pattern: {
              value: phoneNumberRegEx,
              message: "Номер телефона введен неправильно",
            },
          })}
        />
      </FormRow>
      <FormRow label="Комментарий">
        <textarea
          className={inputStyle}
          defaultValue={application?.comment}
          {...register("comment")}
        />
      </FormRow>
      {type === "update" && (
        <FormRow label="Статус 2" errorMessage={errors.status?.message}>
          <select
            defaultValue={application?.status}
            className={inputStyle}
            {...register("status", { required: "Заполните это поле" })}
          >
            <option disabled value={ApplicationStatus.NEW}>
              Новое
            </option>
            <option value={ApplicationStatus.IN_PROGRESS}>В работе</option>
            <option value={ApplicationStatus.COMPLETED}>Завершено</option>
          </select>
        </FormRow>
      )}

      <FormRow label="ATI-код" errorMessage={errors.ATI?.message}>
        <input
          className={inputStyle}
          defaultValue={application?.ATI}
          type="number"
          {...register("ATI", {
            required: "Заполните это поле",
            pattern: {
              value: numberOnlyRegEx,
              message: "Код должен состоять только из чисел",
            },
          })}
        />
      </FormRow>

      <div className="flex gap-4">
        <Button
          view="outlined-info"
          type="submit"
          className="mt-8"
          disabled={isSubmitting}
        >
          Применить
        </Button>
        <Button
          view="outlined-danger"
          className="mt-8"
          onClick={() => {
            if (type === "create") dispatch(setIsCreatingApplication(false));
            if (type === "update") dispatch(setEditingApplication(null));
          }}
          disabled={isSubmitting}
        >
          Отмена
        </Button>
      </div>
    </form>
  );
}

export default ApplicationForm;

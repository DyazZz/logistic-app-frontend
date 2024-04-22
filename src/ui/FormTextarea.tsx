type TextareaProps = {
  defaultValue: string | number;
  label?: string;
  required?: boolean;
  name?: string;
};

function FormTextarea({
  defaultValue,
  label,
  required = true,
  name,
}: TextareaProps) {
  return (
    <label className="flex gap-4 items-center">
      <span>{label}</span>
      <textarea
        className="border-2 w-[40rem] px-2 py-1"
        required={required}
        defaultValue={defaultValue}
        name={name}
      />
    </label>
  );
}

export default FormTextarea;

type InputProps = {
  defaultValue: string | number;
  type: React.HTMLInputTypeAttribute;
  label?: string;
  required?: boolean;
  name?: string;
};

function FormInput({ defaultValue, type, required = true, name }: InputProps) {
  return (
    <input
      name={name}
      required={required}
      type={type}
      defaultValue={defaultValue}
      className="border-2 w-[40rem] px-2 py-1 rounded-md"
    />
  );
}

export default FormInput;

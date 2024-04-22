import { ReactNode } from "react";

type RowProps = {
  children: ReactNode;
  label: string;
  errorMessage?: string;
};

function FormRow({ children, label, errorMessage }: RowProps) {
  return (
    <label className="flex gap-4 items-center">
      <span>{label}</span>
      <div className="flex flex-col gap-2">
        {children}
        {errorMessage && (
          <p className="px-4 py-1 bg-red-100 rounded-md w-fit">
            {errorMessage}
          </p>
        )}
      </div>
    </label>
  );
}

export default FormRow;

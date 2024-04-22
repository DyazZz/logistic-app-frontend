import { ReactNode } from "react";

type RowItemProps = {
  data?: string | number | React.ReactNode;
  center?: boolean;
  children?: ReactNode;
  className?: string;
};

const ApplicatinonTableItem = ({
  data,
  center,
  children,
  className,
}: RowItemProps) => {
  return (
    <td className={`py-2 ${center && "text-center"} ${className}`}>
      {data} {children}
    </td>
  );
};

export default ApplicatinonTableItem;

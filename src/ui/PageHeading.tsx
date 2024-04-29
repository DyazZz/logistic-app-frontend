import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

function PageHeading({ children }: Props) {
  return <h1 className="text-3xl font-semibold py-5">{children}</h1>;
}

export default PageHeading;

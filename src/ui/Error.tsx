type Props = {
  errMessage: string;
};

function Error({ errMessage }: Props) {
  return (
    <div className="text-lg py-12 px-24 w-fit mx-auto border-2 rounded-md mt-12 border-red-200 text-red-400">
      <p>{errMessage}</p>
    </div>
  );
}

export default Error;

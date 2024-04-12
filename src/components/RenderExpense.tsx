import Expense from "@/types/ExpenseType";

type ExpenseComponentProps = {
  data: Expense[];
};

const MapExpense = ({ data }: ExpenseComponentProps) => {
  return (
    <>
      {data.map(({ id, name, cost }) => (
        <div key={id} className="border border-sky-500 mb-4 w-1/4">
          <h1>{name}</h1>
          <div>{cost}</div>
        </div>
      ))}
    </>
  );
};

export default MapExpense;

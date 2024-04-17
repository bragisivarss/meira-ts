"use client";
import { useState, useEffect } from "react";
import Expense from "@/types/ExpenseType";
import MapExpense from "@/components/RenderExpense";
import CreateExpense from "@/components/CreateExpense";

const getExpenseData = async (): Promise<Expense[]> => {
    const res = await fetch("http://localhost:3001/api/expenses");

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    const response = await res.json();
    return response;
};

const ExpenseComponent = () => {
    const [data, setData] = useState<Expense[] | null>(null);

    const fetchData = async () => {
        const fetchedData = await getExpenseData();
        setData(fetchedData);
    };
    useEffect(() => {
        fetchData();
    }, [data]);

    if (!data) {
        return <p>Please Wait Loading..</p>;
    }

    const removeOne = async (id: number) => {
        try {
            const response = await fetch(
                `http://localhost:3001/api/expense/${id}`,
                {
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                    },
                    method: "DELETE",
                }
            );
            console.log(response);
            return response;
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <MapExpense data={data} removeOne={removeOne} />
            <CreateExpense />
        </>
    );
};
export default ExpenseComponent;

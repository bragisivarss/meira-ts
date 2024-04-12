"use client"
import { useState, useEffect } from "react";
import Expense from "@/types/ExpenseType"
import MapExpense from "@/components/RenderExpense"

const getExpenseData = async (): Promise<Expense[]> => {
  const res = await fetch("http://localhost:3001/api/expenses")

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const response = await res.json()
  return response
}

const ExpenseComponent = () => {
const [data, setData] = useState<Expense[] | null>(null);

    const fetchData = async () => {
        const fetchedData = await getExpenseData()
        setData(fetchedData)
    }
    useEffect(() => {
        fetchData()
    })

    if (!data) {
        return <p>Please Wait Loading..</p>
    }

    return (
    <MapExpense data={data}/>
    )
}
export default ExpenseComponent;

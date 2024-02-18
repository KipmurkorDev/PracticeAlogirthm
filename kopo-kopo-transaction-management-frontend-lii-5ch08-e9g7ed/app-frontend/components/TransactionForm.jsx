import React, { useState } from "react";
import TransactionList from "./TransactionList";
const TransactionForm = () => {
  const [form, setForm] = useState({ accountId: "", amount: "" });
  const [errors, setErrors] = useState([]);
  const [data, setData] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrors([]);

    if (!form.accountId.trim()) {
      setErrors((prevErrors) => {
        const newErrors = [...prevErrors];
        newErrors[0] = "Account ID cannot be empty";
        return newErrors;
      });
      return;
    }

    if (!form.amount.trim()) {
      setErrors((prevErrors) => {
        const newErrors = [...prevErrors];
        newErrors[1] = "Amount cannot be empty";
        return newErrors;
      });
      return;
    }

    try {
      const response = await fetch(
        "https://infra.devskills.app/api/accounting/transaction",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            account_id: form.accountId,
            amount: parseFloat(form.amount),
          }),
        }
      );

      const responseData = await response.json();

      if (!response.ok) {
        if (
          responseData &&
          responseData.errors &&
          responseData.errors.length > 0
        ) {
          setErrors(responseData.errors);
        } else {
          throw new Error("Failed to submit transaction");
        }
        return;
      }
      setData(responseData);
      setForm({ accountId: "", amount: "" });
      setErrors([]);
    } catch (error) {
      console.error("Error submitting transaction:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className="flex flex-row w-full h-full mt-12">
      <div className="w-full flex items-center justify-center">
        <form onSubmit={handleSubmit} className="max-w-md w-full">
          <h1 className="font-bold">Submit New Transaction</h1>
          <div className="mb-4 flex flex-col">
            <label
              htmlFor="accountId"
              className="text-sm font-medium text-gray-700 mb-1 text-left"
            >
              Account ID:
            </label>
            <input
              type="text"
              name="accountId"
              id="accountId"
              data-type="account-id"
              placeholder="Account ID"
              value={form.accountId}
              onChange={handleInputChange}
              className="p-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
            {errors[0] && (
              <div className="text-red-500 text-sm mt-1">{errors[0]}</div>
            )}
          </div>
          <div className="mb-4 flex flex-col">
            <label
              htmlFor="amount"
              className="text-sm font-medium text-left text-gray-700 mb-1"
            >
              Amount:
            </label>
            <input
              type="number"
              name="amount"
              id="amount"
              data-type="amount"
              placeholder="Amount"
              value={form.amount}
              onChange={handleInputChange}
              className="p-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
            {errors[1] && (
              <div className="text-red-500 text-sm mt-1">{errors[1]}</div>
            )}
          </div>
          <button
            type="submit"
            data-type="transaction-submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-50"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="w-full">
        <TransactionList data={data} />
      </div>
    </div>
  );
};

export default TransactionForm;

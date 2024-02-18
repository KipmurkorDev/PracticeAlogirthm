import React, { useState, useEffect } from "react";

const TransactionList = ({ data }) => {
  const [transactions, setTransactions] = useState([]);
  const [deposit, setDeposit] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [transactionsResponse, depositResponse] = await Promise.all([
          fetch("https://infra.devskills.app/api/accounting/transactions"),
          data && data.account_id
            ? fetch(
                `https://infra.devskills.app/api/accounting/accounts/${data.account_id}`
              )
            : null,
        ]);

        if (!transactionsResponse.ok) {
          throw new Error("Failed to fetch transactions");
        }
        const transactionsData = await transactionsResponse.json();
        setTransactions(transactionsData);

        if (depositResponse && depositResponse.ok) {
          const depositData = await depositResponse.json();
          setDeposit((prevDeposit) => [
            ...prevDeposit,
            { ...depositData, amount: data.amount },
          ]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [data]);

  const isDataEmpty = transactions.length === 0 && deposit.length === 0;

  return (
    <div className="text-left justify-around max-w-4xl sm:w-full">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="max-h-[500px] overflow-y-auto">
          {error && (
            <div className="bg-red-100 text-red-700 p-4 mb-4 rounded-md">
              <p>{error}</p>
            </div>
          )}
          <h1 className="text-center mb-3 font-bold"> Transactions History</h1>
          {isDataEmpty ? (
            <div>No data available</div>
          ) : (
            <>
              {deposit.map((depositItem) => (
                <div
                  key={depositItem.id}
                  className="bg-white rounded-lg shadow-md p-4 mb-4"
                  data-type="transaction"
                  data-account-id={depositItem.account_id}
                  data-amount={depositItem.amount}
                  data-balance={depositItem.balance}
                >
                  <p className="pl-4">
                    Transferred {depositItem.amount}$ from{" "}
                    {depositItem.account_id}
                  </p>
                  <p className="pl-4">
                    The current account balance is {depositItem.balance}$
                  </p>
                </div>
              ))}
              {transactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className="bg-white rounded-lg shadow-md p-4 mb-4"
                >
                  <p className="pl-4">
                    Transferred {transaction.amount}$ to{" "}
                    {transaction.account_id}
                  </p>
                </div>
              ))}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default TransactionList;

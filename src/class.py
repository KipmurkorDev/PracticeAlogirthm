

class Car:
    def __init__(self, color, brand):
        self.color=color
        self.brand=brand
        
    def method(self):
        pass


class Lorry(Car):
    def __init__(self, color, brand, name):
        super().__init__(color, brand)
        self.name=name
        
    def Logger(self):
        print("Logg the care name", self.name)
        
        

p=Lorry("white", "Toyota", "Kanta")
p.Logger()
const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("https://infra.devskills.app/api/accounting/transaction", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(transactions)
      });

      if (!response.ok) {
        const responseData = await response.json();
        setErrors(responseData.errors.reduce((acc, error) => {
          const fieldName = error.startsWith("account_id") ? "account_id" : "amount";
          return { ...acc, [fieldName]: error };
        }, {}));
        throw new Error("Failed to submit transaction");
      }
    

      const responseData = await response.json();
      console.log(responseData);

      const withdrawalAmountResponse = await fetch(`https://infra.devskills.app/api/accounting/accounts/${responseData.account_id}`);
      const withdrawalAmountData = await withdrawalAmountResponse.json();
      SetWithDrawal({...withdrawalAmountData, amount:transactions.amount});


      const depositAmountResponse = await fetch(`https://infra.devskills.app/api/accounting/transactions/${responseData.transaction_id}`);

      const depositAmountData = await depositAmountResponse.json();
      SetDeposit({...depositAmountData, amount:transactions.amount});
      setTransactions({
        account_id: "",
        amount: ""
      });
    } catch (error) {
      console.error("Error submitting transaction:", error);
    }
  };
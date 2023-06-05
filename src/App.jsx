import Balancee from "./components/Balancee";
import Form from "./components/Form";
import Transaction from "./components/Transactions/Transaction";

function App() {
  return (
    <div>
      <h1 className="bg-primary text-light text-center p-3 ">Expense Tracker</h1>
      <div className=" text-center container">
        <Balancee />
        <Form />
        <Transaction />
      </div>
      
      <div
        style={{ marginTop: 360 }}
        className="footer text-center bg-primary text-light p-3"
      >
        ©2023 Apurbo Deb Nath
      </div>
    </div>
  );
}

export default App;

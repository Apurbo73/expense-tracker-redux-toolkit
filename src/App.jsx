import Balancee from "./components/Balancee";
import Form from "./components/Form";
import Transaction from "./components/Transactions/Transaction";

function App() {
  return (
    <div>
      <h1
        style={{ backgroundColor: "#045ec2" }}
        className=" text-light text-center  "
      >
        Expense Tracker
      </h1>
      <div className=" text-center container ">
        <Balancee />
        <Form />
        <Transaction />
      </div>

      <div
        style={{ marginTop: 360, backgroundColor: "#045ec2" }}
        className="footer text-center  text-light p-3"
      >
        ©2023 Apurbo Deb Nath
      </div>
    </div>
  );
}

export default App;

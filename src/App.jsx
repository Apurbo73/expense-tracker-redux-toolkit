import "./App.css";
import Balancee from "./components/Balancee";
import Form from "./components/Form";
import Layout from "./components/Layout";
import Transactions from "./components/Transactions/Transactions";

function App() {
  return (
    <div>
      <Layout>
        <Balancee />
        <Form />
        <Transactions />
      </Layout>
    </div>
  );
}

export default App;

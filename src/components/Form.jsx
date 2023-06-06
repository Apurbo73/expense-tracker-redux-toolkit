import React from "react";

const Form = () => {
  return (
    <div>
      <div style={{backgroundColor:'#FFEE93'}} className="form w-50 mx-auto ">
        <h4 className="pt-2">Add New Transaction</h4>
        <div className="form-group ">
          <label className="mx-4" htmlFor="transaction_name">Name</label>
          <input style={{marginRight:10}} type="text" name="transaction_name" placeholder="My Salary" />
        </div>
        <div className="form-group radio  d-flex mx-auto w-50">
          <label className="mx-3 mt-2" htmlFor="transaction_type">Type</label>
          <div className="radio_group d-flex mx-3">
            <input
              type="radio"
              defaultValue="income"
              name="transaction_type"
              defaultChecked
            />
            <label className="m-2" htmlFor="transaction_type">Income</label>
          </div>
          <div className="radio_group d-flex">
            <input
              type="radio"
              defaultValue="expense"
              name="transaction_type"
              placeholder="Expense"
            />
            <label className="m-2" htmlFor="transaction_type">Expense</label>
          </div>
        </div>
        <div className="form-group">
          <label className="mx-3" htmlFor="transaction_amount">Amount</label>
          <input style={{marginRight:10}}  type="number" placeholder={300} name="transaction_amount" />
        </div>
        <button style={{backgroundColor:'#045ec2'}} className="btn text-light w-50 mt-4 mb-3">Add Transaction</button>
        {/* <button className="btn cancel_edit">Cancel Edit</button> */}
      </div>
    </div>
  );
};

export default Form;

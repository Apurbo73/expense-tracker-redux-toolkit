import React from "react";

const Transaction = () => {
  return (
    <div>
      <p className="">Your Transactions:</p>

      <div className="btn btn-primary w-25 d-flex  mx-auto">
        <p>Book New</p>

        <p className="mx-5">৳ 100</p>
        <button style={{ marginTop: -15 }} className=" btn text-light">
          <i class="fa-solid fa-pen-to-square" />
        </button>
        <button style={{ marginTop: -15 }} className="btn">
          <i className="fa-solid fa-trash fa-1x text-light" />
        </button>
      </div>
    </div>
  );
};

export default Transaction;

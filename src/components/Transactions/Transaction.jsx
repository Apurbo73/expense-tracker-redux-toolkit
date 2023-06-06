import React from "react";

const Transaction = () => {
  return (
    <div>
      <p className="">Your Transactions:</p>

      <div style={{backgroundColor:'#045ec2'}} className="btn text-light w-50 d-flex mx-auto  ">
        <h5 className="mx-5">Book New</h5>

        <h5 className="mx-5">৳ 100</h5>
        <button style={{ marginTop: -8 }} className=" btn text-light mx-5 p-2">
          <i class="fa-solid fa-pen-to-square " />
        </button>
        <button style={{ marginTop: -8 }} className="btn p-2">
          <i className="fa-solid fa-trash fa-1x text-light" />
        </button>
      </div>
    </div>
  );
};

export default Transaction;

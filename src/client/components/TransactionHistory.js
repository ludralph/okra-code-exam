import React from 'react';

const TransactionHistory = ({ description, type, amount, createdAt }) => (
  <div className=" my-2 py-1 mx-auto flex justify-between items-center bg-white rounded-sm shadow-xl">
    <div className="ml-4  ">
      <p className="text-xs text-gray-800">{description}</p>
      <p className="text-xs text-gray-600">{createdAt}</p>
    </div>
    <div className='text-sm px-5'>
      <p className={type === 'Credit' ? "text-green-600" : "text-red-600"}>{amount.toLocaleString()}</p>
      <p className="text-xs">
        <span className={type === 'Credit' ? "text-green-600 mr-2" : "text-red-600 mr-2"}>
          <i className={type === 'Debit' ? "fas fa-reply" : "fas fa-share"}></i>
        </span>
        {type}
      </p>
    </div>
  </div>
);

export default TransactionHistory;
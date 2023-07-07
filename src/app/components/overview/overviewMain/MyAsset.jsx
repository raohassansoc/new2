import React from "react";

const MyAsset = () => {
  return (
    <div className="bg-[#161616] p-2">
      <div className="flex  justify-between border-b pb-4">
        <div>My Assets</div>
        <div>Balance Wallet</div>
      </div>
      <div className="">
        <div className="flex justify-between items-center border-b py-4">
          <div>spot</div>
          <div>0.00000BTC</div>
        </div>
        <div className="flex justify-between items-center border-b py-4">
          <div>Funding</div>
          <div>0.00000BTC</div>
        </div>
        <div className="flex justify-between items-center border-b py-4">
          <div>DeFi Wallet</div>
          <div>0.00000BTC</div>
        </div>
      </div>
    </div>
  );
};

export default MyAsset;

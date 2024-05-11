import React from "react";
import Boxed from "../assets/Boxed.png";
import Circled from "../assets/Circled.png";

const Ecosystem = () => {
  return (
    <div id="Tokens" className="text-white max-w-7xl mx-auto min-w-[320px] my-16">
      <div className="px-5 xsm:px-10">
        <div className="mt-5">
          <h1 className="font-poppins font-medium text-4xl max-w-sm flex flex-wrap leading-tight ">
            Two tokens create our ecosystem
          </h1>
          <div className="flex flex-col my-8 gap-4 md:flex-row">
            <div className="max-w-[38rem] border border-neutral-500 rounded-lg p-5 shadow-2xl shadow-black">
              <div className="flex text-2xl items-center h-12 gap-x-2">
                <img src={Boxed} width="40" alt="Err" />
                <h2>$ROMI</h2>
              </div>
              <h4 className="text-lg">
                $ROMI is the utility and governance token. Accrues 30% of the
                platform's generated fees.
              </h4>
              <p className="py-4 text-neutral-300">Ethereum APR: 0.00%</p>
              <div className="flex gap-4 flex-col lg:flex-row w-full">
                <button className="h-min rounded px-1 sm:px-4 py-1.5 bg-[#3eb489] hover:bg-[#207a59]">
                  Buy
                </button>
                <button className="h-min rounded px-1 sm:px-4 py-1.5 hover:bg-[#2a2a2a] border border-neutral-400">
                  Read More
                </button>
              </div>
            </div>
            <div className="max-w-[38rem] border border-neutral-500 rounded-lg p-5 shadow-2xl shadow-black">
              <div className="flex text-2xl items-center h-12 gap-x-2">
                <img src={Circled} width="40" alt="Err" />
                <h2>$RLP</h2>
              </div>
              <h4 className="text-lg">
                $RLP is the liquidity provider token. Accrues 70% of the
                platform's generated fees.
              </h4>
              <p className="py-4 text-neutral-300">
                Ethereum APR: 1,654,087,530.54%
              </p>
              <div className="flex gap-4 flex-col lg:flex-row w-full">
                <button className="h-min rounded px-1 sm:px-4 py-1.5 bg-[#3eb489] hover:bg-[#207a59]">
                  Buy
                </button>
                <button className="h-min rounded px-1 sm:px-4 py-1.5 hover:bg-[#2a2a2a] border border-neutral-400">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecosystem;

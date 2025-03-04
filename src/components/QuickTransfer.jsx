
import React from 'react';
import julia from '../../src/assets/julia.png'
import marcel from '../../src/assets/marcel.png'
import austin from '../../src/assets/austin.png'

const QuickTransfer = () => {
    return (
        <div>
        <h2 className="font-semibold text-lg my-2">Quick Transfer</h2>
        <div
          className="lg:min-w-[300px] w-full lg:min-h-[235px] rounded-[25px] 
            bg-gradient-to-r from-[#FFF] to-[#FFF] via-[#FFF] flex flex-col text-black"
        >
          <div className="p-4">
            <div className="flex justify-between items-center">
              <div className="">
                <img src={julia} alt="" />
                <p>Livia Bator</p>
                <p>CEO</p>
              </div>
              <div className="">
                <img src={marcel} alt="icon" />
                <p>Randy Press</p>
                <p>Director</p>
              </div>
              <div className="">
                <img src={austin} alt="" />
                <p>Workman</p>
                <p>Designer</p>
              </div>
              <div className="">
                <span className="shadow-md w-[20px]">
                  <svg
                    width="9"
                    height="15"
                    viewBox="0 0 9 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L7.5 7.5L1 14"
                      stroke="#718EBF"
                      stroke-width="2"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <div className=" flex justify-center items-center gap-2 py-4">
              <span>Write Amount</span>
  
              <div className="">
                <input
                  type="text"
                  name="search"
                  aria-label="Search"
                  className="bg-[#F5F7FA] rounded-full py-3 pl-1 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 text-base text-black h-12 w-full"
                  placeholder="525.50"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default QuickTransfer;
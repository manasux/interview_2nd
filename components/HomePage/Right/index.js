import Image from "next/image";
import React from "react";
import Box from "../../../public/images/box-small.png";
import Btc from "../../../public/images/btc.png";
import Matic from "../../../public/images/matic.png";
import BoxVector from "../../../public/images/box-vector.png";

function Right() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  py-2">
      <div className=" w-8/12 ">
        <div className="text-white text-xl flex mt-5 justify-between">
          <div className="ml-5 flex items-center">
            <div>
              <img src="https://img.icons8.com/ios-glyphs/24/ffffff/chevron-left.png" />
            </div>
            <div className="ml-2">Back</div>
          </div>
          <div className="mr-5 flex items-center">
            <div>close</div>
            <div className="ml-2">
              <img src="https://img.icons8.com/windows/30/ffffff/macos-close.png" />
            </div>
          </div>
        </div>

        <div className=" my-10 mr-40 p-10 lg:my-8 lg:mr-8 lg:p-8">
        <form className="">

          <div className=" mx-auto items-center w-2/3 lg:w-10/12">
            <div className=" flex items-center leading-3  mb-2 pb-4 border-b-2 border-gray-800">
              <div>
                <Image height={50} width={50} src={Box} objectFit="cover" />
              </div>
              
              <div className="text-white text-3xl ml-3  ">
                Create Multi User Lot
              </div>
            </div>
            <div
              className="  rounded-2xl  mt-10  lg:mt-6 grid grid-cols-2 divide-x-2 divide-gray-700 uppercase text-xl font-semibold "
              style={{ backgroundColor: "#1e1e30", color: "#4b5377" }}
            >
              <div className="p-5 lg:p-4">
                <div className="mb-2">TOKEN 01</div>
                <div
                  className="px-5  py-6 lg:px-4 lg:py-5 border-gray-700 border text-white rounded-2xl items-center  w-60 lg:w-64 leading-3 "
                  style={{ backgroundColor: "#312f54" }}
                >
                  <div className="flex items-center">
                    <div className=" ">
                      <Image src={Btc}  width={40} height={40} />
                    </div>
                    <div className="ml-2 flex items-center  justify-between w-full">
                    <div>
                    BTC
                    </div>
                    <div>
                    <img src="https://img.icons8.com/material-outlined/24/ffffff/expand-arrow--v1.png" />

                    </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pl-16 lg:pl-20 py-5 lg:py-4">
                <div className="absolute right-[712px] lg:right-[390px] flex  justify-end">
                  <img src="https://img.icons8.com/material-outlined/24/4b5377/info.png" />
                </div>
                <div className="mb-2">TOKEN 02</div>
                <div
                  className="px-5  py-6 lg:px-4 lg:py-5 border-gray-700 border  text-white rounded-2xl items-center w-56 lg:w-52 leading-3 "
                  style={{ backgroundColor: "#312f54" }}
                >
                  <div className="flex items-center">
                    <div className=" ">
                      <Image src={Matic} width={40} height={40} />
                    </div>
                    <div className="ml-2 flex items-center justify-between w-full">
                    <div>
                    MATIC
                    </div>
                    <div>
                <img src="https://img.icons8.com/material-outlined/24/ffffff/expand-arrow--v1.png" />

                    </div>
                    </div>
                  </div>
                  
                </div>
              </div>
              <div className="absolute mt-10 right-[1007px] lg:right-[703px] h-0  ">
                <Image src={Matic} width={65} height={65} />
              </div>
            </div>
            <div
              className="  rounded-2xl  mt-6 lg:mt-5 grid grid-cols-2 uppercase text-xl font-semibold "
              style={{ backgroundColor: "#1e1e30", color: "#4b5377" }}
            >
              <div className="p-5 lg:p-4">
                <div className="mb-2">STARTS ON</div>
                <div
                  className="px-5 py-8 lg:px-4   border-gray-700 border text-white rounded-2xl items-center  w-2/1 lg:3/1 leading-3 "
                  style={{ backgroundColor: "#312f54" }}
                >
                  <div className="flex items-center">
                    <div className=" ">{/* <Image src={Btc} /> */}</div>
                    <div className="ml-2">03:00pm | Nov 01,2021</div>
                  </div>
                </div>
              </div>

              <div className="pl-12 lg:pl-20 py-5 lg:py-4">
                <div className="absolute right-[712px] md:right-[] lg:right-[390px]  flex  justify-end">
                  <img src="https://img.icons8.com/material-outlined/24/4b5377/info.png" />
                </div>
                <div className="mb-2">LOT DURATION</div>
                <div
                  className="px-5 py-8 lg:px-4  border-gray-700 border  text-white rounded-2xl items-center w-2/3  leading-3 "
                  style={{ backgroundColor: "#312f54" }}
                >
                  <div className="flex items-center">
                    <div className="ml-2">1 day 3hrs</div>
                  </div>
                </div>
              </div>
              <div></div>
            </div>

            {/*  */}
            <div
              className="  rounded-2xl  mt-6 lg:mt-5 grid grid-cols-2  uppercase text-xl font-semibold "
              style={{ backgroundColor: "#1e1e30", color: "#4b5377" }}
            >
              <div className="p-5 lg:p-4 ">
                <div className="absolute right-[712px] lg:right-[390px] flex  justify-end">
                  <img src="https://img.icons8.com/material-outlined/24/4b5377/info.png" />
                </div>
                <div className="mb-2">INITIAL DEPOSIT</div>
                <div
                  className="px-5 py-5 lg:px-4 lg:py-4  border-gray-700 border text-white rounded-2xl items-center  w-2/ leading-3 "
                  style={{ backgroundColor: "#312f54" }}
                >
                  <div className="flex  items-center">
                    <div className=" ">
                      <Image src={Btc} height={40} width={40} />
                    </div>
                    <div className="ml-2">1,000</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-14 items-center">
              <button 
              type="submit"
              onClick={(e)=>
             { e.preventDefault()
              console.log('I am form')}

             }   className="px-6 py-4 rounded-3xl text-white leading-3  shadow-md shadow-purple-700"
                style={{ backgroundColor: "#8b6df7" }}
              >
                <div className="flex items-center">
                  <div>
                    <Image width={30} height={30} src={BoxVector} />
                  </div>
                  <div className="ml-2 text-xl">Create lot</div>
                </div>
              </button>
            </div>

          </div>
          </form>
        </div>

      </div>
    </div>
  );
}

export default Right;

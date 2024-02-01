import Image from "next/image";
import React from "react";
import { FaRegCopy } from "react-icons/fa";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { FiShare2 } from "react-icons/fi";
import { MdOutlineReport } from "react-icons/md";
import { CiBookmark } from "react-icons/ci";
import contentIcon from "../assets/contennt_icon.png"
import fever from "../assets/fever.png"

const Home = () => {
  return (
    <div className="bg-[#f7f8fa] h-screen p-8">
      <div className="flex">
        <div className="w-[10%] border bg-white">Icons</div>
        
        <div className="flex w-full gap-8 justify-center">
          {/* category */}
          <div className="w-[30%] bg-white border rounded-y-lg">
            <div>
              <h2 className="bg-[#1FA45B] text-white text-center rounded-t-lg py-3">
                Category
              </h2>
              {/*category search field */}
              <div className="m-2">
                <input
                  type="text"
                  placeholder="Search by Categories"
                  className="input input-bordered w-full"
                />
              </div>

              {/* category list dropDoun*/}
              <div>
                {/* dropDoun-1 */}
                <div className="dropdown p-2">
                  <div tabIndex={0} role="button" className=" m-1 bg-[#E8F0F5] p-2 rounded-md">
                    <div className="flex ">
                      <div className="p-2 bg-[#CFE0E5] rounded-md"><Image width={50} height={20} alt="user profile" src={fever} /></div>
                      <div className="flex justify-between">
                        <div className="p-2 mr-6 rounded-md">
                        <h1 className="text-[#1FA45B]">
                          Introduction to Dua
                        </h1>
                        <p className="text-[#7E7E7E]">Subcategory: 11</p>
                        </div>
                        <div className="p-2 text-center">
                          <p>15</p>
                          <p>Duas</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-full mr-2"
                  >
                    <li>
                      <a>Item 1</a>
                    </li>
                    <li>
                      <a>Item 2</a>
                    </li>
                  </ul>
                </div>
                {/* dropDoun-2 */}
                <div className="dropdown p-2">
                  <div tabIndex={0} role="button" className=" m-1 bg-[#E8F0F5] p-2 rounded-md">
                    <div className="flex ">
                      <div className="p-2 bg-[#CFE0E5] rounded-md"><Image width={50} height={20} alt="user profile" src={fever} /></div>
                      <div className="flex justify-between">
                        <div className="p-2 mr-6 rounded-md">
                        <h1 className="text-[#1FA45B]">
                          Introduction to Dua
                        </h1>
                        <p className="text-[#7E7E7E]">Subcategory: 11</p>
                        </div>
                        <div className="p-2 text-center">
                          <p>15</p>
                          <p>Duas</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-full mr-2"
                  >
                    <li>
                      <a>Item 1</a>
                    </li>
                    <li>
                      <a>Item 2</a>
                    </li>
                  </ul>
                </div>
                {/* dropDoun-3 */}
                <div className="dropdown p-2">
                  <div tabIndex={0} role="button" className=" m-1 bg-[#E8F0F5] p-2 rounded-md">
                    <div className="flex ">
                      <div className="p-2 bg-[#CFE0E5] rounded-md"><Image width={50} height={20} alt="user profile" src={fever} /></div>
                      <div className="flex justify-between">
                        <div className="p-2 mr-6 rounded-md">
                        <h1 className="text-[#1FA45B]">
                          Introduction to Dua
                        </h1>
                        <p className="text-[#7E7E7E]">Subcategory: 11</p>
                        </div>
                        <div className="p-2 text-center">
                          <p>15</p>
                          <p>Duas</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-full mr-2"
                  >
                    <li>
                      <a>Item 1</a>
                    </li>
                    <li>
                      <a>Item 2</a>
                    </li>
                  </ul>
                </div>
                {/* dropDoun-4 */}
                <div className="dropdown p-2">
                  <div tabIndex={0} role="button" className=" m-1 bg-[#E8F0F5] p-2 rounded-md">
                    <div className="flex ">
                      <div className="p-2 bg-[#CFE0E5] rounded-md"><Image width={50} height={20} alt="user profile" src={fever} /></div>
                      <div className="flex justify-between">
                        <div className="p-2 mr-6 rounded-md">
                        <h1 className="text-[#1FA45B]">
                          Introduction to Dua
                        </h1>
                        <p className="text-[#7E7E7E]">Subcategory: 11</p>
                        </div>
                        <div className="p-2 text-center">
                          <p>15</p>
                          <p>Duas</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-full mr-2"
                  >
                    <li>
                      <a>Item 1</a>
                    </li>
                    <li>
                      <a>Item 2</a>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>

          {/* body */}
          <div className="w-[40%] ">
            {/* title */}
            <div className="mb-2">
              <h2 className="pl-6 py-3 bg-white rounded-lg"><span className="text-[#1FA45B] font-medium">Section:</span> The servant is dependent on his Lord</h2>
            </div>
            {/* content */}
            <div className="px-4 bg-white rounded-md">
              <div className="flex items-center gap-3 py-2">
                <Image width={40} height={40} alt="" src={contentIcon}/>
                <h2 className="text-[#1FA45B] font-semibold">1. The servant is dependent on his Lord #1</h2>
              </div>

              <p className="py-4">All human beings depend on Allah for their welfare and prevention of evil in various matters of their religion and world. Allah says (interpretation of the meaning): O mankind, you are those in need of Allah, while Allah is the Free of need, the Praiseworthy.</p>
              <h4 className="text-[#1FA45B] font-semibold">Reference:</h4>
              <h4 className="font-semibold">Surah Al-Fatir 35:15</h4>

              {/* icons links */}
              <div className="text-[#868686] flex justify-end gap-4 py-6">
                <button><FaRegCopy size={24}/></button>
                <button><CiBookmark size={24}/></button>
                <button><RiLightbulbFlashLine size={24}/></button>
                <button><FiShare2 size={24}/></button>
                <button><MdOutlineReport size={24}/></button>
              </div>
            </div>
          </div>

          {/* settings */}
          <div className="w-[20%] bg-white border">gfsdsdsdsdsdg</div>
        </div>
      </div>
    </div>
  );
};

export default Home;

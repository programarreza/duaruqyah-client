import Image from "next/image";
import { useState } from "react";
import profile from "../../../assets/profile.png"

const DropDown = () => {
  const user = false;
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <div className="dropdown dropdown-end">
        <label
          onClick={() => setIsShow(!isShow)}
          className="btn btn-ghost btn-circle avatar "
        >
          <div className="w-10 rounded-full ">
            {user ? (
              <Image width={20} height={20} alt="user profile" src={"user?.image"} />
            ) : (
				<Image width={20} height={20} alt="user profile" src={profile} />
            )}
          </div>
        </label>
      </div>
      {isShow && !user ? (
        <ul className="menu  absolute menu-sm dropdown-content  mt-36 z-[10] p-2 shadow bg-base-100 rounded-box w-52 mr-0">
          <li>
            <a className="justify-between">name</a>
          </li>
          <li>
            <a className="justify-between">name@gmail.com</a>
          </li>
        </ul>
      ) : (
        ""
      )}
    </>
  );
};

export default DropDown;

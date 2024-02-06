import { useState } from "react";
import DashIcon from "../../assets/DashIcon.svg";
import CourseIcon from "../../assets/CourseIcon.svg";
import MessageIcon from "../../assets/MessageIcon.svg";
import QuizIcon from "../../assets/QuizIcon.svg";
import NotificationIcon from "../../assets/NotificationIcon.svg";
import ContactButton from "../Buttons/ContactButton";

const DesktopNavBar = () => {
  const lists = [
    { id: 1, name: "My Dashboard", icon: DashIcon },
    { id: 2, name: "Courses", icon: CourseIcon },
    { id: 3, name: "Messages", icon: MessageIcon },
    { id: 4, name: "Quizes", icon: QuizIcon },
    { id: 5, name: "Notification", icon: NotificationIcon },
  ];

  const [active, setActive] = useState(2);

  return (
    <div className="h-screen w-[316px] bg-lerndis-black-pearl">
      <h2 className="border-b border-solid border-[#05152E] pb-[16px] pt-[24px] ml-[48px] mr-[28px] text-lerndis-orange font-display font-bold text-[20px]/[28px]">
        Lerndise
      </h2>
      <ul className="text-white ml-[47px] mt-[32px] flex flex-col gap-y-3 ">
        {lists.map((item) => (
          <li
            key={item.id}
            className={
              item.id == active
                ? "bg-white text-lerndis-black-pearl flex gap-x-2 w-[200px]  py-[10px] pl-[20px] rounded-[4px] cursor-pointer"
                : "flex gap-x-2 w-[200px]  py-[10px] pl-[20px] rounded-[4px] cursor-pointer"
            }
            onClick={() => setActive(item.id)}
          >
            <img className="w-[20px] h-[20px]" src={item.icon} alt="" />
            <p className="text-sm font-body font-semibold">{item.name}</p>
          </li>
        ))}
      </ul>
      <div className="fixed bottom-[42px] flex flex-col items-center bg-white rounded-[3.35px] w-[200px] ml-[47px] h-[160px] border border-solid border-white">
        <div className="text-lerndis-black-pearl py-[20px] px-[15px] text-center font-body">
          <p className="text-base font-bold">Need Help?</p>
          <p className="text-xs">
            Kindly contact the school administration for any assistance.
          </p>
        </div>
        <ContactButton />
      </div>
    </div>
  );
};

export default DesktopNavBar;

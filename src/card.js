import "./card.css";
import { CiCircleCheck } from "react-icons/ci";
import { IoFilterSharp } from "react-icons/io5";
import { TbArrowsSort } from "react-icons/tb";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { BiCaretDown } from "react-icons/bi";
import { BiDotsHorizontalRounded } from "react-icons/bi";

function Card() {
  return (
    <div className="common">
      <div className="side1">
        <h6 className="text"> Last task completed on sep 30 </h6>
      </div>
      <div className="side2">
        <div className="task">
          <CiCircleCheck className="tick" />
          <h6 className="text2">All Task</h6>
        </div>
        <div className="task">
          <IoFilterSharp className="tick" />
          <h6 className="text2">Filter</h6>
        </div>
        <div className="task">
          <TbArrowsSort className="tick" />
          <h6 className="text2">Sort</h6>
        </div>

        <div className="spacer"></div>
        
        <div className="task line ">
          <AiOutlineThunderbolt className="tick " />
          <h6 className="text2">Rules</h6>
        </div>
        <div className="task">
          <BiCaretDown className="tick" />
          <h6 className="text2">Fields</h6>
        </div>
        <div className="task">
          <BiDotsHorizontalRounded className="tick" />
        </div>
      </div>
    </div>
  );
}

export default Card;

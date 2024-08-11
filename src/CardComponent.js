import './CardComponent.css';
import {CiCircleCheck} from "react-icons/ci";
import Avatar from "./avatar";
import {FaRegMessage} from "react-icons/fa6";
import { FiMessageCircle } from "react-icons/fi";
import { AiOutlineLike } from "react-icons/ai";
import Badge from "./Badge";

function CardComponent({
                           title,
                           text,
                           hasImage = false,
                           hasTaskList = false,
                           isImageFull = false
                       }) {
    return (
        <div className="card">
            <div className="card-body">
                <div className={"card-image " + (!isImageFull ? "image-padding" : "")} hidden={!hasImage}>
                    <img src="https://picsum.photos/600" alt="image"/>
                </div>
                <div className="card-content">
                    <h3 className="card-title">
                        <CiCircleCheck className="icon tick"/>
                        {title}
                    </h3>
                    <Badge></Badge>
                    {hasTaskList ?
                        <div className="card-task-list">
                            <div className="list-item">
                                <CiCircleCheck className="icon tick"/>
                                <p className="text">Task 1</p>
                            </div>
                            <div className="list-item">
                                <CiCircleCheck className="icon tick"/>
                                <p className="text">Task 1</p>
                            </div>
                            <div className="list-item">
                                <CiCircleCheck className="icon tick"/>
                                <p className="text">Task 1</p>
                            </div>
                        </div> : null}
                    <div className="card-footer">
                        <Avatar name="John Doe"/>

                        <div className="icon-container">
                            <div className="icon-item">
                                <p className="label">6</p>
                                <FaRegMessage className="icon"/>
                            </div>
                            <div className="icon-item">
                                <p className="label">6</p>
                                <FiMessageCircle className="icon"/>
                            </div>
                            <div className="icon-item">
                                <AiOutlineLike className="icon"/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardComponent;

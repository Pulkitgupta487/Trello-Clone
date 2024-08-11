import "./avatar.css"
import images from "./images/avatar.png";


function Avatar() {
    return (
        <div className= "avatar">
            <img className="img-2" src={images} alt="logo" />

        </div>
    )
    

}

export default Avatar;
import './card-structure.css';
import { FiPlus } from "react-icons/fi";
import { RiMoreLine } from "react-icons/ri";
import CardComponent from './CardComponent';


function CardStructure() {
  return (
    <div className='parent'>
        <div className='columns'>
                <div className='flex card-label'>
                    <h3>Backlog</h3>
                    <div className='more-options'>
                    <FiPlus className='more-option-icons' />
                    <RiMoreLine  className='more-option-icons'/>
                    </div>
                </div>
                <CardComponent title="Sprint Board" text="Sprint Board" hasImage={true} hasTaskList={false} isImageFull={true} />
                <CardComponent title="Sprint Board" text="Sprint Board" hasImage={false} hasTaskList={false} isImageFull={true} />

        </div>
        <div className='columns'>
                <div className='flex card-label'>
                    <h3>Ready</h3>
                    <div className='more-options'>
                    <FiPlus className='more-option-icons' />
                    <RiMoreLine  className='more-option-icons'/>
                    </div>
                </div>
                <CardComponent title="Sprint Board" text="Sprint Board" hasImage={false} hasTaskList={false} isImageFull={true} />
                <CardComponent title="Sprint Board" text="Sprint Board" hasImage={false} hasTaskList={true} isImageFull={true} />
                <CardComponent title="Sprint Board" text="Sprint Board" hasImage={false} hasTaskList={false} isImageFull={true} />

        </div>
        <div className='columns'>
                <div className='flex card-label'>
                    <h3>In Progress</h3>
                    <div className='more-options'>
                    <FiPlus className='more-option-icons' />
                    <RiMoreLine  className='more-option-icons'/>
                    </div>
                </div>
                <CardComponent title="Sprint Board" text="Sprint Board" hasImage={false} hasTaskList={false} isImageFull={true} />
                <CardComponent title="Sprint Board" text="Sprint Board" hasImage={true} hasTaskList={false} isImageFull={false} />

 
        </div>
        <div className='columns'>
                <div className='flex card-label'>
                    <h3>Done</h3>
                    <div className='more-options'>
                    <FiPlus className='more-option-icons' />
                    <RiMoreLine  className='more-option-icons'/>
                    </div>
                </div>
                <CardComponent title="Sprint Board" text="Sprint Board" hasImage={false} hasTaskList={false} isImageFull={true} />
                <CardComponent title="Sprint Board" text="Sprint Board" hasImage={false} hasTaskList={false} isImageFull={true} />

        </div>


    </div>
  )
}

export default CardStructure
import { MdAdd } from 'react-icons/md';
//import { CiInstagram } from "react-icons/ci";
import './TodoInsert.scss';

const TodoInsert = () => {
    return (
        <form className="TodoInsert">
            <input placeholder='Please input your Todo'/>
            <button type='submit'>
               {/* <CiInstagram/> */}
               <MdAdd/>

            </button>
        </form>
    );
};

export default TodoInsert;
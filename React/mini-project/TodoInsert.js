import { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
//import { CiInstagram } from "react-icons/ci";
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
    const [value, setValue] = useState('');

    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback(
        e => {
            onInsert(value);
            setValue('');
            e.preventDefault();
        },
        [onInsert, value]
    );
    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input placeholder='Please input your Todo'
            value = {value}
            onChange={onChange}
            />
            <button type='submit'>
               {/* <CiInstagram/> */}
               <MdAdd/>

            </button>
        </form>
    );
};

export default TodoInsert;
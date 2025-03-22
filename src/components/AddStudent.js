import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch,useStore } from 'react-redux';
import { addStudent } from '../actions/studentActions';

function AddStudent() {
    const [studentName, setStudentName] = useState('');
    const dispatch = useDispatch();
    const store = useStore();
    const handleAddStudent = () => {
        if (studentName.trim()) {
            dispatch(addStudent({ name: studentName }));
            setStudentName('');
            console.log(store.getState().student.students);
        }
    };

    return (
        <div>
            <h1>Add Student</h1>
            <input
                type="text"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder="Enter student name"
            />
            <button onClick={handleAddStudent}>Add</button>
            <NavLink to="/">Back to Student List</NavLink>
        </div>
    );
}

export default AddStudent;
import React, { useState,useEffect } from 'react';
import { useSelector, useDispatch,useStore } from 'react-redux';
import { addStudent } from '../actions/studentActions';
// import store from '../store'
function StudentList() {
    // const [studentName, setStudentName] = useState('');
    // const students = useSelector(state => state.student.students); // 确保从 Redux store 获取学生列表
    // const dispatch = useDispatch();
    
    // const handleAddStudent = () => {
    //     if (studentName.trim()) {
    //         dispatch(addStudent({ name: studentName }));
    //         setStudentName('');
    //     }
    // };
    
    const students = useSelector(state => state.student.students);

    return (
        <div>
            <h1>Student List</h1>
            {/* <input
                type="text"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder="Enter student name"
            />
            <button onClick={handleAddStudent}>Add</button> */}
            <ul>
                {students.map((student, index) => (
                    <li key={index}>{student.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default StudentList;
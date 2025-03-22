import { ADD_STUDENT } from '../actions/studentActions';

const initialState = {
    students: []
};

function studentReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_STUDENT:
            return {
                ...state,
                students: [...state.students, action.payload]
            };
        default:
            return state;
    }
}

export default studentReducer
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {}; // 确保 initialState 正确初始化
//Thunk 是一种用于 Redux 的中间件，允许你编写返回函数而不是动作对象的 action creator
const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
);

export default store;
import React, {
    useReducer
} from 'react';
import LoadReducer from './LoadReducer';
import './App.css';

const initialState = {
    loadStatus: false,
    apiCount:0
}
const LoaderContext = React.createContext(initialState);

function LoaderProvider(props) {
    const [state, dispatch] = useReducer(LoadReducer, initialState);
    return ( 
        <LoaderContext.Provider value ={{state,dispatch}}> 
            {props.children} 
        </LoaderContext.Provider>
    );
}

export  {
    LoaderProvider,
    LoaderContext
};
import React, {
    useEffect,
    useContext
} from 'react';
import axios from 'axios';
import {LoaderContext} from './LoaderProvider';
 import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner';

function GlobalLoader(){
    const {
        state,
        dispatch
    } = useContext(LoaderContext);
    useEffect(()=>{
        axios.interceptors.request.use(function (config) {
            // show spinner
            dispatch({
                type: "SHOW_LOADER",
                status:true
            })
            return config;
        }, function (error) {
            return Promise.reject(error);
        });

        axios.interceptors.response.use(function (response) {
            //  hide spinner
                dispatch({
                    type: "HIDE_LOADER",
                    status: state.apiCount > 0
                })
            return response;
        }, function (error) {
            return Promise.reject(error);
        });
    })
    console.log(state);
    return(
        <div>
            {
                state.loadStatus && state.apiCount > 0 &&
                    <Loader
                    type = "Puff"
                    color = "#00BFFF"
                    height = {100}
                    width = {100}
                    timeout = {3000} />
            }
        </div>
    );
}

export default GlobalLoader;
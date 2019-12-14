import React from 'react'
import {LoaderProvider} from './LoaderProvider';
import ItemsList from './ItemsList';
import GlobalLoader from './GlobalLoader';


function App(){
  return(
    <div className = "App" >
      <LoaderProvider>
        <GlobalLoader />
        < ItemsList / >
      </LoaderProvider>  
    </div>
  )
}

export default App;


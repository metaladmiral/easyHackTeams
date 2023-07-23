// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

export const server = "https://nodejs-todoapp-lpxg.onrender.com/api/v1"
export const Context = createContext({isAuthenticated :false})
const AppWrapper = () =>{
  const [isAuthenticated,setIsAuthenticated]=React.useState(false)
  const [loading,setLoading]=React.useState(false)
  const [user,setUser]=React.useState("")
  return (
    <Context.Provider value={
      {isAuthenticated,setIsAuthenticated,loading,setLoading,user,setUser}
    }>
      <App />
    </Context.Provider> 
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>,
)


reportWebVitals();
import './App.css'
import React from 'react'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'

//Text uilts which helps remove white spaces, helps convert strings to either uppercase or to the lower case and helps to copy text
function App() {
    return (
        <>
            {/*  */}
            <Navbar title="TextUtils" aboutInfo="About TextUtils" />
            <div className="container my-3">
                <TextForm heading="Enter the text to analyze below" />
            </div>
        </>
    )
}

export default App

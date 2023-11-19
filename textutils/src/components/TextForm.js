import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('')

    function handleChange(event) {
        const data = event.target.value
        setText(data)
    }
    function convertToUpper() {
        console.log('Upper')
        const res = text.toUpperCase()
        setText(res)
    }

    function convertToLower() {
        const res = text.toLowerCase()
        setText(res)
    }

    function clear() {
        setText('')
    }

    //creating a Strip Function
    function handleStrip() {
        const data = text.trim()
        setText(data)
    }

    //Copy to Clipboard.
    function handleCopy() {
        navigator.clipboard.writeText(text)
    }

    function handlePrint() {
        console.log('Print')
        handleCopy()
        window.print()
    }

    return (
        <>
            <div
                className={`container text-${
                    props.mode === 'light' ? 'black' : 'light'
                }`}
            >
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea
                        className={`form-control bg-${
                            props.mode === 'light' ? 'light' : 'secondary'
                        } text-${props.mode === 'light' ? 'black' : 'white'}`}
                        id="mybox"
                        rows="8"
                        placeholder="Enter Your Text Here"
                        onChange={handleChange}
                        value={text}
                    ></textarea>
                </div>
                <button
                    className={`btn btn-primary mx-2 ${
                        props.mode === 'light' ? 'black' : 'light'
                    }`}
                    style={{ marginRight: '10px' }}
                    onClick={convertToUpper}
                >
                    Convert to Upper Case
                </button>
                <button
                    className="btn btn-primary mx-2"
                    style={{ marginRight: '10px' }}
                    onClick={convertToLower}
                >
                    Convert to Lower Case
                </button>
                <button
                    className="btn btn-primary mx-2"
                    style={{ marginRight: '10px' }}
                    onClick={clear}
                >
                    Clear
                </button>
                <button
                    className="btn btn-primary mx-2"
                    style={{ marginRight: '10px' }}
                    onClick={handleStrip}
                >
                    Strip
                </button>
                <button
                    className="btn btn-secondary mx-2 "
                    style={{ marginRight: '10px' }}
                    onClick={handleCopy}
                >
                    Copy to Clipboard
                </button>
                <button
                    className="btn btn-secondary mx-2 "
                    style={{ marginRight: '10px' }}
                    onClick={handlePrint}
                >
                    Print
                </button>
            </div>
            <div
                className={`container my-3 ${
                    props.mode === 'light' ? 'dark' : 'light'
                }`}
            >
                <h2
                    className={`text-${
                        props.mode === 'light' ? 'black' : 'light'
                    }`}
                >
                    Your Text Summary
                </h2>
                <p
                    className={`text-${
                        props.mode === 'light' ? 'black' : 'light'
                    }`}
                >
                    <b>{text.split(' ').length} </b>words and{' '}
                    <b>{text.length} </b>
                    characters
                </p>
                <p
                    className={`text-${
                        props.mode === 'light' ? 'black' : 'light'
                    }`}
                >
                    {0.008 * text.split('').length} Minutes Read.
                </p>
                <h2
                    className={`text-${
                        props.mode === 'light' ? 'black' : 'light'
                    }`}
                >
                    Preview
                </h2>
                <p
                    className={`text-${
                        props.mode === 'light' ? 'black' : 'light'
                    }`}
                >
                    {text.length > 0 ? text : 'Start Entering Some Data Buddy'}
                </p>
            </div>
        </>
    )
}

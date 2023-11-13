import React, { useState } from 'react'

export default function TextForm(props) {
    // const handleClick = (event) => {
    //     console.log('UpperCase was Clicked' + text)

    //     let newText = text.toUpperCase()

    //     setText(newText)
    // }

    // const handleOnChange = (event) => {
    //     console.log('onchange !')
    //     setText(event.target.value)
    //     console.log(event.target.value)
    // }

    // const [text, setText] = useState('Enter Text here')

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

    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        id="mybox"
                        rows="8"
                        placeholder="Enter Your Text Here"
                        onChange={handleChange}
                        value={text}
                    ></textarea>
                </div>
                <button
                    className="btn btn-primary mx-2"
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
            </div>
            <div className="container my-3">
                <h2>Your Text Summary</h2>
                <p>
                    <b>{text.split(' ').length} </b>words and{' '}
                    <b>{text.length} </b>
                    characters
                </p>
                <p>{0.008 * text.split('').length} Minutes Read.</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}

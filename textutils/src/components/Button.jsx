import React from 'react'

export default function Button(props) {
    return (
        <div>
            <div className="container my-3">
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={props.toggleStyle}
                >
                    {props.btnText}
                </button>
            </div>
        </div>
    )
}

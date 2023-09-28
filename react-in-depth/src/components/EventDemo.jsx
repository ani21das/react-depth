import React from 'react';

function EventDemo () {

    const enlargeImage = () => {
        document.getElementById( 'image' ).style.transform = 'scale(1.2)';
    };

    const resetImageSize = () => {
        document.getElementById( 'image' ).style.transform = 'scale(1.0)';
    };

    const showAlert = () => {
        console.log( 'Button double-clicked!' );
    };

    const logClick = () => {
        console.log( 'Button clicked' );
    };

    const logFocus = () => {
        console.log( 'Focused on the textbox' );
    };

    const logBlur = () => {
        console.log( 'Out of the textbox' );
    };

    const handleCopy = () => {
        alert( 'Text copied!' );
    };

    const handleCut = () => {
        alert( 'Text cut!' );
    };

    const handlePaste = () => {
        alert( 'Text pasted!' );
    };

    return (
        <div className="container mt-4">
            <img
                id="image"
                src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80"
                width="300"
                height="200"
                onMouseOver={ enlargeImage }
                onMouseOut={ resetImageSize }
            />
            <br />
            <br />
            <button
                id="myButton"
                onDoubleClick={ showAlert }
                onClick={ logClick }
                className="btn btn-dark"
            >
                Click Me
            </button>
            <br />
            <br />
            <input
                type="text"
                id="myInput"
                onFocus={ logFocus }
                onBlur={ logBlur }
                placeholder="Enter text here"
                className="form-control"
            />
            <br />
            <br />
            <p
                id="myParagraph"
                contentEditable={false }
                onCopy={ handleCopy }
                onCut={ handleCut }
                onPaste={ handlePaste }
                className="form-control"
            >
                This is a paragraph. You can copy, cut, and paste text here.
            </p>
        </div>
    );
}

export default EventDemo;

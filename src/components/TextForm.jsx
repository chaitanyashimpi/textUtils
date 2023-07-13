import React, {useState} from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    heading: PropTypes.string.isRequired,
};

const defaultProps = {
    heading: "Text Analyzer"
};

const TextForm = (props) => {

    const [text, setText] = useState("")
    

    const handleUpClick = () => {
        setText(text.toUpperCase());
        if(text.length > 0){
            props.showAlert("Converted to Uppercase!", "success")
        }
        else{
            props.showAlert("Enter the text", "warning")
        }
    }
    const handleDownClick = () => {
        setText(text.toLowerCase());
        if(text.length > 0){
            props.showAlert("Converted to Lowercase!", "success")
        }
        else{
            props.showAlert("Enter the text", "warning")
        }
    }
    
    const handleOnChange = (e) => {
        setText(e.target.value)

    }

    return (
        <>
            <div className='container'>
                <h1 className={` text-${props.mode === 'light' ? 'dark' : 'light'}`}>{props.heading}</h1>
                <div className="mb-3">
                    <textarea style={{color: `${props.mode === 'light' ? 'black' : 'white'}`,backgroundColor: `${props.mode === 'light' ? 'white' : '#212529'}`}} name="myBox" id="myBox" cols="30" rows="10" className="form-control" value={text} onChange={handleOnChange}></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>
                    Convert to UpperCase
                </button>
                <button className="btn btn-primary mx-1" onClick={handleDownClick}>
                    Convert to LowerCase
                </button>
            </div>
            <div className={`container my-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <h1>Your Text Summary</h1>
                <p>{text.length} characters, {text.length === 0 ? "0" : text.trim().split(' ').length} words</p>
                <p>{0.008 * text.trim().split(' ').length} minutes</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something in above textbox to preview it here"}</p>
            </div>
        </>
    );
}

TextForm.propTypes = propTypes;
TextForm.defaultProps = defaultProps;


export default TextForm;



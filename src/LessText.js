import { useState } from 'react'

// function LessText (props) {
    function LessText ({ text, max=55 }) {
    // let text = props.text;
    // let max = props.max;

    
    // if(max === undefined) {
    //     max = 50;
    // }

    // const { text, max=55 } = props;
    
    const [showLess, setShowLess] = useState(true);


    if (text.length <= max) {
        return <span>{text}</span>;
    }

    return (
        <span>
            {showLess ? `${text.substring(0, max)}...`: text}
            <a href="#" onClick={(evt) => {
                evt.preventDefault();
                setShowLess(!showLess);
            }}>{ showLess ? "more" : "less" }</a>
        </span>
    )
}


export default LessText;
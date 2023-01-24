import {useState} from 'react';

function Text({ text, max }) {
    let [showLess, setShowLess] = useState(true);
    if (text.length <= 25) {
        return <span>{text}</span>
    }
    return (
        <div>
            <span>{!showLess ? text : text.substring(0, max)}</span>
            <a href="#" onClick={(e) => {
                e.preventDefault();
                setShowLess(!showLess)
            }}>
                {showLess ? "more" : "less"}
            </a>
        </div>
    );
}

export default Text;
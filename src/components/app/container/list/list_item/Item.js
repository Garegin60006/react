import './item.css'

function Item({ date }) {

    return (
        <div>
            <div className='list_item'>
                <label>
                    <input type="checkbox" />
                    {date.text}
                </label>
                <button>x</button>
            </div>
        </div>
    );
}


export default Item;
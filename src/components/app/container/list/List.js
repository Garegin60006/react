import './list.css';
import Item from './list_item/Item';


function List ({data}) {
    return (
        <div className='list_container'>
            {
                data.map((date) => {
                    return <Item key={date.id} date={date}></Item>;
                })
            }
            
        </div>
    );
}


export default List;
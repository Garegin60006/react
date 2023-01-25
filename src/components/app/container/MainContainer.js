import Add from './add_list/Add';
import List from './list/List';
import './container.css'
import Clean from './cleanList/Clean';


function MainContainer({ data, add }) {
    return (
        <div>
   
            <div className="todo_container">
                <Add add={add} />
                <List data={data} />
                <Clean data={data} />
            </div>
        </div>
    );
}

export default MainContainer;
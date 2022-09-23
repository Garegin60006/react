import './style.css'
export class List {
    render(...items) {
        let parent = document.createElement("ul")
        items.forEach(elm => {
            let child = document.createElement("li");
            child.innerText = elm;
            parent.appendChild(child);  
        });
        document.body.append(parent);
    }
}
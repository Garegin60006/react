import './clean.css';


function Clean({ data }) {
    const count = data.map((date) => {
        return date.isCompleted
    })

    return (
        <div className="clean_container"> /{count.length} Completed<button>
            Clear Completed</button>
        </div>
    )
}

export default Clean;
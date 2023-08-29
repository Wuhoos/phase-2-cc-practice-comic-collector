import ComicsContainer from "./ComicsContainer"
import ComicForm from "./ComicForm"
import { useState, useEffect } from "react";

function App() {

  const [comics, setComics] = useState([])


  useEffect(() => {
    fetch('http://localhost:8004/comics')
    .then(res => res.json())
    .then(comics => setComics(comics))
  }, [])

  const submitNewComic = event => {
    event.preventDefault()

    const newComic = {
      "image_url": event.target.image_url.value,
      "issue": event.target.issue.value,
      "title": event.target.title.value,
      "description": event.target.description.value
    }

    fetch("http://localhost:8004/comics",{
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(newComic)
    })
    .then(res => res.json())
    .then(newComic => setComics([...comics,newComic]))
  }

  const deleteButton = (id) =>{
    fetch(`http://localhost:8004/comics/${id}`, {
      method: "Delete"
    })
  }

  return (
    <div className="App">

      <h1>Comicbook Collector</h1>

      <div className="grid with-sidebar">

        <div className="flex-container">
          <ComicsContainer comics={comics} deleteButton={deleteButton} />
        </div>

        <div className="sidebar">
          <ComicForm submitNewComic={submitNewComic} />
        </div>

      </div>


    </div>
  );
}

export default App;

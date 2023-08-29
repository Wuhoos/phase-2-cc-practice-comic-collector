import { useState } from "react"


function Comic({comic, deleteButton}) {

  const [picture, setPictureOff] = useState(true)

  return (
    <div className="comic-item" onClick={() => setPictureOff(!picture)} >
      
      {picture ? <img src={comic.image_url} alt={"Comic Issue Image"}/> :
      
      <div>
        <h3>{comic.title}</h3>
        <h4>{comic.issue}</h4>
        <button onClick={() => deleteButton(comic.id)} >Remove</button>
      </div>
      }

    </div>
  )

}

export default Comic

import Comic from "./Comic"

function ComicsContainer({comics, deleteButton}) {

  return (
    <>
    {comics.map(comic => {
      return <Comic comic={comic} key={comic.id} deleteButton={deleteButton} />
    })}
    </>
  )

}

export default ComicsContainer

'use client'

import { SetStateAction, useState } from "react"
require ('bootstrap')

export default function Home() {
  const [input, setInput] = useState('')
  const [list, setList] = useState([])

  const handleInputEvent = (event: { preventDefault: () => void; target: { value: SetStateAction<string> } }) => {
    event.preventDefault()
    setInput(event.target.value) 
  }

  const handleSubmitEvent = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    setList([input,...list ])
    setInput('')
  }
  
  const handleDeleteEvent = (listId: never) => {
    const deletedItem =  list.filter(lists => list.indexOf(lists) != list.indexOf(listId))
    setList(deletedItem)
  }


  const handleUpdateEvent = (index: number, item: string | undefined) => {
    const updatedItem = prompt('Value to update:', item);
    if (updatedItem !== null) {
      const updatedList = [...list];
      updatedList[index] = updatedItem;
      setList(updatedList);
    }
  }

  return (
  
    <div className="container-xl mt-5 w-50 my-5 ">
      <main>
        <div className="text-center mt-3">
          <h2 className="h2">
            TODO LIST
          </h2>
        </div>
        <div className="mt-3">
          <label className="form-label h3">Add an item</label>
          <form encType="multipart/form-data">
            <div className="row mb-5">
              <div className="col-10">
                <input type="text" value={input} onChange={handleInputEvent} id="" className="form-control" />
              </div>
              <div className="col-2">
                <input type="button" value="Submit" onClick={handleSubmitEvent} className="btn btn-primary"/>
              </div>
            </div>
          
            <ul>
              {
                list.length >= 1 ?
                list.map((item, index) => (
                  
                  <li key={index} className="h3 d-flex mx-auto">{item} <input type="button" onClick={ (e) => {handleDeleteEvent(item)} } className="h4 btn btn-danger h-25 mx-3" value="Delete" /> <input type="button" onClick={ (e) => {handleUpdateEvent(index,item)} }  className="h4 btn btn-primary h-25" value="Update" /> </li>
                )) 
                : <p className="text-danger h3 ">Your List is Empty</p>
              }    
            </ul>
            
          </form>
        </div>
      </main>
    </div>
  )
}

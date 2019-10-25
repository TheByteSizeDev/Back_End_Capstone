import React, { useRef } from "react";
import APImanager from "../../modules/APIManager"

const AddForm = props => {
  const name = useRef()
  const difficulty = useRef()
  const link = useRef()
  const body = useRef()
  const situation = useRef()

  const handlePostMove = (e) => {
    e.preventDefault()

    const newMove = {
      "name": name.current.value,
      "difficulty_type": difficulty.current.value,
      "link": link.current.value,
      "body_region": body.current.value,
      "situation_type": situation.current.value
      }
      if(newMove.body_region_id === "nope" || newMove.situation_id === "nope"){
        window.alert("Don't Half Ass It!")
      }
      else{
        APImanager.post("moves", newMove)
        .then(() => {
          props.getMoves()
        }).then(()=>
          props.history.push({
              pathname: "/"
          }))
        }
    }


  return (
    <>
    <div align = "center">
    <main style={{ textalign: "center", width: 700 }} >
      <h1>Add A Move!</h1>

      <form className="form--sellProduct" onSubmit={handlePostMove}>

      <fieldset>
        <label htmlFor="title"> Name </label>
          <input ref={name} type="text"
            name="name"
            className="form-control"
            placeholder="name"
            required autoFocus />
        
        <label>Difficulty *</label>
        <select ref={difficulty} className="form-control" name="category" required >
          <option value="nope" disabled selected>Select Category</option>
          {
          props.difficulty.map((level) => {
            return <option value={level.id} >{level.level}</option>
            })
          }
        </select>
      </fieldset>

      <fieldset>
      <label htmlFor="link"> Link </label>
          <input ref={link} type="text"
            name="link"
            className="form-control"
            placeholder="Paste In A How To"
            required autoFocus />
      </fieldset>

      <fieldset>
      <label>Primary Body Region Used</label>
      <select ref={body} className="form-control" name="body region" required >
      <option value="nope" disabled selected>Please Select</option>
      {
       props.body_region.map(region => {
           return <option value={region.id} >{region.region}</option>
          })
       }
       </select>
      </fieldset>

      <fieldset>
      <label>Best Situation</label>
      <select ref={situation} className="form-control" name="situation" required >
      <option value="nope" disabled selected>Please Select</option>
      {
       props.situation.map(situation=> {
           return <option value={situation.id} >{situation.name}</option>
          })
       }
       </select>
      </fieldset>

      <fieldset>
        <button type="submit">
            Let's Boogie!
        </button>
      </fieldset>

    </form>
    </main>
    </div>
    </>
  );
};

export default AddForm;
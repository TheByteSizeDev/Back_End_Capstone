import React, { useRef } from "react";
import APImanager from "../../modules/APIManager"

const AddForm = props => {
  const name = useRef()
  const difficulty = useRef()
  const link = useRef()
  const body = useRef()
  const situation = useRef()

  const handleUpdatedMove = (e) => {
    e.preventDefault()
    const updatedMove = {
        "name": name.current.value,
        "difficulty_type": difficulty.current.value,
        "link": link.current.value,
        "body_region": body.current.value,
        "situation_type": situation.current.value
    }
    fetch(`http://localhost:8000/moves/${props.move.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${localStorage.getItem(
                "dadmoves_token"
            )}`
        },
        body: JSON.stringify(updatedMove)
    }).then(() => {
        props.getMoves()
        props.history.push({
            pathname: "/"
        })
      })
    }

  return (
    <>
    <div align = "center">
    <main style={{ textalign: "center", width: 700 }} >
      <h1>Edit Your Move!</h1>

      <form className="form--sellProduct" onSubmit={handleUpdatedMove}>

      <fieldset>
        <label htmlFor="title"> Name </label>
          <input ref={name} type="text"
            name="name"
            className="form-control"
            placeholder="name"
            value={props.move.name}
            required autoFocus />
        
        <label>Difficulty *</label>
        <select ref={difficulty} className="form-control" name="category" required >
          <option value="nope" disabled>Select Category</option>
          {
          props.difficulty.map((level) => {
            if(props.move.difficulty_type_id === level.id){
                return <option value={level.id} selected>{level.level}</option>
            }
            else if(props.move.difficulty_type !== level.level){
                return <option value={level.id} >{level.level}</option>
            }
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
            value={props.move.link}
            required autoFocus />
      </fieldset>

      <fieldset>
      <label>Primary Body Region Used</label>
      <select ref={body} className="form-control" name="body region" required >
      <option value="nope" disabled>Please Select</option>
      {
       props.body_region.map(region => {
           if(props.move.body_region_id === region.id){
            return <option value={region.id} selected >{region.region}</option>
           }
           else{
            return <option value={region.id} >{region.region}</option>
           }
          })
       }
       </select>
      </fieldset>

      <fieldset>
      <label>Best Situation</label>
      <select ref={situation} className="form-control" name="situation" required >
      <option value="nope" disabled>Please Select</option>
      {
       props.situation.map(situation=> {
            if(props.move.situation_type_id === situation.id){
                return <option value={situation.id} selected>{situation.name}</option>
            }
            else{
                return <option value={situation.id} >{situation.name}</option>
            }
            })
        }
       </select>
      </fieldset>

      <fieldset>
        <button type="submit">
            Edit!
        </button>
      </fieldset>

    </form>
    </main>
    </div>
    </>
  );
};

export default AddForm;
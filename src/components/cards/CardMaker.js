import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { Card, Grid, Button } from "semantic-ui-react"

const CardMaker = props => {
    const [currentUser, setCurrentUser] = useState({ user: {} })

    const getCurrentUser = () => {
        fetch(`http://localhost:8000/daddy_o/currentUser`, {
            method: "GET",
            headers :{
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Token ${localStorage.getItem("dadmoves_token")}`,
            }
        })
            .then(response => response.json())
            .then((currentUser) => setCurrentUser(currentUser))
    }

    const deleteMove = () => {
        fetch(
          `http://localhost:8000/moves/${props.move.id}`,
          {
            method: "DELETE",
            headers: {
              Authorization: `Token ${localStorage.getItem("dadmoves_token")}`
            }
          }
        ).then(() => {
          props.getMoves();
        });
      };

    useEffect(getCurrentUser, [])
    //FIXME: There is this weird thing where the buttons show up and then go away after fetch
   
  return (
    <>
    <Grid.Column>
      <Card>
        <Card.Content>
          <Card.Header href={props.move.link} target="_blank">{props.move.name}</Card.Header>
            <Card.Meta>
                <span>{props.move.difficulty_type.level}</span>
            </Card.Meta>
        </Card.Content>

        <Card.Content>
            <h4>{props.move.body_region.region}</h4>
        </Card.Content>

        <Card.Content>
            <p>Best Use: <br/>{props.move.situation_type.name}</p>
        </Card.Content>
      </Card>
      {
          props.move.daddy_o_id === currentUser.id ? (
          <>
          <Button as={Link} to={`/editform/${props.move.id}`}>
            Edit
          </Button>
          <Button onClick={deleteMove}>Delete</Button>
          </> ) : ( <> </>)
      }
      <br/>
      <br/>
    </Grid.Column>
    </>
  );
};

export default CardMaker;
 
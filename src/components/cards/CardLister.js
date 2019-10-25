import React from "react";
import CardMaker from "./CardMaker"
import { Grid } from "semantic-ui-react"

const CardLister = props => {

  return (
    <>
    <Grid  columns={3} divided>
    <Grid.Row>
          {
            props.moves.map(move => {
                return <CardMaker move={move} getMoves={props.getMoves} {...props} />
            })
          }
    </Grid.Row>
    </Grid>
    </>
  );
};

export default CardLister;
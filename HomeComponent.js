import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

function RenderCard({ item }) {
  return (
    <Card>
      <CardImg src={item.image} alt={item.name} />
      <CardBody>
        <CardTitle>{item.name}</CardTitle>
        <CardText>{item.price}</CardText>
      </CardBody>
    </Card>
  );
}

function Home(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md m-1">
          <RenderCard item={props.menu} />
        </div>
        <div className="col-md m-1">
          <RenderCard item={props.promotion} />
        </div>
      </div>
    </div>
  );
}


export default Home;

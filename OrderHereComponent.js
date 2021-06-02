import { render } from "@testing-library/react";
import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";

 function  RenderOrderHere({menu}) {
      return (
        <div className="col-md-5 m-1">
          <Card>
            <CardImg top src={menu.image} alt={menu.name} />
            <CardBody>
              <CardText>{menu.price}</CardText>
            </CardBody>
          </Card>
        </div>
      );
}           

  function OrderHereComponent(props) {
    if (props.menu) {
      return (
        <div className="container">
          <div className="row">
            <div className="col">
              <Breadcrumb>
                <BreadcrumbItem>
                  <Link to="/menu">Menu</Link>
                </BreadcrumbItem>
              </Breadcrumb>
              <h2>{props.menu.name}</h2>
              <hr />
            </div>
          </div>
          <div className="row">
            <RenderOrderHere menu={props.menu} />
          </div>
        </div>
      );
    } else {
      return <div />;
    }
  }


export default OrderHereComponent;

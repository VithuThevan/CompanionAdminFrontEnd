import React, { Component } from "react";
import "./orderstyle.css";
import Pending from "./pendingOrder";
import Ongoing from "./ongoingOrder";
import Complete from "./completedOrder";

class Orders extends Component {
  render() {
    return (
      <div className="conatainer">
        <div className="list-pending">
          <Pending />
        </div>
        <div className="list-ongoing">
          <Ongoing />
        </div>
        <div className="list-complete">
          <Complete />
        </div>
      </div>
    );
  }
}

export default Orders;

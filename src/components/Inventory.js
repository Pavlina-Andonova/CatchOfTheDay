import React, { Component } from "react";
import AddFishForm from "../components/AddFishForm";
import EditFishForm from "../components/EditFishForm";

class Inventory extends Component {
  render() {
    return (
      <div className="incentory">
        <h2> Inventory</h2>
        {/*Object.keys - return into an array */}
        {Object.keys(this.props.fishes).map(key => (
          <EditFishForm key={key} index={key} fish={this.props.fishes[key]} updateFish={this.props.updateFish} deleteFish={this.props.deleteFish} />
        ))}

        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSampleFishes}>
          Load Sample Fishes
        </button>
      </div>
    );
  }
}

export default Inventory;

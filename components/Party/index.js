import React, { Component } from "react";
import Party from "./presenter";

class Container extends Component {
  render() {
    return (
      <Party
        icon={this.props.icon}
        category={this.props.category}
        maxNumb={this.props.maxNumb}
        curNumb={this.props.curNumb}
        startTime={this.props.startTime}
        endTime={this.props.endTime}
      />
    );
  }
}

export default Container;

import React, { Component } from "react";

import "./list-item.css";

export default class ListItem extends Component {
  state = {
    done: false
  };

  render() {
    const { label, done, important } = this.props;

    return (
      <span className="wrapper-list-item">
        <span className="list-item-label">{label}</span>

        <button type="button" className="btn info">
          <i className="fa fa-exclamation" />
        </button>

        <button type="button" className="btn info">
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}

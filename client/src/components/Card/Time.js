import React, { Component } from 'react';
import { Card, Button, Form } from "react-bootstrap";
// import Button from 'react-bootstrap/lib/Button';
// import Form.Control from 'react-bootstrap/lib/Form.Control';
import { timeToInt } from 'time-number';
import TimePicker from 'react-bootstrap-time-picker';


class Time extends Component {
  constructor() {
    super();

    this.filterState = this.filterState.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);

    this.state = {
      format: 24,
      initialValue: "00:00",
      start: "00:00",
      end: "11:59",
      step: 30,
      onChange: this.handleTimeChange,
    };
  }

  handleTimeChange(value) {
    this.setState({ value });
  }

  filterState() {
    const ret = {...this.state};

    try {
      timeToInt(ret.start);
    } catch(ex) {
      ret.start = "00:00";
    }

    try {
      timeToInt(ret.end);
    } catch(ex) {
      ret.end = "12:00";
    }

    if (ret.step < 1) {
      ret.step = 60;
    }

    return ret;
  }

  render() {
    return (
      <div>
        <div>
          <TimePicker {...this.filterState(this.state)} />
        </div>
        <div style={{ marginTop: '40px' }}>
          <hr />
          <h1>Configurable props</h1>
          <h2>format</h2>
          <div>
            <Button
              children="AM"
              disabled={this.state.format === 12}
              onClick={() => { this.setState({ format: 12 }); }}
              style={{ marginRight: '15px' }}
            />
            <Button
              children="PM"
              disabled={this.state.format === 24}
              onClick={() => { this.setState({ format: 24 }); }}
            />
          </div>
          
        </div>
      </div>
    );
  }
}

export default Time;
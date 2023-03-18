import React from "react";

class Test1 extends React.Component {
  constructor(props) {
    console.clear();
    console.log(props);
    super();
    this.state = {
      s1: 0,
    };
  }

  buttonHandler = () => {
    let val = this.state.s1;
    val++;
    this.setState({ s1: val });
  };

  static getDerivedStateFromProps(props, state) {
    console.log("ger derive state");
    return null;
  }

  render() {
    console.log("render 1");
    return (
      <>
        {console.log("render 2")}
        <div>
          <button onClick={this.buttonHandler}>Push</button>
        </div>

        <div className="stateOut">{this.state.s1}</div>
      </>
    );
  }
}

export default Test1;

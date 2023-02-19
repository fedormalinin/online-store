import React from "react";

class Calc extends React.Component {
  state = {
    numbers: [1, 2, 900000],
  };

  addNumber = () => {
    let rndNum = Math.round(Math.random() * 10);
    console.log("hello world");
    this.setState({
      numbers: [...this.state.numbers, rndNum],
    });
  };

  componentDidMount() {
    console.log("Компонент отображен");
  }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log({ prevState, next: this.state });
  // }

  // componentWillUnmount() {
  //   console.log("компонент будет удален");
  // }

  render() {
    return (
      <div>
        <h1>My Cart</h1>

        <div className='calc'>
          <ul>
            {this.state.numbers.map((item, index) => (
              <li style={{ fontSize: "50px" }}>{index + 1 + ": " + item}</li>
            ))}
          </ul>
          <div style={{ fontSize: "50px" }} onClick={this.addNumber}>
            Add number
          </div>
        </div>
      </div>
    );
  }
}

export default Calc;

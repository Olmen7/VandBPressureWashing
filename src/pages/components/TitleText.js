import { Component } from "react";
import "./Components.css";

class TitleText extends Component {
  render() {
    return (
      <span aria-label={this.props.copy} role={this.props.role}>
        {this.props.copy.split("").map(function (char, index) {
          let style = { "animation-delay": 0.5 + index / 10 + "s" };
          return (
            <>
              <span
                className="titleText"
                aria-hidden="true"
                style={style}
                key={index}
              >
                {char}
              </span>
            </>
          );
        })}
      </span>
    );
  }
}
export default TitleText;

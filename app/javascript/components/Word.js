import React from "react"
import PropTypes from "prop-types"

const ZERO_KEY = 48;
const DIGITS = 10;

class Word extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      highlight: 'transparent'
    };
  }

  highlight = (evnt) => {
    this.setState({
      highlight: 'yellow'
    });
  };

  render () {
    let wordStyle = {
      backgroundColor: this.state.highlight
    }

    return (
      <span className="word"
            style={ wordStyle }
            onMouseOver={ this.highlight }
            onKeyDown={ this.keydown }
            onKeyUp={ this.keyup } >
        { this.props.children }
      </span>
    );
  }
}

export default Word

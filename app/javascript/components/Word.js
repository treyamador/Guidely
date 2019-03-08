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
    let not_highlighted = true;
    for (let i = 0; i < DIGITS && not_highlighted; ++i) {
      if(this.props.keymap[ZERO_KEY+i]) {
        this.setState({
          highlight: this.props.colorCodes[i]
        });
        not_highlighted = false;
      }
    }
  };

  render() {
    let wordStyle = {
      backgroundColor: this.state.highlight
    }

    return (
      <span className="word"
            style={ wordStyle }
            onMouseOver={ this.highlight } >
        { this.props.children }
      </span>
    );
  }
}

export default Word

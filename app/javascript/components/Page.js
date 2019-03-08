import React from "react"
import PropTypes from "prop-types"
import Word from './Word'

const COLOR_MAP = [
  '#F2D7D5', '#F7DC6F', '#7DCEA0', '#85C1E9', '#BB8FCE',
  '#F1948A', '#F8C471', '#FCF3CF', '#D4EFDF', '#D6EAF8'
];

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.keyListener();
    this.state = {
      text: this.parse(this.props.text)
    };
  }

  keyListener = () => {
    this.keymap = new Map();
    document.addEventListener('keydown', (evnt) => {
      this.keymap[evnt.which] = true;
    });
    document.addEventListener('keyup', (evnt) => {
      delete this.keymap[evnt.which];
    });
  };

  parse = (text) => {
    return text.split(/(\s+)/).map(
      (word, index) => <Word key={'word-'+index} keymap={ this.keymap }>{ word }</Word>
    );
  };

  render () {
    return (
      <div className="page__wrapper">
        <div className="page" >
          <div className="page__text">
            { this.state.text }
          </div>
        </div>
      </div>
    );
  }
}

export default Page

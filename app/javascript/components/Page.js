import React from "react"
import PropTypes from "prop-types"
import Word from './Word'

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.parse(this.props.text)
    };
  }

  parse = (text) => {
    return text.split(/(\s+)/).map(
      (word, index) => <Word key={'word-'+index}>{ word }</Word>
    );
  };

  display = () => {

  }

  render () {
    return (
      <div className="page__wrapper">
        <div className="page">
          <div className="page__text">
            { this.state.text }
          </div>
        </div>
      </div>
    );
  }
}

export default Page

import React from "react"
import PropTypes from "prop-types"

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.parse(this.props.text),
      highlights: []
    };
  }

  parse = (text) => {
    return text.split(/(\s+)/);
  };

  render () {
    return (
      <div className="page__wrapper">
        <div className="page">
          <div className="page__text">
            { this.props.text }
          </div>
        </div>
      </div>
    );
  }
}

export default Page

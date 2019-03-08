import React from "react"
import PropTypes from "prop-types"

class Word extends React.Component {
  render () {
    return (
      <span className="word">
        { this.props.children }
      </span>
    );
  }
}

export default Word

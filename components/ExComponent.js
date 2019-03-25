import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchRequest } from '../actions/exampleActions';

class ExComponent extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

ExComponent.propTypes = {
  fetchRequest: PropTypes.func.isRequired,
  example: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  example: state.example.example
})

export default connect(mapStateToProps, { fetchRequest })(ExComponent);
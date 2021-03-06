import React, { Component } from 'react';
import { filterCompleted, filterActive, showAll } from '../actions'
import { connect } from 'react-redux'

class FilterMenu extends Component {
  constructor(props){
    super(props)
  }
  
  render() {
    return (
      <footer className='FilterMenu'>
        <a href='_blank' id='all' onClick={() => this.props.showAll()}>Show All</a>
        <a href='_blank' id='active' onClick={() => this.props.filterActive()}>Show Active</a>
        <a href='_blank' id='completed' onClick={() => this.props.filterCompleted()}>Show Completed</a>
      </footer>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  filterCompleted: () => dispatch(filterCompleted()),
  filterActive: () => dispatch(filterActive()),
  showAll: () => dispatch(showAll())
})

export default connect(null, mapDispatchToProps)(FilterMenu);
import React, {Component} from 'react';

class SearchBar extends Component {
  // render method must be in class based component..return located in stment
  constructor(props) {
  	super(props);
    this.state = { term: ''};
  }
  render() {
  	//onChange..react prop..find more in react docs
  	return (
  	<div className="search-bar">     
      <input
      value= {this.state.term}
      onChange={event => this.onInputChange(event.target.value)} />    
     </div>
    );
  } 

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;

import React, { Component} from 'react';

export class Search extends Component {
  state = {
    text: ''
  };
 onChange = e => {
   this.setState({[e.target.name]:e.target.value});
 }
 onSubmit = e => {
    e.preventDefault();
    this.props.searchuser =
 } 
  render() {
    return (
      <div>
         <form className="form">
           <input type="text" name="text" value = {this.state.text} placeholder="Search Users" onChange={this.onChange}/>
           <input type="Submit" value="Search" onSubmit={this.onSubmit}  className="btn btn-dark btn-block"/>
        </form>
      </div>
    )
  }
}
export default  Search;
import React, { Component} from 'react';
import PropTypes from 'prop-types';
export class Search extends Component {
  state = {
    text: ''
  };
  static propTypes = {
    OnSearchUsers:PropTypes.func.isRequired
  }
 onChange = e => {
   this.setState({ [e.target.name] : e.target.value});
 };
 onSubmit = e => {
   // console.log(this.state.text);
    e.preventDefault();
    this.props.OnSearchUsers(this.state.text);
   this.setState({text:''});
 } ;
  render() {
    return (
      <div>
         <form className="form" onSubmit={this.onSubmit} >
           <input type="text" name="text" value = {this.state.text} placeholder="Search Users" onChange = {this.onChange}/>
           <input type="Submit" value="Search"  className="btn btn-dark btn-block"/>
        </form>
      </div>
    )
  }
}
export default  Search;
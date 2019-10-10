import React, { Component} from 'react';
import PropTypes from 'prop-types';
export class Search extends Component {
  state = {
    text: ''
  };
  static propTypes = {
    OnSearchUsers:PropTypes.func.isRequired,
    showClear:PropTypes.bool.isRequired,
    OnClearUsers:PropTypes.func.isRequired,
    setAlert:PropTypes.func.isRequired
  }
 onChange = e => {
   this.setState({ [e.target.name] : e.target.value});
 };
 onSubmit = e => {
   // console.log(this.state.text);
    e.preventDefault();
     if(this.state.text == ''){
        this.props.setAlert('Please enter search text','light');
     }
     else{
      this.props.OnSearchUsers(this.state.text);
      this.setState({text:''});
     }
 } ;
 /*ClearUsers = e =>{
    this.props.OnClearUsers();
 }*/
  render() {
    const { showClear,OnClearUsers } = this.props;
    return (
      <div>
         <form className="form" onSubmit={this.onSubmit} >
           <input type="text" name="text" value = {this.state.text} placeholder="Search Users" onChange = {this.onChange}/>
           <input type="Submit" value="Search"  className="btn btn-dark btn-block"/>
        </form>
        { showClear && 
         <button  value="Clear" onClick= {OnClearUsers}  className="btn btn-light btn-block">Clear</button> }
       
      </div>
    )
  }
}
export default  Search;
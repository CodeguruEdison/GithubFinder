import React, { Component } from 'react';
import { render } from 'react-dom';
import Navbar from './components/layout/Navbar';
import UserItem from './components/users/useritem';
import Users from './components/users/users';
import './style.css';
import axios from 'axios';
import Search from './components/users/Search';

interface AppProps { }
interface AppState {
  name: string;
}

//class App extends Component<AppProps, AppState> {
  class App extends Component {
  state = {
    users:[],
    loading:false
  }
   /*async componentDidMount(){
      this.setState({loading:true});
      const res=  await axios.get('https://api.github.com/users');
      console.log(res.data)
      this.setState ({users:res.data,loading:false});

    }*/
   OnSearchUsers = async text => {
      this.setState({loading:true});
      const res=  await axios.get(`https://api.github.com/search/users?q=${text}`);
      //console.log(res.data)
      this.setState ({users:res.data.items,loading:false});
    }
    OnClearUsers = () => {
       this.setState({users:[],loading:false});
    }
  /*constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
  }*/

  render() {
    return (
      <div>
       
        <Navbar></Navbar>
         <div className="container">
          <Search OnSearchUsers={this.OnSearchUsers} OnClearUsers={this.OnClearUsers}     showClear={this.state.users.length>0 ? true: false} />
          <Users users={this.state.users} loading={this.state.loading} ></Users>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

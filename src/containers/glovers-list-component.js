import React, {PureComponent} from "react";
import UserComponent from "../components/user-component";
import {getUsers, addUser, deleteUser, transformUserData}  from '../utils/data-service';

export default class GloversListComponent extends PureComponent {
    constructor(){
        super();
        this.state = {
            input: '',
            users: [],
            loading: true,
            error: null
        }
    }

    componentDidMount(){
        this.getUsers();
    }

    getUsers = () => {
        this.setState({loading: true});
        getUsers().then(response => response.json())
            .then(data => {
                const users = transformUserData(data);
                this.setState({users, error: null})
                console.log('data', data);
            }).catch(e => {
                this.setState({users: [], error: e})
            }).finally(() => {
                this.setState({loading: false})
            });
    }

    clickHandler = () => {
        const {input} = this.state;
        addUser(input).then(response => response.json())
            .then(data => {
                this.getUsers();
                console.log('add user', data);
            }).catch(e => {
               // this.setState({users: [], error: e})
            }).finally(() => {
               // this.setState({loading: false})
            });
        console.log('clicked', input);
    }

    inputChangeHandler = (event) => {
        this.setState({input: event.target.value});
    }

    removeUser = (id) => {
       deleteUser(id).then(response => response.json())
            .then(data => {
                this.getUsers();
                console.log('delete user', data);
            }).catch(e => {
               // this.setState({users: [], error: e})
            }).finally(() => {
               // this.setState({loading: false})
            });
    }

    render(){
        const {input, users, loading} = this.state;
        return (
            <div className="container">
                <div className="add-user">
                    <input type="text" placeholder="Add Users" value={input} onChange={this.inputChangeHandler}/>
                    <button type="submit" onClick={this.clickHandler}>Submit</button>
                </div>
                <div className="user-list">
                    {loading && <div>Loading...</div>}
                    {!loading && users.map(user => (
                      <UserComponent user={user} key={user.id} removeUser={this.removeUser}/>
                    ))}
                </div>
            </div>
        )
    }
}
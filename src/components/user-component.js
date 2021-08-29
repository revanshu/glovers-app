import React from 'react';

export default function UserComponent(props){
    const {user, removeUser} = props;
    return (
        <div className="users">
            <div><span>{user.name}</span></div>
            <div><button type="submit" onClick={() => {removeUser(user.id)}}>Remove</button></div>
        </div>
    );

}
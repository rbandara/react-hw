import React, { Component } from 'react';

class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = { isLoggedIn: false };
        this.state = {rsession:"", token:""};
    }

    handleLoginClick() {
        this.setState({ isLoggedIn: true });
    }

    handleLogoutClick() {
        this.setState({ isLoggedIn: false });
    }

     handleSubmit(event) {
        	fetch(`http://jsonplaceholder.typicode.com/posts`)
            .then(result=>result.json())
            // .then(items=> {console.log(items[0].userId)})
            .then(items=> {this.setState({rsession:items[0].userId, token:items[1] })})
        event.preventDefault();
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;

        let button = null;
        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />;
        } else {
            button = <LoginButton onClick={this.fetchData} />;
        }

        return (
        <form onSubmit={this.handleSubmit}>
          	<input type="hidden" name="app" value="10003600" />
            <input type="hidden" name="rsession" value="" />
            <input type="hidden" name="token" value=""/>
            <input type="hidden" name="redirectReq" value="true"/>    
        <input type="submit" value="Submit" />
      </form>
    );
    }
}

export default LoginControl;

function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Login
    </button>
    );
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
    </button>
    );
}


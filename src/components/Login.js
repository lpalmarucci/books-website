import React, { Component } from 'react'

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.handleSubmitForm = this.handleSubmitForm.bind(this);
        this.removeErrorClass = this.removeErrorClass.bind(this);
        this.usernameRef = React.createRef(null);
        this.passwordRef = React.createRef(null);
    }

    handleSubmitForm(e) {
        e.preventDefault();
        this.usernameRef.current.classList.add('form-control-input-error');
        if (this.usernameRef.current.value.toLowerCase() === 'admin' && this.passwordRef.current.value === 'admin') {
            // this.props.history.push('/books');
        }

    }

    removeErrorClass() {
        if (this.usernameRef.current.className.includes('form-control-input-error')) {
            this.usernameRef.current.classList.remove('form-control-input-error')
        }
    }

    render() {
        return (
            <div className="container login-container">
                <h1 className="title">Login</h1>
                <form method="POST" action="/" onSubmit={this.handleSubmitForm} className="flex-container form-container">
                    <input type="text" className="form-control-input" ref={this.usernameRef} placeholder="Username" onFocus={this.removeErrorClass} />
                    <input type="password" className="form-control-input" ref={this.passwordRef} placeholder="Password" onChange={this.removeErrorClass} />
                    <button type="submit" className="button">Invia</button>
                </form>
            </div>
        )
    }
}

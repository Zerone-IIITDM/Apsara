import React, { Component } from 'react';
import { Button, Form, Grid, Header, Segment, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';

import { loginUser } from './actions/actions';

function mapDispatchToProps(dispatch) {
    return {
        loginUser: (email, password) => dispatch(loginUser(email, password))
    };
}

class LoginForm extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        };

        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.loginUser(this.state.email, this.state.password);
    }

    handleUsername(e) {
        e.preventDefault();
        this.setState({ email: e.target.value });
    }

    handlePassword(e) {
        e.preventDefault();
        this.setState({ password: e.target.value });
    }

    render() {

        let disabled = true;

        if (this.state.email !== '' && this.state.password !== '') {
            disabled = false;
        }

        return (
            <div className='login-form'>
                <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as='h2' color='blue' textAlign='center' icon>
                            <Icon name='user' /> Log-in to your account
                </Header>
                        <Form size='small' onSubmit={this.handleSubmit}>
                            <Segment>
                                <Form.Input onChange={this.handleUsername} fluid icon='user' iconPosition='left' placeholder='Email' />
                                <Form.Input
                                    onChange={this.handlePassword}
                                    fluid
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='Password'
                                    type='password'
                                />

                                <Button type='submit' color='blue' fluid size='large' disabled={disabled} onClick={this.login}>
                                    Login
                                </Button>
                            </Segment>
                        </Form>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(LoginForm);
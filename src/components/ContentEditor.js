import React, { Component } from 'react';
import { Form, Button, Grid, Icon, Segment, Header, Menu } from 'semantic-ui-react';

export default class ContentEditor extends Component {
    constructor() {
        super();
        this.state = {
            activeItem: 'about the event'
        };
    }

    renderItem = () => {
        let content = null;
        if (this.state.activeItem === 'about the event') {
            content = <div>
                <Form>
                    <Form.TextArea style={{ minHeight: 300 }} label='Event Details' placeholder='Enter your event details here...' />
                    <Form.Button color='blue'>Save</Form.Button>
                </Form>
            </div>;
        }
        else if (this.state.activeItem === 'prizes') {
            content = <div>
                <Form>
                    <Form.Input fluid required label='1st Prize' placeholder='Enter amount...'/>
                    <Form.Input fluid required label='2nd Prize' placeholder='Enter amount...'/>
                    <Form.Input fluid required label='3rd Prize' placeholder='Enter amount...'/>
                    <Form.Button color='blue'>Save</Form.Button>
                </Form>
            </div>
        }
        else if (this.state.activeItem === 'contact') {
            content = <div>
                <Form>
                    <Form.Input fluid required label='Organiser(1) Mobile Number' placeholder='Enter mobile number...'/>
                    <Form.Input fluid required label='Organiser(1) Email ID' placeholder='Enter your email ID...'/>
                    <Form.Input fluid label='Organiser(2) Mobile Number' placeholder='Enter mobile number...'/>
                    <Form.Input fluid label='Organiser(2) Email ID' placeholder='Enter your email ID...'/>
                    <Form.Button color='blue'>Save</Form.Button>
                </Form>
            </div>
        }
        return content;
    }

    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name });
    }

    render() {
        const { activeItem } = this.state;
        return (
            <div>
                <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
                    <Grid.Column>
                        <Header as='h2' color='blue' textAlign='center' icon>
                            <Icon name='edit' /> Edit Details
                        </Header>
                    </Grid.Column>
                </Grid>
                <Grid style={{ height: '100%' }}>
                    <Grid.Column width={4}>
                        <Menu style={{ height: '65vh' }} color='blue' fluid vertical pointing secondary>
                            <Menu.Item name='about the event' active={activeItem === 'about the event'} onClick={this.handleItemClick} />
                            <Menu.Item name='prizes' active={activeItem === 'prizes'} onClick={this.handleItemClick} />
                            <Menu.Item
                                name='contact'
                                active={activeItem === 'contact'}
                                onClick={this.handleItemClick}
                            />
                        </Menu>
                    </Grid.Column>

                    <Grid.Column stretched width={11}>
                        <Segment>
                            {this.renderItem()}
                        </Segment>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}
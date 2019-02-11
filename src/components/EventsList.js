import React, { Component } from 'react';
import { List, Button } from 'semantic-ui-react';

class EventsList extends Component {
    render() {
        return (
            <div>
                <h2 className='your-events-header'>Your Events</h2>
                <List bulleted divided relaxed size='large'>
                    <List.Item>
                        <List.Content floated='right'>
                            <Button color='blue'>Edit Details</Button>
                        </List.Content>
                        Drishyam
                </List.Item>
                    <List.Item>
                        <List.Content floated='right'>
                            <Button color='blue'>Edit Details</Button>
                        </List.Content>
                        PhotON
                </List.Item>
                </List>
            </div>
        );
    }
}

export default EventsList;
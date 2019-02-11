import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

import EventsList from './EventsList';
import ContentEditor from './ContentEditor';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <Grid style={{ height: '100%' }} textAlign='justified'>
                    <Grid.Column>
                        <ContentEditor />
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default Dashboard;
import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { connect } from 'react-redux';

import './styles.css';

function mapStateToProps(state) {
    return {
        userLoading: state.auth.userLoading
    }
}

class Navbar extends Component {
    render() {
        //console.log(this.props.auth)
        return (
            <Menu borderless size='massive' inverted>
                <Menu.Item>
                    Apsara
                </Menu.Item>
                {this.props.userLoading === 2 ? <Menu.Item position='right'>Logout</Menu.Item> : null}
            </Menu>
        )
    }
}

export default connect(mapStateToProps)(Navbar);
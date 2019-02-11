import React from 'react';
import { Menu } from 'semantic-ui-react';

import './styles.css';

const Navbar = () => {
    return (
        <Menu borderless size='massive' inverted>
            <Menu.Item>
                Apsara
            </Menu.Item>
            {/* <Menu.Item position='right'>
                Logout
            </Menu.Item> */}
        </Menu>
    );
}

export default Navbar;
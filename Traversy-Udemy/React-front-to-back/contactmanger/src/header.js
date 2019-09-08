import React from 'react';
import PropTypes from 'prop-types';

const Header = props => {
    const {branding} = props;
    return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0'/>

    );
};

Header.defaultProps = {
    branding: 'My App'
};

Header.propTypes = {
    branding: PropTypes.string.isRequired
};

export default Header;
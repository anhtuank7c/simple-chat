import React, { Component } from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';
import RootNavigation from './navigations/RootNavigation';

class AppNavigator extends Component {
    render() {
        return (
            <RootNavigation
                navigation={addNavigationHelpers({
                    dispatch: this.props.dispatch,
                    state: this.props.nav
                })}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return { nav: state.nav };
};

export default connect(mapStateToProps)(AppNavigator);

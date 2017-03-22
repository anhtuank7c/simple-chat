import { StackNavigator } from 'react-navigation';

import Login from '../screens/Login';
import Chat from '../screens/Chat';

const RootNavigation = StackNavigator({
    Unauthorized: { screen: Login },
    Authorized: { screen: Chat },
}, {
        headerMode: 'screen'
    });

export default RootNavigation;

/**
 * navigate (push)
 *   #              #
 *   # Unauthorized #
 *   # Authorized   #
 *   ################
 */

/**
 *  1) RESET
 *   #              #
 *   #              #
 *   #              #
 *   ################
 *
 *  2) NAVIGATE
 *
 *   #              #
 *   #  Authorized  #
 *   #              #
 *   ################
 */

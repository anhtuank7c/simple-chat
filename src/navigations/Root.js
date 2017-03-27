import { StackNavigator } from 'react-navigation';
import Authorized from './Authorized';
import Login from '../screens/unauthorized/Login';

const Root = StackNavigator({
    Unauthorized: { screen: Login },
    Authorized: { screen: Authorized },
}, {
        headerMode: 'screen',
        navigationOptions: {
            header: {
                visible: false
            }
        }
    });

export default Root;

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

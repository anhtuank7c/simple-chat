import RootNavigation from '../navigations/RootNavigation';

export default (state, action) => {
    const newState = RootNavigation.router.getStateForAction(action, state);
    return newState || state;
};

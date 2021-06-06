import { AppHeader } from '../app-header'
import { Modal } from '../modal';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Main } from '../main'
import { useSelector, shallowEqual } from 'react-redux';

function App () {
    const {isOpen} = useSelector(store => ({
        isOpen: store.modal.isOpen
    }), shallowEqual)
    return (
        <>
        <AppHeader /> 
        <Router>
        <Switch>
            <Route path="/">
                <Main/>
            </Route>
            <Route path="/login" exact={true}>
                
            </Route>
            <Route path="/register" exact={true}>
                
            </Route>
            <Route path="/forgot-password" exact={true}>
                
            </Route>
            <Route path="/reset-password" exact={true}>
                
            </Route>
            <Route path="/feed" exact={true}>
                
            </Route>
        </Switch>
        </Router>
        {isOpen && <Modal/>}
        </>
    )
}
export default App;
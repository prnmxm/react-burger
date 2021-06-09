import { AppHeader } from '../app-header'
import { Modal } from '../modal';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useSelector, shallowEqual } from 'react-redux';
import {Main, Login, Registration, ForgotPassword, ResetPassword, Feed, Profile, OrderDetails} from '../../pages'
function App () {
    const {isOpen} = useSelector(store => ({
        isOpen: store.modal.isOpen
    }), shallowEqual)
    return (
        <>
        <Router>
        <AppHeader /> 
        <Switch>
            <Route path="/" exact={true}>
                <Main/>
            </Route>
            <Route path="/login" exact={true}>
                <Login/>
            </Route>
            <Route path="/register" exact={true}>
                <Registration/>
            </Route>
            <Route path="/forgot-password" exact={true}>
                <ForgotPassword/>
            </Route>
            <Route path="/reset-password" exact={true}>
                <ResetPassword/>
            </Route>
            <Route path="/feed" exact={true}>
                <Feed/>
            </Route>
            <Route path="/feed/:id" exact={true}>
                <OrderDetails/>
            </Route>
            <Route path="/profile">
                <Profile/>
            </Route>
            <Route>
                    <h1> 404 </h1>
            </Route>
        </Switch>
        </Router>
        {isOpen && <Modal/>}
        </>
    )
}
export default App;
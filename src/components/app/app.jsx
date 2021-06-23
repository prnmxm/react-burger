import { AppHeader } from '../app-header'
import { Modal } from '../modal';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useSelector, shallowEqual } from 'react-redux';
import {Main, Login, Registration, ForgotPassword, ResetPassword, Feed, Profile, OrderDetails} from '../../pages'
import {ProtectedRoute} from '../protected-route'
function App () {
    const {isOpen} = useSelector(store => ({
        isOpen: store.modal.isOpen
    }), shallowEqual)
    return (
        <>
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
            <ProtectedRoute path="/profile">
                <Profile/>
            </ProtectedRoute>
            <Route>
                    <h1> 404 </h1>
            </Route>
        </Switch>
        {isOpen && <Modal/>}
        </>
    )
}
export default App;
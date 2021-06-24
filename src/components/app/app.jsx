import { AppHeader } from '../app-header'
import { Modal } from '../modal';
import { BrowserRouter as Router, Switch, Route, useHistory,
	useLocation } from 'react-router-dom';
import { useSelector, shallowEqual } from 'react-redux';
import {Main, Login, Registration, ForgotPassword, ResetPassword, Feed, Profile, OrderDetails} from '../../pages'
import {ProtectedRoute} from '../protected-route'
import { IngredientDetails } from '../ingredient-details';
import { push } from 'connected-react-router';
import { useDispatch } from 'react-redux';
function App () {
    const location = useLocation();
	const history = useHistory();
    const dispatch = useDispatch();
	const background = (history.action === 'PUSH' || history.action === 'REPLACE') && location.state && location.state.background;
    const {isOpen} = useSelector(store => ({
        isOpen: store.modal.isOpen
    }), shallowEqual)
    return (
        <>
        <AppHeader /> 
        <Switch location={background || location}>
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
            <Route path="/ingredients/:id">
            <IngredientDetails/>
            </Route>
            <Route>
                    <h1> 404 </h1>
            </Route>
        </Switch>
        {isOpen && <Modal/>}
        {background &&
				(<>
					<Route path='/ingredients/:id'><Modal close={() => {
                        dispatch(push('/'))
                    }}><IngredientDetails/></Modal></Route>
                    <Route path='/feed/:id'><Modal close={() => {
                        dispatch(push('/feed'))
                    }}><OrderDetails/></Modal></Route>
                    <Route path='/profile/orders/:id'><Modal close={() => {
                        dispatch(push('/profile/orders'))
                    }}><OrderDetails/></Modal></Route>
				</>
        )}
        </>
    )
}
export default App;
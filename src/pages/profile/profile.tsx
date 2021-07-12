// @ts-nocheck
import { ProfileNav } from '../../components/profile-nav'
import styles from './profile.module.scss'
import {ProfileInfo} from '../../components/profile-info';
import {ProfileOrders} from '../../components/profile-orders';
import {OrderDetails} from '../order-details';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
export default function Profile () {
    const id = useRouteMatch('/profile/orders/:id');
    return (
        <div className={styles.container}>
            {!id && <div className={styles.left}>
                <ProfileNav/>
            </div>}
            <Switch>
				<Route path="/profile" exact={true}>
					<ProfileInfo/>
				</Route>
				<Route path="/profile/orders" exact={true} >
					<ProfileOrders/>
				</Route>
                <Route path="/profile/orders/:id" exact={true} >
					<OrderDetails/>
				</Route>
                <Route>
                    <h1> 404 </h1>
                </Route>
			</Switch>
        </div>
    )
}
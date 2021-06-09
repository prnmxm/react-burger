import { ProfileNav } from '../profile-nav'
import styles from './profile.module.scss'
import { Switch, Route, Link } from 'react-router-dom';
import {ProfileInfo} from '../profile-info';
import {ProfileOrders} from '../profile-orders';
export default function Profile () {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
            <ProfileNav/>
            </div>
            <Switch>
				<Route path="/profile" exact={true}>
					<ProfileInfo/>
				</Route>
				<Route path="/profile/orders" exact={true} >
					<ProfileOrders/>
				</Route>
			</Switch>
        </div>
    )
}
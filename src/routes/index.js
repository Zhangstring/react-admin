import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '@/pages/Login';
import Admin from '@/Admin';
import Home from '@/pages/Home';
import Button from '@/pages/UI/Button';
import Carousel from '@/pages/UI/Carousel';
import Gallery from '@/pages/UI/Gallery';
import Loading from '@/pages/UI/Loading';
import Message from '@/pages/UI/Message';
import Modal from '@/pages/UI/Modal';
import Notification from '@/pages/UI/Notification';
import Tab from '@/pages/UI/Tab';
export default class Routes extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<Switch>
						<Route path="/login" component={Login} />
						<Route
							path="/"
							component={() => (
								<Admin>
									<Switch>
										<Route path="/home" component={Home} />
										<Route path="/ui/button" component={Button} />
										<Route path="/ui/carousel" component={Carousel} />
										<Route path="/ui/gallery" component={Gallery} />
										<Route path="/ui/loading" component={Loading} />
										<Route path="/ui/message" component={Message} />
										<Route path="/ui/modal" component={Modal} />
										<Route path="/ui/notification" component={Notification} />
										<Route path="/ui/tab" component={Tab} />
									</Switch>
								</Admin>
							)}
						/>
					</Switch>
				</div>
			</Router>
		);
	}
}

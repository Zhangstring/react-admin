import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import MenuConfig from '../../config/menuConfig';
import { connect } from 'react-redux';
import { changeMenu } from '@/redux/action';
import './index.less';
const SubMenu = Menu.SubMenu;
class NavLeft extends React.Component {
	state = {
		currentKey: '',
		current: '/home'
	};
	componentWillMount() {
		const url = window.location.href.split('3000')[1];
		this.setState({
			current: url
		});

		const menuTreeNode = this.renderMenu(MenuConfig);
		this.setState({
			menuTreeNode,
			theme: 'dark'
		});
	}
	componentDidMount() {
		const url = window.location.href.split('3000')[1];
		let title = '';
		MenuConfig.forEach(item => {
			if (item.children) {
				return item.children.forEach(child => {
					if (child.key === url) {
						title = child.title;
					}
				});
			}
			if (item.key === url) {
				title = item.title;
			}
		});
		setTimeout(() => {
			const { dispatch } = this.props;

			dispatch(changeMenu(title));
		}, 200);
	}
	handleClick = ({ item, key }) => {
		if (key === this.state.currentKey) {
			return;
		}
		const { dispatch } = this.props;
		dispatch(changeMenu(item.props.title));
		this.setState({
			currentKey: key,
			current: key
		});
	};
	renderMenu = data => {
		return data.map(item => {
			if (item.children) {
				return (
					<SubMenu title={item.title} key={item.key}>
						{this.renderMenu(item.children)}
					</SubMenu>
				);
			}
			return (
				<Menu.Item title={item.title} key={item.key} onClick={this.handleClick}>
					<Link to={item.key}>{item.title}</Link>
				</Menu.Item>
			);
		});
	};
	render() {
		return (
			<div>
				<div className="logo">
					<h1>MS</h1>
				</div>
				<Menu mode="inline" theme={this.state.theme} selectedKeys={[this.state.current]}>
					{this.state.menuTreeNode}
				</Menu>
			</div>
		);
	}
}
export default connect()(NavLeft);

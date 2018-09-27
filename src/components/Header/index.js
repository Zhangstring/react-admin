import React from 'react';
import { Row, Col } from 'antd';
import './index.less';
import Utils from './../../utils/utils';
import { connect } from 'react-redux';
import { getWeatherApiData } from '../../api/index';
class Header extends React.Component {
	state = {};
	componentWillMount() {
		Utils.createScript('https://3gimg.qq.com/lightmap/components/geolocation/geolocation.min.js').then(() => {
			var geolocation = new window.qq.maps.Geolocation('OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77', 'myapp');
			geolocation.getLocation(showPosition, showErr);
			const that = this;
			function showPosition(result) {
				console.log(result);
				that.setState({
					city: result.city
				});
				getWeatherApiData(result.city).then(res => {
					let data = res.results[0].weather_data[0];
					that.setState({
						weather: data.weather,
						picUrl: data.dayPictureUrl
					});
				});
			}
			function showErr(err) {
				console.log(err);
			}
		});

		setInterval(() => {
			let time = Utils.formatDate();
			this.setState({
				time
			});
		}, 200);
	}
	render() {
		const { menuName } = this.props;
		return (
			<div>
				<Row>
					<Col span="24">
						<div className="header-info">
							<span>欢迎,</span>
							<span className="userName">zxj</span>
							<a>退出</a>
						</div>
					</Col>
				</Row>
				<Row className="breadcrumb">
					<div className="breadcrumb-title">{menuName || '首页'}</div>
					<div className="weather">
						<span>{this.state.time}</span>
						<span>{this.state.city}</span>
						<span>{this.state.weather}</span>
						<img src={this.state.picUrl} alt="天气" />
					</div>
				</Row>
			</div>
		);
	}
}
const mapStateToProps = state => {
	return {
		menuName: state.menuName
	};
};
export default connect(mapStateToProps)(Header);

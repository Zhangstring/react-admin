import Utils from '../utils/utils';

export function getWeatherApiData(city) {
	return Utils.jsonp(
		`http://api.map.baidu.com/telematics/v3/weather?location=${encodeURIComponent(
			city
		)}&output=json&ak=3p49MVra6urFRGOT9s8UBWr2`
	);
}

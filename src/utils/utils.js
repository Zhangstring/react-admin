import Jsonp from 'jsonp';
export default {
	formatDate: function() {
		let now = new Date();
		return (
			now.getFullYear() +
			'-' +
			(now.getMonth() + 1) +
			'-' +
			now.getDate() +
			' ' +
			now.getHours() +
			':' +
			now.getMinutes() +
			':' +
			(now.getSeconds() < 10 ? '0' + now.getSeconds() : now.getSeconds())
		);
	},
	jsonp: function(url) {
		return new Promise((resolve, reject) => {
			Jsonp(
				url,
				{
					param: 'callback'
				},
				function(err, response) {
					if (response.status === 'success') {
						resolve(response);
					} else {
						reject(response.message);
					}
				}
			);
		});
    },
    createScript: function(url) {
        return new Promise((resolve, reject) => {
            let script = document.createElement('script')
            script.async = true
            script.src = url;
            document.body.appendChild(script)

            script.addEventListener('load', function() {
                resolve()
            })
        })
    }
};

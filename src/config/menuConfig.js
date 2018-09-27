const MenuConfig = [
	{
		title: '首页',
		key: '/home'
	},
	{
		title: 'UI',
		key: '/ui',
		children: [
			{
				title: 'Button',
				key: '/ui/button'
			},
			{
				title: 'modal',
				key: '/ui/modal'
			},
			{
				title: 'Loading',
				key: '/ui/loading'
			},
			{
				title: 'notification',
				key: '/ui/notification'
			},
			{
				title: 'messages',
				key: '/ui/message'
			},
			{
				title: 'tabs',
				key: '/ui/tab'
			},
			{
				title: 'gallery',
				key: '/ui/gallery'
			},
			{
				title: 'carousel',
				key: '/ui/carousel'
			}
		]
	},
	{
		title: 'form',
		key: '/form',
		children: [
			{
				title: 'login',
				key: '/form/login'
			},
			{
				title: 'register',
				key: '/form/register'
			}
		]
	}
];
export default MenuConfig;

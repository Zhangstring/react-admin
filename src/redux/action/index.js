export const type = {
	MENU_NAME: 'MENU_NAME'
};

export function changeMenu(newName) {
	console.log(newName);
	return {
		type: type.MENU_NAME,
		newName
	};
}

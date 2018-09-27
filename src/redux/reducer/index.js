import { type } from './../action';

const initialState = {
	menuName: '首页'
};

function reducer(state = initialState, action) {
	switch (action.type) {
		case type.MENU_NAME:
			return {
				menuName: action.newName
			};
		default:
			return state;
	}
}

export default reducer;

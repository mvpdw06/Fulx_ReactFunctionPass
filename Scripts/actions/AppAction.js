const {
  ActionTypes,
  AppDispatcher
} = window.App;

window.App.AppActions = {
	// load json file.
	loadTodos() {
		fetch('./sourceList.json')
			.then((response) => response.json())
			.then((list) => AppDispatcher.dispatch({
				type: ActionTypes.LOAD_LIST_SUCCESS,
				list
			}));
	},
	// delete item
	deleteItem(id) {
		AppDispatcher.dispatch({
	      type: ActionTypes.DELETE_ITEM,
	      id
	    });
	}
};
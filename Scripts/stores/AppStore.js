const { ActionTypes, 
		AppDispatcher } = window.App;

// emmit define the event you need.
const CHANGE_EVENT = 'CHANGE';

// emmit object (to handle events).
const _emitter = new EventEmitter();

// stroe actul list.
let _list = [];

const _deleteTodo = (list, id) => { 
	let toDeleteIndex = list.findIndex((x) => x.id === id);
	if (toDeleteIndex !== -1) list.splice(toDeleteIndex, 1);
	return list;
};

window.App.AppStore = {
	getAll() {
		return _list;
	},

	// api to unregister listener.
	addChangeListener(callback) {
		_emitter.on(CHANGE_EVENT, callback);
		return () => _emitter.removeListener(CHANGE_EVENT, callback);
	},

	// trigger event by action type.
	dispatchToken: AppDispatcher.register((action) => {
		switch (action.type) {
			case ActionTypes.LOAD_LIST_SUCCESS:
			    _list = action.list;
			    _emitter.emit(CHANGE_EVENT);
				break;

			case ActionTypes.DELETE_ITEM:
				_list = _deleteTodo(_list, action.id);
				_emitter.emit(CHANGE_EVENT);
				break;
		}
	})
};
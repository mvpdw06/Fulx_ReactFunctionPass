const { AppActions,
        AppStore,
        TestInternal } = window.App;

class TestFuncTransfer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        	list: AppStore.getAll()
        }
    }
    // React Lifecycle Method: start of creating a component hook.
    componentDidMount() {
        AppActions.loadTodos();
        this._removeChangeListener = AppStore.addChangeListener(
            () => this.setState({ list: AppStore.getAll() })
        );
    }
    // React Lifecycle Method: end of creating a component hook.
    componentWillUnmount() {
        this._removeChangeListener();
    }
    render() {
        return (
        	<div>
        		<h1>Here is the list.</h1>
        		<TestInternal 	list={this.state.list}
        						onDelete={AppActions.deleteItem}
        		/>
        	</div>
        );
    }
}

window.App.TestFuncTransfer = TestFuncTransfer;
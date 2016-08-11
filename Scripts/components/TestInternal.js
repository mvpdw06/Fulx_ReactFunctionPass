class TestInternal extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
    	const {onDelete} = this.props;

    	const elementsAll = this.props.list.map((item) => (
    		<li key={item.id}>
    			<span>{item.id}</span>
    			<button onClick={() => onDelete && onDelete(item.id)}>X</button>
    		</li>
    	))

        return (
        	<ul>
	        	{elementsAll}
        	</ul>
        );
    }
}

window.App.TestInternal = TestInternal;
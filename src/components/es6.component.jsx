class HelloComponent extends React.Component {
    render() {
        return (
            <div>
                <div>Hello {this.props.name}</div>
                <div data-syn-router-container></div>
            </div>
        );
    }
}
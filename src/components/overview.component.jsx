class Overview extends React.Component {

    constructor() {

        super();

        this.state = {
            liked: false,
            clicked : false
        }
        
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log('moo');
    }

    render() {
        return (
            <div>
                <h1 onClick={this.handleClick}>Overview</h1>
            </div>
        );
    }
}
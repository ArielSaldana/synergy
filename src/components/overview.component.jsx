class Overview extends React.Component {

    constructor() {

        super();

        this.state = {
            liked: false,
            clicked: false
        }

        

        // var request = new XMLHttpRequest();
        // request.open('GET', 'https://httpbin.org/get', true);

        // request.onload = function () {
        //     if (request.status >= 200 && request.status < 400) {
        //         // Success!
        //         var data = JSON.parse(request.responseText);
        //         console.log(data);
        //     } else {
        //         console.log('error');
        //         // We reached our target server, but it returned an error

        //     }
        // };

        // request.onerror = function () {
        //     console.log('error1');
        //     // There was a connection error of some sort
        // };

        // request.send();
        // console.log('no');

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
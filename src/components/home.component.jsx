//preload views?

let homeComponentInstance = null;

class HomeComponent {

    constructor(route) {

        if (!homeComponentInstance)
            homeComponentInstance = this;

        this.route = route;
        this.view = null;
        this.init_view();
        this.render();

        return homeComponentInstance;
    }

    init_view() {
        this.view = React.createClass({
            render: function render() {
                return React.createElement(
                    "p",
                    null,
                    React.createElement(
                        "span",
                        { style: { fontSize: '40px' } },
                        "Home"
                    )
                );
            }
        });
    }

    render() {
        ReactDOM.render(React.createElement(this.view, null), this.route_containers[this.route.router_container]);
    }

}
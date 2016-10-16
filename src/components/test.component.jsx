//preload views?

let testComponentInstance = null;

class TestComponent {

    constructor(route) {


        if (!testComponentInstance)
            testComponentInstance = this;

        this.route = route;
        this.view = null;
        this.init_view();
        this.render();

        return testComponentInstance;
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
                        "Test"
                    )
                );
            }
        });
    }

    render() {
        ReactDOM.render(React.createElement(this.view, null), this.route.container);
    }

}
//preload views?

let aboutComponentInstance = null;

class AboutComponent {

    constructor(route) {

        if (!aboutComponentInstance)
            aboutComponentInstance = this;

        this.route = route;
        this.view = null;
        this.init_view();
        this.render();

        return aboutComponentInstance;
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
                        "About"
                    )
                );
            }
        });
    }

    render() {
        ReactDOM.render(React.createElement(this.view, null), this.route.container);
    }

}
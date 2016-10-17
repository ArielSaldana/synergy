//preload views?

let homeComponentInstance = null;

class HomeComponent {

    constructor(route) {


        if (!homeComponentInstance)
            homeComponentInstance = this;

        this.route = route;
        this.view = null;
        this.thisTest();
        console.log(this.TestComp)
        this.init_view();
        this.render();

        return homeComponentInstance;
    }

    // init_view() {
    //     this.view = React.createClass({
    //         render: function render() {
    //             return React.createElement(
    //                 "p",
    //                 null,
    //                 React.createElement(
    //                     "span",
    //                     { style: { fontSize: '40px' } },
    //                     "Home"
    //                 )
    //             );
                
    //         }
    //     });
    // }

    thisTest() {
        this.TestComp = React.createClass({
            render: function render() {
                return (
                    <div>
                        <h1>home</h1>
                        <div data-syn-router-container>
                        </div>
                    </div>
                );
                
            }
        });
    }


    init_view() {

        // var TestComp = React.createClass({
        //     render: function render() {
        //         return (
        //             <div>
        //                 <h1>home</h1>
        //                 <div data-syn-router-container>
        //                 </div>
        //             </div>
        //         );
                
        //     }
        // });

        var TestComp = this.TestComp;

        // React.createElement(
        //                     "div",
        //                     { "data-syn-router-container": true },
        //                     React.createElement(TestComp, null),
        //                     React.createElement(HelloComponent, null)
        //                 )


        this.view = React.createClass({
            render: function render() {
                return (
                    <div>
                        <h1>home</h1>
                        <div data-syn-router-container>
                            <TestComp/>
                            <HelloComponent/>
                        </div>
                    </div>
                );
                
            }
        });
        console.log(this.view);
    }

    getComponent() {
        return this.view;
    }

    render() {
        ReactDOM.render(React.createElement(this.view, null), this.route.container);
    }

}
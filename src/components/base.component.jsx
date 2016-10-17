class BaseComponent extends React.Component {
    render() {
        return (
            // <div>
            //     <div>
            //         <ul>
            //             <li><span data-syn-router-link href="/home">Home</span></li>
            //             <li><a data-syn-router-link href="/about">About</a></li>
            //             <li><a data-syn-router-link href="/contact">Contact</a></li>
            //             <li><a data-syn-router-link href="/home/test">test</a></li>
            //         </ul>

            //     </div>
            //     <div data-syn-router-container>
            //     </div>
            // </div>
            <div>
                <header>
                    <div className="container">
                        <div className="logo">
                            <p><span>Synergy </span>Project</p>               
                        </div>
                    </div>
                    <div className="navigation">
                        <ul>
                            <li><a data-syn-router-link href="/home">Overview</a></li>
                            <li><a data-syn-router-link href="/release-notes">Release Notes</a></li>
                        </ul>
                    </div>
                </header>
                <div data-syn-router-container>
                </div>
            </div>
            
        );
    }
}
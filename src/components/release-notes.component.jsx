class ReleaseNotes extends React.Component {
    render() {
        return (
            <section className="release-notes">
                <div className="container heading">
                    <h1>Release Notes for Synergy</h1>
                    <p>View the release notes here:</p>
                </div>
                <div id="release-notes" className="container">
                    <div>
                        <div>
                            <p className="meta">
                                <span className="release-date">10/1/2016</span>
                                <span className="release-version">v0.0.2</span>
                            </p>
                            <h2>Ride the Yak</h2>
                        </div>
                        <ul className="changes">
                            <li>
                                <div className="change-label-container"><em className="added">Added</em></div>
                                Added Router
                            </li>
                            <li>
                                <div className="change-label-container"><em className="added">Added</em></div>
                                Added History
                            </li>
                            <li>
                                <div className="change-label-container"><em className="updated">Updated</em></div>
                                Updated router to support loading components based on url. 
                            </li>
                            <li>
                                <div className="change-label-container"><em className="todo">TODO</em></div>
                                Base url (redirect and load Component)
                            </li>
                            <li>
                                <div className="change-label-container"><em className="todo">TODO</em></div>
                                OnClick events on component elements (such as making a link element active after clicking on it).
                            </li>
                            <li>
                                <div className="change-label-container"><em className="todo">TODO</em></div>
                                Attach data to components using props (data such as ajax content).
                            </li>
                            <li>
                                <div className="change-label-container"><em className="todo">TODO</em></div>
                                Add Error handling.
                            </li>
                            <li>
                                <div className="change-label-container"><em className="todo">TODO</em></div>
                                Server side rendering (So we can stop depending on the client side code to render the webpage). Also adds SEO benefits.
                            </li>
                        </ul>
                    </div>

                    <div>
                        <div>
                            <p className="meta">
                                <span className="release-date">10/1/2016</span>
                                <span className="release-version">v0.0.1</span>
                            </p>
                            <h2>Pilot</h2>
                        </div>
                        <ul className="changes">
                            <li>
                                <div className="change-label-container"><em className="added">Added</em></div>
                                Added mouse events functionality.
                            </li>
                            <li>
                                <div className="change-label-container"><em className="added">Added</em></div>
                                Added keyboard events functionality.
                            </li>
                            <li>
                                <div className="change-label-container"><em className="added">Added</em></div>
                                Added browser dectection using the detector component.
                            </li>
                            <li>
                                <div className="change-label-container"><em className="added">Added</em></div>
                                Added offline detection functionality.
                            </li>
                            <li>
                                <div className="change-label-container"><em className="added">Added</em></div>
                                Added timer functionality. This has many uses, especially in applications that require high performance. Also supports request animation frame (Currently no polyfill for older browsers).
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

        );
    }
}
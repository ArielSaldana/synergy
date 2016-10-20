class BaseComponent extends React.Component {

    constructor() {
        super();

        this.state = {
            liked: false,
            link: null
        }

        this.hist = new History();

        this.handleClick = this.handleClick.bind(this);
        this.onSelectLink = this.onSelectLink.bind(this);

    }

    handleClick(e) {
        // e = e || window.event;
        // e.target || e.srcElement; 
        // console.log(e.target);
        console.log(e.currentTarget);
    }

    onSelectLink(link) {
        this.setState({ link: link });
    }

    findActive() {
        let path = this.hist.getPath();
        for (let link of this.props.links) {
            if (link.url === path) {
                this.onSelectLink(link);
            }
        }
    }

    componentWillMount() {
        this.findActive();
    }

    render() {
        return (

            <div>
                <header>
                    <div className="container">
                        <div className="logo">
                            <p><span>Synergy </span>Project</p>
                        </div>
                    </div>
                    <div className="navigation">
                        <ul>

                            {
                                this.props.links.map((val, i) => {
                                    return <li className={this.state.link === val ? 'active' : ''} onClick={this.onSelectLink.bind(null, val)} key={i}><a data-syn-router-link href={'' + val.url}>{val.name}</a></li>;
                                })
                            }

                        </ul>
                    </div>
                </header>
                <div data-syn-router-container>
                </div>
            </div>

        );
    }
}

BaseComponent.propTypes = {
    name: React.PropTypes.string,
    links: React.PropTypes.array,
    active: React.PropTypes.string
}

BaseComponent.defaultProps = {
    name: 'Ariel',
    links: [
        { name: 'Overview', url: '/home', id: 1 },
        { name: 'Release Notes', url: '/release-notes', id: 2 }
    ],
    active: null

}


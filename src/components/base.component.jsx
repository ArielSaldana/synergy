class BaseComponent extends React.Component {

    constructor() {
        super();

        this.handleClick = this.handleClick.bind(this);
    }


    handleClick() {
        console.log('moo');
    }

    // renderLinks() {
    //     for (let link of this.links) {
    //         return 
    //     }
    // }


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
                                this.props.links.map(function(val, i){
                                return <li key={i}><a data-syn-router-link href={'' + val.url}>{val.name}</a></li>;
                            })}
                            
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
     name : React.PropTypes.string,
     links : React.PropTypes.array
}

BaseComponent.defaultProps = {
    name : 'Ariel',
    links : [ 
        { name: 'Overview', url : '/home', id: 1 },
        { name: 'Release Notes', url : '/release-notes', id : 2}
    ]
    
}


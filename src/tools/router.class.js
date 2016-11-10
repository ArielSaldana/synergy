/**
 * @class    router.class.js
 * @author   Ariel Saldana / http://ariel.io
 * TODO: Regex path
 */
let routerInstance = null;

class Router {

    constructor(options) {

        if (!routerInstance)
            routerInstance = this;

        this.options = null;
        this.options = options;
        this.loaded = false;

        this.hist = new History();
        this.currentRoute = null;

        this.basePath = this.hist.getBasePath() ? this.hist.getBasePath() : '';

        this.linkSelector = 'data-syn-router-link',
            this.containerSelector = 'data-syn-router-container';

        // this.routes = [],
        // our route map
        this.routes = new Map(),
            this.mode = null,
            this.root = '/';

        this.init();

        return routerInstance;
    }

    /**
     * initialize
     */
    init() {
        if (!this.loaded || React) {
            ReactDOM.render(React.createElement(BaseComponent, null), document.getElementById('app'));
        }
        this.initRouterLinks();
        this.mapRoutes(this.options.routes);

        this.initRouteViews();

    }

    /**
     * Make a map of the routes and insert it into an array
     */
    mapRoutes(routes, level, parent) {

        if (level == undefined || level == null)
            level = 0;
        else
            level += 1;

        for (var route of routes) {
            let routeTree = [];
            let path = '';
            route.level = level;

            if (parent) {
                path += routes.parentPath;
                route.parent = parent;

                route.componentTree = route.parent.componentTree.slice(0);
                route.componentTree.push(route);
            }

            else if (!route.componentTree) {
                routeTree.push(route);
                route.componentTree = routeTree;
            }

            path += route.path;
            // route.fullpath = path;
            route.fullpath = this.basePath + path;

            this.routes.set(this.basePath + path, route);

            if (route.children) {
                route.children.parentPath = path;
                this.mapRoutes(route.children, level, route);
            }
        }
    }

    /**
     * Initialize route views
     */
    initRouteViews() {
        if (this.currentRoute == null) {
            this.loadRoute();
        }
    }

    /**
     * attempt to load a route
     */
    loadRoute(path) {

        let routeViewOrder = [];

        if (!path)
            path = this.hist.getPath();

        let route = null;
        let redirect = null;

        // check for naked path, and path with basePath attached
        if (route = this.routes.get( path) ? this.routes.get(path) : this.routes.get(this.basePath + path)) {

            if (redirect = route.redirectTo) {
                this.loadRoute(redirect);
                return;
            }

            new ReactRenderer(route);
            this.hist.changeUrl(route.fullpath, route.title);

        }

        else {
            throw new Error('That is not a known link.');
        }

    }

    /**
     * Initialize links and link events
     */
    initRouterLinks() {
        var links = document.querySelectorAll('[' + this.linkSelector + ']');

        for (var link of links) {
            let setLink = this.basePath + link.getAttribute('href');
            link.setAttribute('href', setLink);

            link.addEventListener('click', (e) => {
                this.linkClinked(e);
            })
        }
    }


    /**
     * router link was clicked
     */
    linkClinked(e, history) {

        // e.stopPropagation();
        e.preventDefault();

        let path = e.target.getAttribute('href');
        this.loadRoute(path);

    }

}
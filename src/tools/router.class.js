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

        this.hist = new History();
        this.currentRoute = null;

        this.linkSelector = 'syn-router-link',
            this.containerSelector = 'syn-router-container';

        // this.routes = [],
        this.routes = new Map(),
            this.mode = null,
            this.root = '/';

        this.init();

        return routerInstance;
    }

    init() {
        this.initRouterLinks();
        this.mapRoutes(this.options.routes);
        this.initRouteViews();

        // for (var route of this.routes) {
        //     console.log(route);
        // }

    }

    mapRoutes(routes, level, parent) {

        if (level == undefined || level == null)
            level = 0;
        else
            level += 1;


        for (var route of routes) {

            route.level = level;
            let path = '';

            // if (routes.parentPath)
            //     path += routes.parentPath;
            if (parent) {
                path += routes.parentPath;
                route.parent = parent;
            }

            path += route.path;
            route.fullpath = path;

            this.routes.set(path, route);

            if (route.children) {
                route.children.parentPath = path;
                this.mapRoutes(route.children, level, route);
            }
        }
    }

    initRouteViews() {
        if (this.currentRoute == null) {
            this.loadRoute();
        }
    }

    loadRoute(path) {

        if (!path)
            path = this.hist.getPath();

        let route = null;
        if (route = this.routes.get(path)) {


            let route_containers = document.querySelectorAll('div[syn-router-container]');

            if (route_containers[route.level]) {
                this.hist.changeUrl(route.fullpath, route.title);

                route.container = route_containers[route.level];
                new route.component(route);
            }

            else {
                throw new Error('Route container not found.');
            }
        }
        else {
            throw new Error('That is not a known link.');
        }

    }

    // link & link events

    initRouterLinks() {
        var links = document.querySelectorAll('[' + this.linkSelector + ']');

        for (var link of links) {

            link.addEventListener('click', (e) => {
                this.linkClinked(e);
            })
        }
    }

    linkClinked(e, history) {

        e.stopPropagation();
        e.preventDefault();

        let path = e.target.getAttribute('href');
        this.loadRoute(path);

    }



}
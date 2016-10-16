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

        this.linkSelector = 'data-syn-router-link',
            this.containerSelector = 'data-syn-router-container';

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

    wait(ms) {
        var start = new Date().getTime();
        var end = start;
        while (end < start + ms) {
            end = new Date().getTime();
        }
    }

    loadRoute(path) {

        let routeViewOrder = [];

        if (!path)
            path = this.hist.getPath();

        let route = null;
        if (route = this.routes.get(path)) {


            let route_containers = document.querySelectorAll('div[data-syn-router-container]');

            if (route_containers[route.level]) {
                this.hist.changeUrl(route.fullpath, route.title);

                console.log(route.componentTree[0]);

                route.componentTree[0].container = route_containers[route.componentTree[0].level];
                new route.componentTree[0].component(route.componentTree[0]);

                // route.componentTree[1].container = route_containers[route.componentTree[1].level];
                // new route.componentTree[1].component(route.componentTree[1]);

                // for (let virtualRoute of route.componentTree) {
                //     console.log(virtualRoute);
                //     virtualRoute.container = route_containers[virtualRoute.level];
                //     new virtualRoute.component(virtualRoute);
                // }

                // route.componentTree[0]
                // console.log(route_containers[0])
                // new route.componentTree[0].component(route_containers[0]);

                // route.container = route_containers[route.level];
                // new route.component(route);

                // for (let virtualRoute of route.componentTree) {
                //     virtualRoute.container = route_containers[virtualRoute.level];
                //     new virtualRoute.component(virtualRoute);
                //     console.log(virtualRoute);
                // }

                // route.componentTree[0].container = route.componentTree[0].level;
                // route.componentTree[0].componentTree(route.componentTree[0]);

                // for ( let i = 0; i < route.level + 1; i++ ) {
                //     route.container = route_containers[route.level];
                //     new route.component(route);
                // }

                // for ( let i = route.level; i >= 0; i--) {
                //     routeViewOrder.push(route);
                // }

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
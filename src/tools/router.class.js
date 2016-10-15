/**
 * @class    router.class.js
 * @author   Ariel Saldana / http://ariel.io
 */
routerInstance = null;

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

        // for (var route of this.routes) {
        //     console.log(route);
        // }

    }

    mapRoutes(routes) {

        for (var route of routes) {

            let path = '';

            if (routes.parent)
                path += routes.parent;

            path += route.path;


            this.routes.set(path, route);

            if (route.children) {
                route.children.parent = path;
                this.mapRoutes(route.children);
            }
        }
    }


    // link & link events

    initRouterLinks() {
        // var links = document.querySelectorAll('a['+ this.linkSelector +']');
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
        let route = null;
        if (route = this.routes.get(path)) {
            route.component();
            console.log(route.path);
        }
        else {
            throw new Error('That is not a known link.');
        }

        // console.log(this.routes.get(link));
        // console.log(e.srcElement);
        // this.hist.changeUrl('no','no');
    }

    loadRoute(route) {

        // if the current route is null
        if (currentRoute == undefined || currentRoute == null) {

        }

        
    }

}
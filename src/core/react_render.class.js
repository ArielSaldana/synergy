//preload views?

let reactRendererInstance = null;

class ReactRenderer {

    constructor(routeNode) {

        if (!reactRendererInstance)
            reactRendererInstance = this;

        this.routeNode = routeNode;
        this.render();

        return reactRendererInstance;
    }

    render() {
        for (let route of this.routeNode.componentTree) {
            let route_containers = document.querySelectorAll('div[data-syn-router-container]');
            let container = route_containers[route.level];
            ReactDOM.render(React.createElement(route.component, null), container);
        }
    }
}
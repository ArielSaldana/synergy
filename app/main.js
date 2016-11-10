class App {
    constructor() {

        const routes = [
            {
                path: '/home', title: 'Home', component: Overview, children: [
                    {
                        path: '/test', title: 'Test!', component: Overview, children: [
                            { path: '/test2', title: 'Testing', component: Overview }
                        ]
                    },
                    { path: '/test1', title: 'About', component: Overview }
                ]
            },
            { path: '/release-notes', title: 'Synergy - Release Notes', component: ReleaseNotes },
            { path: '/', redirectTo: '/home' }
        ];

        S.router = new Router({ routes });
    }
}
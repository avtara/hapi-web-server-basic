const routes = [
    {
        method: `GET`,
        path: '/',
        handler: (request,h) => {
            return 'hello world';
        }
    },
    {
        method: `GET`,
        path: '/about',
        handler: (request,h) => {
            return 'about page';
        }
    }
]

module.exports = routes;
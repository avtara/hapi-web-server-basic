const routes = [
    {
        method: `GET`,
        path: '/',
        handler: (request,h) => {
            return 'hello world';
        }
    },
    {
        method: `*`,
        path: '/',
        handler: (request,h) => {
            return 'Halaman tidak dapat diakses dengan method tersebut';
        }
    },
    {
        method: `GET`,
        path: '/about',
        handler: (request,h) => {
            return 'about page';
        }
    },
    {
        method: `*`,
        path: '/about',
        handler: (request,h) => {
            return 'Halaman tidak dapat diakses dengan method';
        }
    },
    {
        method: `GET`,
        path: '/users/{username?}',
        handler: (request,h) => {
            const {username="Stranger"} = request.params;
            return `hai, ${username}`;
        }
    },
    {
        method: `*`,
        path: `/{any*}`,
        handler: (request,h)=>{
            return 'Halaman tidak ditemukan';
        }
    }
]

module.exports = routes;
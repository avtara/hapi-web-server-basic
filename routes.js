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
        method: `GET`,
        path: '/hello/{name?}',
        handler: (request,h) => {
            const {username="Stranger"} = request.params;
            const {lang}= request.query;
            if (lang === 'id'){
                return `hai, ${username}`;
            }
            return `hello, ${username}`;
        }
    },
    {
        method: `POST`,
        path: '/login',
        handler: (request,h) => {
            const {username, password}= request.payload;
            return `Welcome ${username}`;
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
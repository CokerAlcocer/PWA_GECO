
const updateDynamicCache = (name, req, res) => {
    if(res.ok) {
        return caches.open(name).then(cache => {
            cache.put(req, res.clone());
            console.log(res.clone());
            return res.clone();
        });
    } else {
        return res;
    }
}

const apiManager = (name, req) => {
    if(req.url.includes('/api/user/login') || (req.url.includes('/api/user/hotel') && !req.url.includes('/api/user/hotel/'))) {
        return fetch(req);
    }

    if(req.clone().method === 'POST') {
        
    }

    return fetch(req).then(response => {
        console.log(response);
        if(response.ok) {
            updateDynamicCache(name, req, response.clone());
            return response.clone();
        } else {
            return caches.match(req);
        }
    }).catch(() => caches.match(req));
}
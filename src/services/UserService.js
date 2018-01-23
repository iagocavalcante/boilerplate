export default class UserService {
    constructor (resource) {
        _resource = resource;
    }

    getAll() {
        this._resource.get('http://localhost:3000/api/users')
            .then((data) => {
                return data.json();
            })
            .catch((error) => {
                throw new Error(error);
            })
    }
}
import axios from 'axios'

class Api {
    constructor() {
        this.api = axios.create( {
            baseURL: process.env.REACT_APP_API_URL
        })

        this.api.interceptors.request.use( config => {
            const token = localStorage.getItem('token')

            if (token) {
                config.headers = {
                    'Authorization': `Bearer ${token}`
                }
            }

            return config
        }, error => {
            console.log(error)
        })
    }

    listCharacters = async () => {
        try {
            const { data } = await this.api.get('/characters')
            return data 
        } catch (err) {
            console.log(err)
            throw err
        }
    }

    signUp = async (user) => {
        try {
            const { data } = await this.api.post('/sign-up', user)
            return data
        } catch (err) {
            console.log(err)
            throw err
        }
    }

    login = async (user) => {
        try {
            const { data } = await this.api.post('/login', user)
            localStorage.setItem('token', data.token)
        } catch (err) {
            console.log(err)
            throw err
        }
    }
}

export default new Api()
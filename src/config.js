const config = {
    development: {
        apiURL: 'http://localhost:3001'
    },
    production: {
        apiURL: 'http://localhost:3001'
    },
    test: {
        apiURL: 'http://localhost:3001'
    }
}

export default config[process.env.NODE_ENV || 'development'];
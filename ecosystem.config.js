module.exports = {
    apps : [{
        name      : 'shop.pxstudio.pw',
        script    : './server.js',
        cwd       : './',
        env: {
            NODE_ENV: 'development',
            PORT    : 8082
        },
	env_production: {
		NODE_ENV: 'production',
		PORT: 8082
	}
    }]
};

requirejs.config({
    // relative to html file
    baseUrl: 'js',
    paths: {
    // relative to baseUrl
        app: 'app'
    }
});

requirejs(['app/main']);

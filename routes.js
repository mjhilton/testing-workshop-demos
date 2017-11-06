module.exports = function(app) {
    app.get('/api/puppies', function(req, res) {
        res.sendFile('/puppy.jpg', { root: __dirname + '/public'});
    });
};
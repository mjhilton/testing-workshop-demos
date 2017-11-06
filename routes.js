var salaryService = require('./src/salary-service');
var db = require('./src/data-service');

module.exports = function(app) {
    app.get('/api/puppies', function(req, res) {
        res.sendFile('/puppy.jpg', { root: __dirname + '/public'});
    });

    app.get('/api/salaries/:job', function(req, res) {
        var jobTitle = req.params.job;
        db.save({ 
            time: new Date(),
            requestedJob: jobTitle
        });

        salaryService.getSalary(jobTitle).then(response => {
            res.send(response);
        });
    });

    app.get('/api/salaryrequestlogs', function(req, res) {
        var keys = db.getKeys();
        var values = [];
        for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            var value = db.get(key);
            values.push(value);
        }
        res.send(values);
    });
};
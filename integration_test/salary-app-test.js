var app = require('../server'),
    httpClient = require('../src/http-client'),
    db = require('../src/data-service');

require('chai').should();

describe("When requesting a JuniorDeveloper salary", function() {
    it("returns a result", function() {
        return httpClient.get("http://localhost:4000/api/salaries/Junior%20Developer")
            .then(result => {
                result = JSON.parse(result);
                result.job.should.equal("Junior Developer");
            });
    });

    it("increments a database counter", function() {
        var keys = db.getKeys();
        keys.length.should.equal(1);
    });

    after(function() {
        db.clear();
    });
});

describe("When requesting puppies", function() {
    it("returns a puppy", function() {
        return httpClient.get("http://localhost:4000/api/puppies")
        .then(result => {
           result.should.exist; 
        });
    })
});

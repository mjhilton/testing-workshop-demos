var sinon = require('sinon');
var httpClient = require('../src/http-client');
var salaryService = require('../src/salary-service');

describe("Salary service without hitting the real API", function() {
    beforeEach(function() {
        sinon.stub(httpClient, "get");
    });

    afterEach(function() {
        httpClient.get.restore();
    });

    it('Should run really quickly!', function() {
        var expectedResult = {
            job: "Junior Developer",
            salary: 70000
        }
        httpClient.get.resolves(JSON.stringify(expectedResult));

        return salaryService.getSalary("Junior Developer").then(result => {
            result.salary.should.equal(35000);
        });
    });

    it('Should let us return whatever values we want', function() {
        var expectedResult = { 
            job: "Janitor",
            salary: 10000
        };
        httpClient.get.resolves(JSON.stringify(expectedResult));

        return salaryService.getSalary("Janitor").then(result => {
            result.salary.should.equal(10000);
        });
    });
});
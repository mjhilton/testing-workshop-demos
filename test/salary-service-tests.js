var sinon = require('sinon');
var httpClient = require('../src/http-client');
var salaryService = require('../src/salary-service');

describe("Salary service", function() {
    beforeEach(function() {
        sinon.stub(httpClient, "get");
    });

    afterEach(function() {
        httpClient.get.restore();
    });

    describe("when calculating a Junior Dev's salary", function() {
        it("should return half the salary from the API", function() {
            // Arrange
            var expectedSalary = 35000;
            var jobTitle = "Junior Developer";
            var apiReturnResult = {
                job: jobTitle,
                salary: 70000
            };
            
            httpClient.get.resolves(JSON.stringify(apiReturnResult));

            // Act
            return salaryService.getSalary(jobTitle).then(result => {
                // Assert
                result.salary.should.equal(expectedSalary);
            });
        });
    });

    describe("when calculating a Graduate Dev's salary", function() {
        it("should return the full salary from the API", function() {
            // Arrange
            var expectedSalary = 30000;
            var jobTitle = "Grad Developer";
            var apiReturnResult = {
                job: jobTitle,
                salary: 60000
            };

            httpClient.get.resolves(JSON.stringify(apiReturnResult));

            // Act
            return salaryService.getSalary(jobTitle).then(result => {
                // Assert
                result.salary.should.equal(expectedSalary);
            });
        });
    });

    describe("when calculating a Senior Dev's salary", function() {
        it("should return the full salary from the API", function() {
            // Arrange
            var expectedSalary = 70000;
            var jobTitle = "Senior Developer";
            var apiReturnResult = {
                job: jobTitle,
                salary: 70000
            };

            httpClient.get.resolves(JSON.stringify(apiReturnResult));

            // Act
            return salaryService.getSalary(jobTitle).then(result => {
                // Assert
                result.salary.should.equal(expectedSalary);
            });
        });
    });
});
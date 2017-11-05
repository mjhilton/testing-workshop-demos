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
            var jobTitle = "Junior Developer";
            var apiReturnedSalary = 70000;
            var expectedSalary = 35000;
            
            return assertSalaryCalculation(jobTitle, apiReturnedSalary, expectedSalary);
        });
    });

    describe("when calculating a Graduate Dev's salary", function() {
        it("should return half the salary from the API", function() {
            var jobTitle = "Graduate Developer";
            var apiReturnedSalary = 60000;
            var expectedSalary = 30000;
            
            return assertSalaryCalculation(jobTitle, apiReturnedSalary, expectedSalary);
        });
    });

    describe("when calculating a Senior Dev's salary", function() {
        it("should return the full salary from the API", function() {
            var jobTitle = "Senior Developer";
            var apiReturnedSalary = 70000;
            var expectedSalary = 70000;
            
            return assertSalaryCalculation(jobTitle, apiReturnedSalary, expectedSalary);
        });
    });

    describe("when calculating an Architect's salary", function() {
        it("should return the full salary from the API", function() {
            var jobTitle = "Architect";
            var apiReturnedSalary = 1000000;
            var expectedSalary = 1000000;
            
            return assertSalaryCalculation(jobTitle, apiReturnedSalary, expectedSalary);
        });
    });

    function assertSalaryCalculation(jobTitle, stubbedApiSalary, expectedSalary) {
        // Arrange
        var apiReturnResult = {
            job: jobTitle,
            salary: stubbedApiSalary
        };

        httpClient.get.resolves(JSON.stringify(apiReturnResult));
        
        // Act
        return salaryService.getSalary(jobTitle).then(result => {
            // Assert
            result.salary.should.equal(expectedSalary);
        });
    };
});
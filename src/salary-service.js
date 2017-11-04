var httpClient = require('./http-client');
var endpoint = 'https://juniordev-salaries.azurewebsites.net/api/Salaries';

function getSalary(jobTitle) {
    var url = endpoint + "?job=" + jobTitle;

    return httpClient.get(url).then(content => { 
        var salaryData = JSON.parse(content);
        
        // Case insensitive regex to find the word "junior" or "grad"
        var juniorDevRegex = /junior|grad/i;

        if (juniorDevRegex.test(salaryData.job)) {
            salaryData.salary = salaryData.salary / 2;
        }

        return salaryData;
    });
}

module.exports = {
    getSalary: getSalary
};
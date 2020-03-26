function Hello(message) {
    this.value = '1';
    return function(name) {
        return message + this.value + name;
    }
}

console.log(Hello('Hello ')('Ram'));
 

var skills = 'Data Structures, OO Design, C# 7.0, Javascript, ASP.NET, Web API, Git, HTML 5, CSS, React, SQL Server 2012, Entity Framework, Unit Testing, Algorithms, Refactoring, VSCode, VS 2017, GitHub, Bitbucket, Jira';

console.log(skills.length);

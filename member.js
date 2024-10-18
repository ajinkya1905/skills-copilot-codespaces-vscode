function sklillsMember() {
    var member = {
        name: 'John Doe',
        age: 30,
        skills: ['JavaScript', 'HTML', 'CSS'],
        details: function () {
            return this.name + ' is ' + this.age + ' years old.';
        }
    }
    return member;
}
const hasNumber = string => {
  return /\d/.test(string)
}

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }
    

  get id() {
    return Math.floor(Math.random() * 1000000000000).toString()
  }

  get name() {
    return this.lastName.toUpperCase()
  }

  set name(newName) {
    if(!hasNumber(newName)) {
      this.lastName = newName
    } else {
      console.log('Error name contains numbers')
    }
  }

  fullName() {
    console.log(`${this.firstName} ${this.lastName}`)
  }

  static countPersons(){
    let counter = 0

    persons.forEach(person => counter ++)

    if(counter > 0) {
      return 'there are ' + counter + ' persons'
    } else {
      return 'there are no persons'
    }
  }
  static clearPersons() {
    persons = []
  }
}

const p1 = new Person('Hans', 'Mattin-lassei');
const p2 = new Person('Jeanette', 'Wankowicz');

// console.log(p1.name);
// p1.name = 'Wahlström'
// console.log(p1.name);
// console.log(p1.id);
// p1.id = 'hej';



class Teacher extends Person {
  constructor(firstName, lastName, teacherId, skills) {
    super(firstName, lastName)
    this.teacherId = teacherId
    this.skills = skills
  }
  displaySkills() {
    this.skills.forEach(skill => console.log(skill))
  }
  fullName() {
    super.fullName()
    console.log('här kan jag lägga till extra funktionalitet')
  }
}

const t1 = new Teacher('Joakim', 'Wahlström', 1, ['Javascript', 'React'])

t1.fullName()


// t1.displaySkills()

let persons = [p1, p2, t1]

// console.log(Person.countPersons())
Person.clearPersons()
// console.log(Person.countPersons())


// Models
class User {
  constructor(firstName, lastName, email, password) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }
  id = Date.now().toString()
}


class UserService {

  static signUp(user) {
    const newUser = new User(user.firstName, user.lastName, user.email, user.password)
  }
}

class DataService {
  static fetchData(url) {
    fetch(url)
    .then
  }
}

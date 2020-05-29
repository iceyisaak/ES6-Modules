export default class User {
 constructor(name, age) {
  this.name = name;
  this.age = age;
 }
}

export function showName(user) {
 console.log(`User's name is ${user.name}`);
}

export function showAge(user) {
 console.log(`User's is ${user.age} years old.`);
}

// export default User;

// export{showName, showName};
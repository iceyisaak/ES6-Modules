import U, { showName as showUsername, showAge } from "./user.js";

const user = new U("Peter", 18);
console.log(user);


showUsername(user);

showAge(user);
import { password_strength } from "./mod.ts";

var password: string = "Sterling";

var test = {
    password: password,
    length: password.length,
    entropy: Number(password_strength(password).entropy.toFixed(2)),
    cracktime: password_strength(password).cracktime,
    score: password_strength(password).score,
    text: password_strength(password).text
};
console.table(test);

password = "Sterling2015";

var test = {
    password: password,
    length: password.length,
    entropy: Number(password_strength(password).entropy.toFixed(2)),
    cracktime: password_strength(password).cracktime,
    score: password_strength(password).score,
    text: password_strength(password).text
};
console.table(test);

password = "SterlingGmail20.15";

var test = {
    password: password,
    length: password.length,
    entropy: Number(password_strength(password).entropy.toFixed(2)),
    cracktime: password_strength(password).cracktime,
    score: password_strength(password).score,
    text: password_strength(password).text
};
console.table(test);
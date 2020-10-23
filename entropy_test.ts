import { calculate_entropy, 
         entropy_classification, 
         entropy_crack_time 
  } from "./mod.ts";

var password: string = "Sterling";

var test = {
    password: password,
    length: password.length,
    entropy: Number(calculate_entropy(password).toFixed(2)),
    cracktime: entropy_crack_time(password),
    score: entropy_classification(calculate_entropy(password)).score,
    text: entropy_classification(calculate_entropy(password)).text
};
console.table(test);

password = "Sterling2015";

var test = {
    password: password,
    length: password.length,
    entropy: Number(calculate_entropy(password).toFixed(2)),
    cracktime: entropy_crack_time(password),
    score: entropy_classification(calculate_entropy(password)).score,
    text: entropy_classification(calculate_entropy(password)).text
};
console.table(test);

password = "SterlingGmail20.15";

var test = {
    password: password,
    length: password.length,
    entropy: Number(calculate_entropy(password).toFixed(2)),
    cracktime: entropy_crack_time(password),
    score: entropy_classification(calculate_entropy(password)).score,
    text: entropy_classification(calculate_entropy(password)).text
};
console.table(test);
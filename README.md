![CI](https://github.com/ThaiJamesLee/pwchecker/workflows/CI/badge.svg)

# pwchecker

pwchecker is a simple password checker. It provides a password policy check, for instance length of password, minimum number of digits etc. The entropy of the password can be determined and classifies the password strength from "very weak" (score: 1) to "very strong" (score 5).


## Entropy

The pwchecker module exports the function `password_strength` which will return a
result dictionary with the following keys:
- `entropy`: # bits 
- `score`: [1, 2, 3, 4, 5] where 1 means "very weak" and 5 means "very strong"
- `text`: [ "very weak", "weak", "reasonable", "strong", "very strong" ] where a password is classified as "very strong" if its entropy is at least 128 bits
- `cracktime`: how long it will take to get the password via bruteforce

Usage: 

```
import { password_strength } from "./mod.ts";

var password: string = "jelly22Fi$h";

var output = {
    entropy: password_strength(password).entropy,
    cracktime: password_strength(password).cracktime,
    score: password_strength(password).score,
    text: password_strength(password).text
};
console.table(output);

┌───────────┬───────────────────┐
│   (idx)   │      Values       │
├───────────┼───────────────────┤
│  entropy  │ 72.10047736845401 │
│ cracktime │    "centuries"    │
│   score   │         4         │
│   text    │     "strong"      │
└───────────┴───────────────────┘
```


## Policy Check

The module contains the class `PasswordPolicy` that defined some check properties.

Usage: 

```
const pwpolicy = new PasswordPolicy();

var policyResult = pwpolicy.password_policy_compliance("123456");

```

The `policyResult` contains for example:

```
{
    hasMinLen: false,
    hasMinUppercase: false,
    hasMinLowercase: false,
    hasMinSpecialChars: false,
    hasMinDigits: true
}
```

The password policies in `PasswordPolicy` can be overwritten to fit the security requirements for a password.
The default values are:

```
pwpolicy.minLen = 10;
pwpolicy.minUppercase = 1;
pwpolicy.minLowercase = 1;
pwpolicy.minSpecialChars = 1;
pwpolicy.minDigits = 1;
```
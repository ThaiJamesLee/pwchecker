# pwchecker

pwchecker is a simple password checker.
It provides a password policy check, for instance length of password, minimum number of digits etc.


## Policy Check

The module contains the class `PasswordPolicy` that defined some default values.

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


## Entropy


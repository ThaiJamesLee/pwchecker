// https://stackoverflow.com/questions/32311081/check-for-special-characters-in-string
const specialChars = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;


export interface PasswordPolicyResults {
    hasMinLen: boolean;
    hasMinUppercase: boolean;
    hasMinLowercase: boolean;
    hasMinSpecialChars: boolean;
    hasMinDigits: boolean;
}

class PasswordPolicy {
    minLen: number;
    minUppercase: number;
    minLowercase: number;
    minSpecialChars: number;
    minDigits: number;

    constructor() {
        this.minLen = 10;
        this.minUppercase = 1;
        this.minLowercase = 1;
        this.minSpecialChars = 1;
        this.minDigits = 1;
    }


    password_policy_compliance(passwd: string) {
        let policyResult: PasswordPolicyResults = {
            hasMinLen: false, 
            hasMinUppercase: false, 
            hasMinLowercase: false, 
            hasMinSpecialChars: false, 
            hasMinDigits: false
        };

        if(passwd.length >= this.minLen) {
            policyResult.hasMinLen = true;
        }  
        
        let passwdTokens: string[] = passwd.split("");

        let digitsCounter: number = 0;
        let upperCaseCounter: number = 0;
        let lowerCaseCounter: number = 0;
        let specialCharsCounter: number = 0;

        passwdTokens.forEach((token) => {
            if(!isNaN(Number(token))) {
                digitsCounter += 1;
            } else if(specialChars.test(token)) {
                specialCharsCounter += 1;
            } else {
                if(token == token.toUpperCase()) {
                    upperCaseCounter += 1;
                }
                if(token == token.toLowerCase()) {
                    lowerCaseCounter += 1;
                }
            }
        });

        if(digitsCounter >= this.minDigits) {
            policyResult.hasMinDigits = true;
        }
        if(upperCaseCounter >= this.minUppercase) {
            policyResult.hasMinUppercase = true;
        }
        if(lowerCaseCounter >= this.minLowercase) {
            policyResult.hasMinLowercase = true;
        }
        if(specialCharsCounter >= this.minSpecialChars) {
            policyResult.hasMinSpecialChars = true;
        }

        return policyResult;
    }
}

export { PasswordPolicy }
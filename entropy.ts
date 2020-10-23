import { PasswordPolicy, PasswordPolicyResults } from "./policy.ts";

interface PasswordStrength {
    entropy: number;
    score: number;
    text: string;
    cracktime: string;
}

function calculate_entropy(password:string) {

        let pwpolicy = new PasswordPolicy();

        // 26 letters (lower + upper case), 10 digits, 32 special characters
        let cardinality:number = 0;
        if (pwpolicy.password_policy_compliance(password).hasMinLowercase) {
            cardinality += 26;
        } 
        if (pwpolicy.password_policy_compliance(password).hasMinUppercase) {
            cardinality += 26;
        } 
        if (pwpolicy.password_policy_compliance(password).hasMinDigits) {
            cardinality += 10;
        } 
        if (pwpolicy.password_policy_compliance(password).hasMinSpecialChars) {
            cardinality += 32;
        } 

        var entropy = Math.log2(Math.pow(cardinality,password.length))

       return entropy
    }

    function display_time(seconds:number){
        const minute = 60;
        const hour = minute * 60;
        const day = hour * 24;
        const month = day * 30;
        const year = month * 12;
        const century = year * 100;


        if (seconds < minute){
            return 'instant'
        }
        else if (seconds < hour){
            return String(1+Math.floor(seconds/minute)) + " minutes"
        }
        else if (seconds < day){
            return String(1+Math.floor(seconds/hour)) + " hours"
        }
        else if (seconds < month){
            return String(1+Math.floor(seconds/day)) + " days"
        }
        else if (seconds < year){
            return String(1+Math.floor(seconds/minute)) + " months"
        }
        else if (seconds < century){
            return String(1+Math.floor(seconds/year)) + " year"
        }
        else {
            return 'centuries'
        }
    }

    function entropy_crack_time(entropy:number, sekPerGuess: number = 0.01, numAttackers: number = 100){
        var cracktime = (0.5 * Math.pow(2,entropy) * (sekPerGuess/numAttackers));
        return display_time(cracktime)
        }
    
    function password_strength(password:string){

        let pwStrength: PasswordStrength = {
            entropy: 0,
            score: 0,
            text: "no score",
            cracktime: ""
        };

        var entropy = calculate_entropy(password);

        if (entropy < 28){
            pwStrength.score = 1;
            pwStrength.text = "very weak";
        } else if (entropy < 36){
            pwStrength.score = 2;
            pwStrength.text = "weak";
        } else if (entropy < 60){
            pwStrength.score = 3;
            pwStrength.text = "reasonable";
        } else if (entropy < 128){
            pwStrength.score = 4;
            pwStrength.text = "strong";
        } else {
            pwStrength.score = 5;
            pwStrength.text = "very strong";
        }

        pwStrength.entropy = entropy;
        pwStrength.cracktime = entropy_crack_time(entropy);

        return pwStrength
    }

    export { password_strength }
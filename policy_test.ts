import { PasswordPolicy, PasswordPolicyResults } from "./policy.ts";
import {
    assertArrayContains,
    assertEquals,
  } from "https://deno.land/std@0.74.0/testing/asserts.ts";

  
interface ValuePair {
    input: any;
    expectedOutput: any;
}

const testName = "PasswordPolicyTest_"

const pwpolicy = new PasswordPolicy();

const testValues: ValuePair[] = [
    {
        input: "123456",
        expectedOutput: {
            hasMinLen: false,
            hasMinUppercase: false,
            hasMinLowercase: false,
            hasMinSpecialChars: false,
            hasMinDigits: true
        }
    },
    {
        input: "1234567890",
        expectedOutput: {
            hasMinLen: true,
            hasMinUppercase: false,
            hasMinLowercase: false,
            hasMinSpecialChars: false,
            hasMinDigits: true
        }
    },
    {
        input: "123456!",
        expectedOutput: {
            hasMinLen: false,
            hasMinUppercase: false,
            hasMinLowercase: false,
            hasMinSpecialChars: true,
            hasMinDigits: true
        }
    },
    {
        input: "test123456!",
        expectedOutput: {
            hasMinLen: true,
            hasMinUppercase: false,
            hasMinLowercase: true,
            hasMinSpecialChars: true,
            hasMinDigits: true
        }
    },
    {
        input: "Test123456!",
        expectedOutput: {
            hasMinLen: true,
            hasMinUppercase: true,
            hasMinLowercase: true,
            hasMinSpecialChars: true,
            hasMinDigits: true
        }
    },
]

testValues.forEach( (testValue, index) => {
    Deno.test(`${testName}${index}`, () => {
        assertEquals(pwpolicy.password_policy_compliance(testValue.input), testValue.expectedOutput);
    });
});
// @ts-nocheck
// Language: typescript
// ignore all typescript syntax errors

// 1. Use meaningful and pronounceable variable names
// 2. Use the same vocabulary for the same type of variable
// 3. Use searchable names
// 4. Use explanatory variables
// 5. Avoid mental mapping
// 6. Don't add unneeded context
// 7. Use default arguments instead of short circuiting or conditionals
// 8. Avoid magic numbers
// 9. Don't use flags as function parameters
// 10. Avoid global variables

// Path: clean-code-course/src/clean-code/names-by-type.ts

// KIND: ARRAY
// BAD - what is this?
const fruit = ['apple', 'banana', 'cherry'];
// REGULAR
const fruitList = ['apple', 'banana', 'cherry'];
// GOOD
const fruits = ['apple', 'banana', 'cherry'];

// KIND: BOOLEAN
// BAD - what is this?
const open = true;
const write = true;
const fruit = true;
const active = false;
const noValues = true;
const notEmpty = true;
// BETTER
const isOpen = true;
const canWrite = true;
const hasFruit = true;
const isActive = false;
const hasValues = false;
const isEmpty = false;

// KIND: NUMBER
// BAD - what is this?
const fruits = 3;
const cars = 10;
// BETTER
const maxFruits = 5;
const minFruits = 10;
const totalFruits = 10;
const totalOfCars = 10;

// KIND: FUNCTIONS
// BAD  - what is this?
createUserIfNotExists();
updateUserIfNotEmpty();
sendEmailIfFieldsValid();
// BETTER
createUser();
updateUser();
sendEmail();
// GOOD

// KIND:
// BAD - what is this?
// REGULAR
// GOOD

// KIND:
// BAD - what is this?
// REGULAR
// GOOD

// KIND:
// BAD - what is this?
// REGULAR
// GOOD

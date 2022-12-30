(()=>{
    // Aplicando el principio de responsabilidad única
    // Prioriza la composición frente a la herencia

    type Gender = 'M'|'F';

    interface PersonProps {
			firstName: string;
			lastName     : string;
        gender   : Gender;
        birthdate: Date;
    }

    class Person {
			public firstName: string;
			public lastName     : string;
        public gender   : Gender;
        public birthdate: Date;

        constructor({ firstName, lastName, gender, birthdate }: PersonProps ){
					this.firstName = firstName;
					this.lastName = lastName;
            this.gender = gender;
            this.birthdate = birthdate;
        }
    }


    interface UserProps {
        email     : string;
        role      : string;
    }
    class User {

        public email       : string;
        public role        : string;
        private lastAccess : Date;

        constructor({ email, role }: UserProps ){
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }

        checkCredentials() {
            return true;
        }
    }


    interface SettingsProps {
        lastFolderOpen  : string;
        workingDirectory: string;
    }

    class Settings {
        public workingDirectory: string; 
        public lastFolderOpen  : string; 

        constructor({ workingDirectory, lastFolderOpen }: SettingsProps ){
            this.workingDirectory = workingDirectory;
            this.lastFolderOpen = lastFolderOpen;
        }
    }
    
    
    // Nuevo User Settings
    interface UserSettingsProps {
        birthdate       : Date;
        email           : string;
        gender          : Gender;
        lastFolderOpen  : string;
			firstName: string;
			lastName            : string;
        role            : string;
        workingDirectory: string;
    }

    class UserSettings {
        // constructor(
        //     public person: Person,
        //     public user  : User,
        //     public settings: Settings,
        // ){}
        public person  : Person;
        public user    : User; 
        public settings: Settings;

        constructor({ 
					firstName,
					lastName,
					gender,
					birthdate,
            email, role,
            workingDirectory, lastFolderOpen,
        }: UserSettingsProps) {
					this.person = new Person({ 
						firstName,
						lastName,
						gender,
						birthdate
					});
            this.user = new User({ email, role });
            this.settings = new Settings({ workingDirectory, lastFolderOpen })
        }
    }
    


    const userSettings = new UserSettings({
        birthdate: new Date('1985-10-21'),
        email: 'fernando@google.com',
        gender: 'M',
        lastFolderOpen: '/home',
			firstName: 'Fernando',
			lastName: 'Perrera',
        role: 'Admin',
        workingDirectory: '/usr/home'
    });

    console.log({ userSettings, credentials: userSettings.user.checkCredentials() });
    
})()


// singleton: is a design pattern that restricts the instantiation of a class to one object. This is useful when exactly one object is needed to coordinate actions across the system.
//

// STUPID
// Singleton: is a design pattern that restricts the instantiation of a class to one object. This is useful when exactly one object is needed to coordinate actions across the system.
// Tight coupling: is a code smell that occurs when two or more modules are highly dependent on each other. This makes it difficult to reuse the modules in different contexts, and makes it difficult to modify the code.
// Untestaable code: is code that is difficult to test. This is usually caused by tight coupling, but can also be caused by other code smells.
// Premature optimization: is a code smell that occurs when you try to optimize your code before it is necessary. This can cause you to write code that is difficult to understand and maintain.
// Indescriptive names: is a code smell that occurs when you use names that do not clearly describe the purpose of the code. This can make it difficult to understand the code.
// Duplicated code: is a code smell that occurs when you have two or more pieces of code that do the same thing. This can make it difficult to maintain the code.

// SOLID
// Single responsibility principle: is a design principle that states that a class should have one and only one reason to change. This means that a class should have only one job.
// Open/closed principle: is a design principle that states that a class should be open for extension, but closed for modification. This means that you should be able to add new functionality to a class without modifying the class itself.
// Liskov substitution principle: is a design principle that states that a subclass should be able to replace its parent class without breaking the application. This means that you should be able to use a subclass anywhere you would use its parent class.
// Interface segregation principle: is a design principle that states that a class should not be forced to depend on methods it does not use. This means that you should split large interfaces into smaller interfaces so that classes only have to depend on the methods they use.
// Dependency inversion principle: is a design principle that states that high-level modules should not depend on low-level modules. Both should depend on abstractions. This means that you should use interfaces and dependency injection to increase the flexibility of your code.

// DRY
// Don't repeat yourself: is a design principle that states that you should not repeat yourself. This means that you should avoid duplicating code and data. Instead, you should extract the duplicated code and data into variables, functions, and classes.
// KISS
// Keep it simple, stupid: is a design principle that states that you should keep your code simple. This means that you should avoid over-engineering your code and adding functionality that you do not need.
// YAGNI
// You aren't gonna need it: is a design principle that states that you should not add functionality until you need it. This means that you should avoid adding features that you think you might need in the future.

// TDD
// Test-driven development: is a software development process that relies on the repetition of a very short development cycle: requirements are turned into very specific test cases, then the software is improved so that the tests pass. This is opposed to software development that allows software to be added that is not proven to meet requirements.
// Red-green-refactor: is a technique that is used in test-driven development. You start by writing a test that fails. Then you write just enough code to make the test pass. Finally, you refactor the code to remove duplication.
// Test pyramid: is a visual representation of the different types of tests that you should write for your application. The tests are arranged in a pyramid, with unit tests at the bottom, integration tests in the middle, and end-to-end tests at the top.
// Unit test: is a type of test that is used to test the smallest testable part of an application, called the unit. This is usually a method or function.
// Integration test: is a type of test that is used to test how multiple units work together.
// End-to-end test: is a type of test that is used to test the entire application, from the user's perspective.
// Mock: is an object that is used in unit tests to simulate the behavior of real objects. This is useful for isolating the unit under test from its dependencies.
// Stub: is an object that is used in unit tests to provide canned answers to calls made during the test, usually not responding at all to anything outside what's programmed in for the test.
// Spies: is an object that records arguments, return values, the value of this and exception thrown (if any) for all its method calls. Spies can be either anonymous, or wrap existing functions.
// Fakes: is an object that has working implementation, but usually takes some shortcut which makes it not suitable for production (an in memory database is a good example).
// Dummy: is an object that is passed around but never actually used. Usually it is just used to fill parameter lists.


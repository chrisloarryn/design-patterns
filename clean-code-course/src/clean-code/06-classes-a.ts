// @ts-nocheck
// // Language: typescript

(function () {

	type Gender = 'M' | 'F';

	class Person {
		constructor(
			public name: string,
			public birthDate: Date,
			public gender: Gender
		) {}
	}

	class User extends Person {
		constructor(
			public email: string,
			public role: string,
			private lastAccess: Date,
			name: string,
			birthDate: Date,
			gender: Gender,
		) {
			super(
				name,
				birthDate,
				gender,
			);
		}

		checkCredentials() {
			// ...
			return true;
		}	
	}

	class UserSettings extends User {
		constructor(
			public workingDirectory: string,
			public theme: string,
			public lastOpenFolder: string,
			email: string,
			role: string,
			lastAccess: Date,
			name: string,
			gender: Gender,
			birthDate: Date,
		) {
			super(
				email,
				role,
				lastAccess,
				name,
				birthDate,
				gender,
			)
		}
	}

	const user = new UserSettings(
		'/home',
		'dark',
		'/home',
		'chrisloarryn@gmail.com',
		'admin',
		new Date(),
		'Chris',
		'M',
		new Date(),
	);

	console.log(user);
})();
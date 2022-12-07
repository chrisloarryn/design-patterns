// @ts-nocheck
// // Language: typescript

(function () {

	type Gender = 'M' | 'F';

	interface PersonProperties {	
		name: string;
		birthDate: Date;
		gender: Gender;
	}

	class Person {
		public name: string;
		public birthDate: Date;
		public gender: Gender;

		constructor({ 
				name,
				birthDate,
				gender,
			}: PersonProperties
		) {
			this.name = name;
			this.birthDate = birthDate;
			this.gender = gender;
		}
	}

	interface UserProperties extends PersonProperties {
		birthDate: Date;
		name: string;
		gender: Gender;
		email: string;
		role: string;
		lastAccess: Date;
	}

	class User extends Person {
		public email: string;
		public role: string;
		private lastAccess: Date;

		constructor({
			email: string,
			lastAccess: Date,
			gender: Gender,
		}) {
			super({
			  name,
				birthDate,
				gender,
			});

			this.email = email;
			this.role = role;
			this.lastAccess = lastAccess;

		}

		checkCredentials() {
			// ...
			return true;
		}
	}

	interface UserSettingsProperties extends UserProperties {
		workingDirectory: string;
		theme: string;
		lastOpenFolder: string;
	}
 
	class UserSettings extends User {
		public workingDirectory: string;
		public theme: string;
		public lastOpenFolder: string;
		
		constructor({
			workingDirectory: string,
			lastAccess: Date,
			gender: Gender,
		}: UserSettingsProperties) {
			super({
				email,
				role,
				lastAccess,
				name,
				birthDate,
				gender,
			});

			this.workingDirectory = workingDirectory;
			this.theme = theme;
			this.lastOpenFolder = lastOpenFolder;
		}

		
	}

	const user = new UserSettings({
		workingDirectory: '/home',
		theme: 'dark',
		lastOpenFolder: '/home',
		email: 'chrisloarryn@gmail.com',
		name: 'admin',
		birthDate: new Date(),
		gender: 'M',
		birthday: new Date(),
	});

	console.log(user);
})();
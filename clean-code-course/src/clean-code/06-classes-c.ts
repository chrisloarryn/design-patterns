// @ts-nocheck
// // Language: typescript

(function () {

	type Gender = 'M' | 'F';

	interface PersonProperties {
		firstName: string;

		birthDate: Date;
		gender: Gender;
	}

	class Person {
		public firstName: string;
		public birthDate: Date;
		public gender: Gender;

		constructor({
				firstName,
				birthDate,
				gender,
			}: PersonProperties
		) {
			this.firstName = firstName;
			this.birthDate = birthDate;
			this.gender = gender;
		}
	}

	interface UserProperties extends PersonProperties {
		birthDate: Date;
		firstName: string;
		gender: Gender;
		email: string;
		role: string;
		lastAccess: Date;
	}

	class User {
		public email: string;
		public role: string;
		public lastAccess: Date;

		constructor({
			email,
			gender,
			role
		}: UserProperties) {
			this.email = email;
			this.role = role;
			this.lastAccess = new Date();
		}

		checkCredentials() {
			return true;
		}
	}

	interface Settings {
		workingDirectory: string;
		theme: string;
		lastOpenFolder: string;
	}

	class Settings {
		public workingDirectory: string;
		public theme: string;
		public lastOpenFolder: string;

		constructor({
			workingDirectory,
			theme,
			lastOpenFolder,
		}: Settings) {
			this.workingDirectory = workingDirectory;
			this.theme = theme;
			this.lastOpenFolder = lastOpenFolder;
		}
	}

	interface UserSettingsProperties {
		birthDate: Date;
		email: string;
		gender: Gender

		lastOpenFolder: string;
		theme: string;
		firstName: string;
		role: string;
		workingDirectory: string;
	}

	class UserSettings {
		public person: Person;
		public user: User;
		public settings: Settings;

		constructor({
			workingDirectory,
			lastAccess,
			birthDate,
			email,
			firstName,
			gender,
			theme,
			lastOpenFolder,
			role,
		}: UserSettingsProperties) {
			this.person = new Person({
				firstName,
				birthDate,
				gender,
			});

			this.user = new User({
				email,
				role,
			});

			this.settings = new Settings({
				workingDirectory,
				theme,
				lastOpenFolder,
			});
		}
	}


	const user = new UserSettings({
		workingDirectory: '/home',
		theme: 'dark',
		lastOpenFolder: '/home',
		email: 'chrisloarryn@gmail.com',
		firstName: 'admin',
		birthDate: new Date(),
		gender: 'M',
		birthday: new Date(),
		role: 'admin',
	});

	console.log('====================================');
	console.log('user', user.user.checkCredentials());
	console.log('====================================');

	console.log(user);
})();
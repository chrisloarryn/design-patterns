interface Bird {
	eat(): void;
}

interface FlyingBird {
	fly(): void;
}

interface SwimmingBird {
	swim(): void;
}

interface RunningBird {
	run(): void;
}

class Tucan implements Bird, FlyingBird {
	public fly() {
		console.log('I can fly');
	}
	public eat() {
		console.log('I can eat');
	}
	public sing() {
		console.log('I can sing');
	}
}

class Humminbird implements Bird, FlyingBird {
	public fly() {
		console.log('I can fly');
	}
	public eat() {
		console.log('I can sing');
	}
}

class Ostrich implements Bird, RunningBird {
	public eat() {
		console.log('I can eat');
	}
	public run() {
		console.log('I can run');
	}
}

class Penguin implements Bird, SwimmingBird {
	public eat() {
		console.log('I can eat');
	}
	public swim() {
		console.log('I can swim');
	}
}
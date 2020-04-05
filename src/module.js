import {A, B} from './dep';

export class A1 extends A {
	render() {
		return new C();
	}
}

export class C {
	render() {
		return 1;
	}
}

class B1 extends B {
	render() {
		return new D();
	}
}

class D {
	render() {
		return 2;
	}
}

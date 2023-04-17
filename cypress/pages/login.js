class Login {
	getLogIn() {
		return cy.get(":nth-child(1) > .x1i10hfl > ._acan > ._aacl");
	}
	LoginInput() {
		return cy
			.get(":nth-child(1) > .x1npaq5j > ._aa48 > ._aa4b")
			.type("testeradept");
	}
	PasswordInput() {
		return cy
			.get(":nth-child(2) > .x1npaq5j > ._aa48 > ._aa4b")
			.type("k0nk0rd4t");
	}
	getLoginBtn() {
		return cy.get("._acan > .x9f619");
	}
	getOptions() {
		return cy.get(
			".xl5mz7h > :nth-child(1) > .x1n2onr6.x6s0dn4 > .x1i10hfl > .x3nfvp2"
		);
	}
	getLogoutBtn() {
		return cy.get(
			":nth-child(7) > .x1pi30zi > .x1qjc9v5 > .xozqiw3 > .xs83m0k > .x1ja2u2z > .x9f619 > .x1plvlek > .x1lliihq"
		);
	}
}
export default Login;

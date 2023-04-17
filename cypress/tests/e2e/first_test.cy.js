import Login from "../pages/login";
describe("login", () => {
	beforeEach(() => {
		cy.visit("www.instagram.com");
		cy.contains("Allow essential and optional cookies").click();
	});
	// logowanie
	it("Log in to the Instagram", () => {
		const LPage = new Login();
		//cy.get(":nth-child(1) > .x1i10hfl > ._acan > ._aacl").click();
		LPage.getLogIn().click();
		LPage.LoginInput();
		LPage.PasswordInput();
		LPage.getLoginBtn().click();
	});
});

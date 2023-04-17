<<<<<<< HEAD
import Login from "../pages/login";
describe("login", () => {
	beforeEach(() => {
		cy.visit("www.instagram.com");
	});
	// llog in
	it("Log in to the Instagram", () => {
		const LPage = new Login();

		cy.contains("Allow essential and optional cookies").click();
		LPage.getLogIn().click();
		LPage.LoginInput();
		LPage.PasswordInput();
		LPage.getLoginBtn().click();
		LPage.getOptions().click();
		LPage.getLogoutBtn().click();
	});
});
=======
import Login from "../pages/login";
describe("login", () => {
	beforeEach(() => {
		cy.visit("www.instagram.com");
	});
	// llog in
	it("Log in to the Instagram", () => {
		const LPage = new Login();

		cy.contains("Allow essential and optional cookies").click();
		LPage.getLogIn().click();
		LPage.LoginInput();
		LPage.PasswordInput();
		LPage.getLoginBtn().click();
		LPage.getOptions().click();
		LPage.getLogoutBtn().click();
	});
});
>>>>>>> a413a96620852f7786f5df1232661469fbd5d5f6

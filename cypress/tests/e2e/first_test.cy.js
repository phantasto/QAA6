<<<<<<< HEAD
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
=======
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
>>>>>>> a413a96620852f7786f5df1232661469fbd5d5f6

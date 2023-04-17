class MainMenuComponent {
	goToExplore() {
		return cy.get(
			":nth-child(3) > .x1n2onr6.x6s0dn4 > .x1i10hfl > .x3nfvp2"
		);
	}
	HomeButton() {
		return cy
			.get(
				".x1iyjqo2 > :nth-child(1) > :nth-child(1) > .x1n2onr6.x6s0dn4 > .x1i10hfl > .x3nfvp2"
			)
			.click();
	}
	goToMessenger() {
		cy.get(":nth-child(5) > .x1n2onr6.x6s0dn4 > .x1i10hfl > .x3nfvp2");
	}
	goToNavBar() {
		return cy.get(
			":nth-child(3) > .x1n2onr6.x6s0dn4 > .x1i10hfl > .x3nfvp2"
		);
	}
	goToNotifications() {
		cy.get(":nth-child(6) > .x1n2onr6.x6s0dn4 > .x1i10hfl > .x3nfvp2");
	}
	goToRolls() {
		return cy
			.get(":nth-child(4) > .x1n2onr6.x6s0dn4 > .x1i10hfl > .x3nfvp2")
			.click();
	}
	goToSearch() {
		return cy
			.get(":nth-child(2) > .x1n2onr6.x6s0dn4 > .x1i10hfl > .x3nfvp2")
			.click();
	}
}
export default MainMenuComponent;

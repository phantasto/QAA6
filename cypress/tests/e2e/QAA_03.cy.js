/// <reference types="cypress"/>

import LoginPage from "../pages/login";
import Explorer from "../pages/eplore_menu";
import HomePage from "../pages/home_page";
import MessengerTab from "../pages/messenger";
import NotificationsBtn from "../pages/notifications";
import RollsTab from "../pages/rolls";
import SearchTab from "../pages/search_option";
import BackToHomepage from "../pages_components/main_menu_component";

describe("Menu Tabs", () => {
	// going to homepage by pressing home button
	it("Go to Homepage with Home Button", () => {
		const homeTab = new HomePage();
		homeTab.HomeButton().click();
	});

	it("Searching", () => {
		const searchTab = new SearchTab();
		searchTab.goToSearch().click();
	});
	it("Explore Menu", () => {
		const exploreTab = new Explorer();
		exploreTab.goToExplore().click();
	});
	it("NavBar", () => {
		const navBar = new NavBar();
		navBar.goToNavBar().click();
	});
	it("rolki", () => {
		const rollsTab = new RollsTab();
		rollsTab.goToRolls().click();
	});
	it("messenger", () => {
		const messenger = new MessengerTab();
		messenger.goToMessenger().click();
		cy.get(":nth-child(5) > .x1n2onr6.x6s0dn4 > .x1i10hfl > .x3nfvp2");
	});
	it("Notifications", () => {
		const notifications = new NotificationsBtn();
		notifications.goToNotifications().click();
	});
});

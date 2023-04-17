describe("non-typical API test", () => {
	it("GET elements list", () => {
		cy.request({
			method: "GET",
			url: "https://httpbin.org/",
		}).as("details");
		cy.log("Request was sent");
		cy.get("@details").its("status").should("eq", 200);
		cy.get("@details").its("body").should("not.be.empty");
		cy.log("Body is not empty");
		// debug
		cy.get("@details").then(response => {
			cy.log("Responce was: " + JSON.stringify(response.body));
		});
	});
	it("POST 1st element", () => {
		cy.request({
			method: "POST",
			url: "https://httpbin.org//anything",
			body: {
				manufacturer: "Cia",
				model: "Keed",
				since: "2006",
			},
		}).as("details");
		cy.log("Request was sent.");
		cy.get("@details").its("status").should("eq", 200);
		cy.get("@details").its("body").should("not.be.empty");
		cy.log("Body is not empty");
		// debug
		cy.get("@details").then(response => {
			cy.wrap(JSON.stringify(response.body))
				.should("include", "Cia")
				.should("include", "Keed");
		});
	});
	it("POST 2nd element", () => {
		cy.request({
			method: "POST",
			url: "https://httpbin.org//anything",
			body: {
				manufacturer: "Apel",
				model: "Astral",
				since: "1991",
			},
		}).as("details");
		cy.log("Request was sent.");
		cy.get("@details").its("status").should("eq", 200);
		cy.get("@details").its("body").should("not.be.empty");
		cy.log("Body is not empty");
		// debug
		cy.get("@details").then(response => {
			cy.wrap(JSON.stringify(response.body))
				.should("include", "Apel")
				.should("include", "Astral");
		});
	});
	it("Post 3rd element", () => {
		cy.request({
			method: "POST",
			url: "https://httpbin.org/anything",
			body: {
				manufacturer: "Henschel",
				model: "Kanonenjagdpanzer 105",
				since: "1965",
			},
		});
	});
	it("Figurring out if wrong request is wrong. Expected code is 404", () => {
		cy.request({
			method: "GET",
			url: "https://httpbin.org/this-address-doesnt-exist",
			failOnStatusCode: false,
		}).as("error404");
		cy.log("Request was sent.");
		cy.get("@error404").its("status").should("equal", 404);
		cy.log("This address surely doesn't exist");
		// debug
		cy.get("@error404").then(response => {
			cy.wrap(JSON.stringify(response.body)).should(
				"title",
				"404 Not Found"
			);
		});
	});
	it("PUT sth into API", () => {
		cy.request({
			method: "PUT",
			url: "https://httpbin.org/anything",
			body: {
				manufacturer: "Apel",
				model: "Astral",
				since: "1991",
				takenBy: "General Motors",
			},
			failOnStatusCode: false,
		}).as("putting");
		cy.log("Object has been put");
		cy.get("@putting").its("status").should("eq", 200);
		cy.get("@putting").then(response => {
			cy.log(JSON.stringify(response.body));
		});
	});
	it("Now lets DELETE one object", () => {
		cy.request({
			method: "DELETE",
			url: "https://httpbin.org/anything",
			failOnStatusCode: false,
		}).as("deleted");
		cy.get("@deleted").its("status").should("eq", 200);
		cy.get("@deleted").then(response => {
			cy.log(JSON.stringify(response.body));
		});
	});
	it("install User-Agent", () => {
		cy.request({
			method: "GET",
			url: "https://httpbin.org/headers",
			headers: {
				"user-agent": "My test user-agent",
			},
			failOnStatusCode: false,
		})
			.as("installAgent")
			.then("test that user-agent set correctly", () => {
				cy.get("@installAgent").then(response => {
					assert.equal(200, response.status);
					assert.equal(
						"My test user-agent",
						response.requestHeaders["user-agent"]
					);
				});
			});
	});
	it("Let's set some cookies", () => {
		cy.request({
			method: "GET",
			url: "https://httpbin.org/headers",
			headers: {
				Ciasteczko: 90210,
			},
			failOnStatusCode: false,
		}).as("cookies");
		cy.get("@cookies").then(response => {
			cy.log(JSON.stringify(response.body));
		});
	});
	it("Now let's randomize data", () => {
		it("test random ids", () => {
			for (let i = 0; i < 10; i++) {
				const randomId = getRandomInt(10000000);

				cy.request({
					url: "https://httpbin.org/headers",
					id: randomId,
				}).as("randomID");
				cy.get("@randomID").then(response => {
					assert.isTrue(response.status == 200);
				});
			}
		});
	});
});

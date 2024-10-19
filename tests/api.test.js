const request = require('supertest');
const app = require("../index");
describe("True test", () => {
	it('should test true to equal true', () => {
		expect(true).toBe(true)
	})
})

describe("Create author", () => {
	it('should create a new author', async () => {
		const res = await request(app)
			.post('/api/v1/author')
			.send({
				name: 'John Bonham',
				bio: "Four sticks"
			});
		expect(res.statusCode).toEqual(201);
	})
})


import request from "supertest"
import app from "./app.js"

describe("POST /users", () => {

    describe("when passed a username and password", () => {
        test("should respond with a 200 status code", async () => {
            const response = await request(app).post("/users").send({ 
            username: "username", 
            password: "password" 
            })
            expect(response.statusCode).toBe(200)
        },30000)
    })

    describe("when the username or password is missing", () => {
        test("should return a 400 status code", async () => {
            const bodies = [
              { username: "username" },
              { password: "password" },
              {}
            ]
            for (const body of bodies) {
              const response = await request(app).post("/users").send(body)
              expect(response.statusCode).toBe(400)
            }
        },30000)
    })

})
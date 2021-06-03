const nextId = require("./nextId")

describe("nextId", () => {
    it("should return next id when there is data", () => {
        const data = [{id: 1, label: "Rose"}, {id: 3, label: "Tiger"}, {id: 10, label: "Tree"}]
        expect(nextId(data)).toBe(11)
    })
    it("should return 1 when there is no data", () => {
        expect(nextId([])).toBe(1)
    })
    it("should return next id when data is not sorted", () => {
        const data = [{id: 1, label: "Rose"}, {id: 10, label: "Tiger"}, {id: 3, label: "Tree"}]
        expect(nextId(data)).toBe(11)
    })
})

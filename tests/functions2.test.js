import { weekFn } from "../src/functions2.js";

describe ("Testing the day of the week check function", () => {
    test("Function argument is 1", () => {
        expect(weekFn(1)).toBe("Понеділок");
    });
    test("Function argument is 2", () => {
        expect(weekFn(2)).toBe("Вівторок");
    });
    test("Function argument is 3", () => {
        expect(weekFn(3)).toBe("Середа");
    });
    test("Function argument is 4", () => {
        expect(weekFn(4)).toBe("Четвер");
    });
    test("Function argument is 5", () => {
        expect(weekFn(5)).toBe("П'ятниця");
    });
    test("Function argument is 6", () => {
        expect(weekFn(6)).toBe("Субота");
    });
    test("Function argument is 7", () => {
        expect(weekFn(7)).toBe("Неділя");
    });
    test("Function argument is 9", () => {
        expect(weekFn(9)).toBeNull();
    })
    test("Function argument is 1.5", () => {
        expect(weekFn(1.5)).toBeNull();
    });
    test("Function argument is '2' (string) ", () => {
        expect(weekFn('2')).toBeNull();
    });
});
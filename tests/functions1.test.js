import { ageClassification } from '../src/functions1.js';

describe("Testing age classification", () => {
    test ("Number less than 0 is null", () => {
        expect(ageClassification(-1)).toBeNull();
    });
    test ("Number less than 24", () => {
        expect(ageClassification(20)).toBe('Дитинство');
    });
    test ("Number less than 44 and more than 24", () => {
        expect(ageClassification(30.5)).toBe('Молодість');
    });
    test ("Number less than 65 and more than 44", () => {
        expect(ageClassification(50)).toBe("Зрілість")
    });
    test ("Number less than 75 and more than 65", () => {
        expect(ageClassification(70)).toBe("Старість");
    });
    test ("Number less than 90 and more than 75", () => {
        expect(ageClassification(80)).toBe("Довголіття");
    });
    test ("Number less than 120 and more than 90", () => {
        expect(ageClassification(100)).toBe("Рекорд");
    });
    test ("Number more than 120", () => {
        expect(ageClassification(130)).toBeNull();
    });
})
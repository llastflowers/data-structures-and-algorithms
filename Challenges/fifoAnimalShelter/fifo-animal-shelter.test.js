const { AnimalShelter } = require('./fifo-animal-shelter');

describe('AnimalShelter class', () => {
    it('adds a new animal to AnimalShelter queue', () => {
        const animalshelter = new AnimalShelter;
        animalshelter.enqueue(20);
        animalshelter.enqueue(15);
        animalshelter.enqueue(10);
        expect(animalshelter.toString()).toEqual('5 -> 10 -> 15 -> 20');
    });
});
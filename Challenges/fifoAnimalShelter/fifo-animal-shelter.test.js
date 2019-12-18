const { AnimalShelter } = require('./fifo-animal-shelter');

describe('AnimalShelter class', () => {
    it('adds a new cat to AnimalShelter cat queue', () => {
        const animalShelter = new AnimalShelter();

        animalShelter.enqueue({ name: 'Willow', type: 'cat'});
        expect(animalShelter.catQueue.toString()).toEqual('Willow , ');
    });
});
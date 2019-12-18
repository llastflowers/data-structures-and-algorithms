const { AnimalShelter } = require('./fifo-animal-shelter');

describe('AnimalShelter class', () => {
    it('adds a new cat to AnimalShelter cat queue', () => {
        const animalShelter = new AnimalShelter();
        animalShelter.enqueue({ name: 'Willow', type: 'cat'});
        expect(animalShelter.catQueue.toString()).toEqual('Willow , ');
    });
    
    it('removes the next animal of the correct type from AnimalShelter', () => {
        const animalShelter = new AnimalShelter();
        animalShelter.enqueue({ name: 'Haru', type: 'cat'});
        animalShelter.enqueue({ name: 'Willow', type: 'cat'});
        animalShelter.enqueue({ name: 'Rosey', type: 'dog'});
        animalShelter.animalDequeue('cat');
        expect(animalShelter.catQueue.toString()).toEqual('Willow , ');
    });
});
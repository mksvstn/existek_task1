class Animal {
    name?: string;
    
    constructor(age: number, protected voice: string, name?: string, color?: string, weight?: number) {
        name;
        age;
        color;
        weight;
        voice;
    }
    
    protected speak():void {
        console.log(this.voice)
    }
}
    
    
interface IPet {
    readonly name: string;
    owner: Human;
}
    
class Human {
    name: string = '' ;
    hasPet: boolean = false;
    pet?: Animal;
        
    adoptPet(animal: Animal) {
        this.hasPet = true;
        this.pet = animal;
    }
}
    
class Cat extends Animal implements IPet {
    
    name = 'Cat';
    owner: Human;
    
    constructor(age: number, owner: Human) {
        super(age, 'Meow!');
        age;
        this.owner = owner;
    }
}
    
class Dog extends Animal implements IPet {
    
    name = 'Dog';
    owner: Human;
        
    constructor(age: number,  owner: Human) {
        super(age,  'Woof!');
        age;
        this.owner = owner;
    }
}
    
    
enum PopularPets {
    cat = "cat",
    dog = "dog",
    fish = "fish",
    bird = "bird",
    reptile = "reptile",
    rabbit = "rabbit",
    hamster = "hamster"
}
    
type fluffyPet = Cat | Dog
    
const arrayofAnimals: Array<Animal> = [new Animal(2, 'Moooo!'), new Dog(3, new Human()), new Cat(5, new Human())];
    
const petLover: [Human, number] = [new Human(), arrayofAnimals.length];
    
    
    

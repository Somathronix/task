//task 1

const names = ['Иван', 'Мария', 'Алексей', 'Ольга', 'Сергей', 'Анна'];

names.forEach(name => {
    console.log(`Привет, ${name}`);
});

//task 2

const numbers = [1, 2, 3, 4, 5];
const multipliedNumbers = numbers.map(number => number * 10);

console.log(multipliedNumbers);

//task 3

const numbers = [5, 12, 8, 130, 44];
const filteredNumbers = numbers.filter(number => number > 10);

console.log(filteredNumbers);

//task 4 

const people = [
    { name: 'Иван', age: 23 },
    { name: 'Мария', age: 18 },
    { name: 'Алексей', age: 32 },
    { name: 'Ольга', age: 24 },
    { name: 'Сергей', age: 17 },
    { name: 'Анна', age: 21 }
];

const filteredPeople = people.filter(person => person.age > 18);
const formattedPeople = filteredPeople.map(person => `${person.name} (${person.age} лет)`);

console.log(formattedPeople);

//task 5 

const sales = [
    { product: 'Телефон', price: 50000, quantity: 1 },
    { product: 'Чехол', price: 1500, quantity: 2 },
    { product: 'Зарядное устройство', price: 2500, quantity: 1 }
];

const totalSales = sales.reduce((total, sale) => total + (sale.price * sale.quantity), 0);

console.log(`Общая стоимость продаж: ${totalSales}`);


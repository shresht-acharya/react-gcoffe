
import espress from '../assets/espro.png';
import black from '../assets/black.jpg';
import frapp from '../assets/frap.jpg';
import capp from '../assets/pop.png';
import afff from '../assets/adfd.jpg';
import ice from '../assets/ice.png';
import cafe from '../assets/cafe.png';
import care from '../assets/caramel.png';
import epp from '../assets/epp.png';

const coffee_mapping = [
    {
        coffee: [
            {
                label: 'Espresso',
                value: 'espresso',
                description: 'This coffee beverage is made by forcing nearly boiling water under pressure through ground coffee beans, resulting in a brew that’s thicker than those made from other brewing methods.',
                image: espress,
                price: '220',
            },
            {
                label: 'Black Coffee',
                value: 'blackcofee',
                description: 'Black coffee is simply coffee that is normally brewed without the addition of additives such as sugar, milk, cream, or added flavors. Black coffee has no milk or cream added to it.',
                image: black,
                price: '160',
            },
            {
                label: 'Frappacino',
                value: 'frappacino',
                description: 'The frappuccino is a Starbucks specialty, coffee blended with ice and other ingredients and topped with whip cream. But you don’t have to go out of your way to enjoy this beverage! ',
                image: frapp,
                price: '200',
            },
        ]
    },
    {
        coffee: [
            {
                label: 'Cappuccino',
                value: 'cappuccino',
                description: 'This Italian coffee drink is traditionally made with espresso, hot milk, and topped with foamed milk, often prepared with a milk steamer for a thicker froth.',
                image: capp,
                price: '150',
            },
            {
                label: 'Affogato',
                value: 'affogato',
                description: 'The affogato originated from Milan and its name literally translates as “drowned.” Which is fitting as this coffee-based beverage uses the hot and bitter espresso to melt the gelato.',
                image: afff,
                price: '200',
            },
            {
                label: 'Ice Coffee',
                value: 'icecoffee',
                description: 'Iced coffee can be a great, refreshing beverage – but only if you can keep the drink cold without diluting it with ice. Like a regular coffee, its usually a combination of hot espresso and milk.',
                image: ice,
                price: '250',
            },
        ]
    },
    {
        coffee: [
            {
                label: 'CAFÉ AU LAIT',          
                value: 'cafeaulait',
                description: 'The beverage’s name literally translates to “coffee with milk,” very apt as one of its essential components is the thinning of the strong coffee with warm creamy milk. ',
                image: cafe,
                price: '180',
            },
            {
                label: 'Caramel Macchito',
                value: 'caramelmacchito',
                description: 'This refreshing and tasty iced coffee drink is yet another Starbucks classic, and just like the frappuccino, the caramel macchiato can be prepared in as little as 5 minutes.',
                image: care,
                price: '190',
            },
            {
                label: 'Americano',
                value: 'americano',
                description: 'Many espresso-based drinks use milk, but not the café Americano – or simply Americano. The drink also uses espresso but is infused with hot water instead of milk.',
                image: epp,
                price: '160',
            },
        ]
    },
];

export default coffee_mapping;
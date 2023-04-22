import bcrypt from 'bcryptjs'

const data = {
    users: [
        {
            name: 'Mariya',
            email: 'admin@example.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: true
        },
        {
            name: 'Yurii',
            email: 'user@example.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: false
        }

    ],
    products:[
        {
            name: 'Free Shirt',
            slug:'free-shirt',
            category:'Shirts',
            image: '/images/shirt1.jpg',
            price: 70,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 8,
            countInStock: 20,
            description: 'A popular shirt'
        },
        {
            name: 'Fit Shirt',
            slug:'fit-shirt',
            category:'Shirts',
            image: '/images/shirt2.jpg',
            price: 80,
            brand: 'Adidas',
            rating: 3.5,
            numReviews: 10,
            countInStock: 20,
            description: 'A popular shirt'
        },
        {
            name: 'Slim Shirt',
            slug:'slim-shirt',
            category:'Shirts',
            image: '/images/shirt3.jpg',
            price: 90,
            brand: 'Raymond',
            rating: 4.5,
            numReviews: 2,
            countInStock: 20,
            description: 'A popular shirt'
        },
        {
            name: 'Golf Pants',
            slug:'golf-pants',
            category:'Pants',
            image: '/images/pants1.jpg',
            price: 90,
            brand: 'Oliver',
            rating: 2.9,
            numReviews: 13,
            countInStock: 20,
            description: 'A popular pants'
        },
        {
            name: 'Fit Pants',
            slug:'fit-pants',
            category:'Pants',
            image: '/images/pants2.jpg',
            price: 95,
            brand: 'Zara',
            rating: 3.5,
            numReviews: 7,
            countInStock: 20,
            description: 'A popular pants'
        }
    ]
}
export default data
const Products: IProduct[] = [
    {
        _id: '0',
        name: 'Flowers',
        price: 100,
        quantity: 10,
        url: 'https://images.pexels.com/photos/1540258/pexels-photo-1540258.jpeg',
        seller: 'Harrsh',
        ratings: 3.5,
        totalRatings: 40,
    },
    {
        _id: '1',
        name: 'Bed sheet',
        price: 120,
        quantity: 25,
        url: 'https://images.pexels.com/photos/1519753/pexels-photo-1519753.jpeg',
        seller: 'Harrsh',
        ratings: 4.2,
        totalRatings: 40,
    },
    {
        _id: '2',
        name: 'Flowers',
        price: 100,
        quantity: 10,
        url: 'https://images.pexels.com/photos/14725708/pexels-photo-14725708.jpeg',
        seller: 'Harrsh',
        ratings: 3.5,
        totalRatings: 40,
    },
    {
        _id: '3',
        name: 'Bed sheet',
        price: 120,
        quantity: 25,
        url: 'https://images.pexels.com/photos/1519753/pexels-photo-1519753.jpeg',
        seller: 'Harrsh',
        ratings: 4.2,
        totalRatings: 40,
    },
    {
        _id: '4',
        name: 'Flowers',
        price: 100,
        quantity: 10,
        url: 'https://images.pexels.com/photos/14725708/pexels-photo-14725708.jpeg',
        seller: 'Harrsh',
        ratings: 3.5,
        totalRatings: 40,
    },
    {
        _id: '5',
        name: 'Bed sheet',
        price: 120,
        quantity: 25,
        url: 'https://images.pexels.com/photos/1519753/pexels-photo-1519753.jpeg',
        seller: 'Harrsh',
        ratings: 4.2,
        totalRatings: 40,
    },
    {
        _id: '6',
        name: 'Flowers',
        price: 100,
        quantity: 10,
        url: 'https://images.pexels.com/photos/14725708/pexels-photo-14725708.jpeg',
        seller: 'Harrsh',
        ratings: 3.5,
        totalRatings: 40,
    },
    {
        _id: '7',
        name: 'Bed sheet',
        price: 120,
        quantity: 25,
        url: 'https://images.pexels.com/photos/1519753/pexels-photo-1519753.jpeg',
        seller: 'Harrsh',
        ratings: 4.2,
        totalRatings: 40,
    },
    {
        _id: '8',
        name: 'Flowers',
        price: 100,
        quantity: 10,
        url: 'https://images.pexels.com/photos/14725708/pexels-photo-14725708.jpeg',
        seller: 'Harrsh',
        ratings: 3.5,
        totalRatings: 40,
    },
    {
        _id: '9',
        name: 'Bed sheet',
        price: 120,
        quantity: 25,
        url: 'https://images.pexels.com/photos/1519753/pexels-photo-1519753.jpeg',
        seller: 'Harrsh',
        ratings: 4.2,
        totalRatings: 40,
    },
    {
        _id: '10',
        name: 'Flowers',
        price: 100,
        quantity: 10,
        url: 'https://images.pexels.com/photos/14725708/pexels-photo-14725708.jpeg',
        seller: 'Harrsh',
        ratings: 3.5,
        totalRatings: 40,
    },
    {
        _id: '11',
        name: 'Bed sheet',
        price: 120,
        quantity: 25,
        url: 'https://images.pexels.com/photos/1519753/pexels-photo-1519753.jpeg',
        seller: 'Harrsh',
        ratings: 4.2,
        totalRatings: 40,
    },
];

export default Products;

export interface IProduct {
    _id: string;
    name: string;
    price: number;
    quantity: number;
    url: string;
    seller: string;
    ratings: number;
    totalRatings: number;
}

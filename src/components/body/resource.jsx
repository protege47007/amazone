//categories resources
import lappy from '../../images/pc.png';
import couch from '../../images/couch.png';
import mobile from '../../images/mobile.png';
import camera from '../../images/camera-removebg-preview.png';
import shirt from '../../images/shirt.png';
import bicycle from '../../images/bicycle.png';
import headset from '../../images/headset-removebg-preview.png';
import blocks from '../../images/abc-removebg-preview.png';
import pad from '../../images/pad-removebg-preview.png';
import lip from '../../images/lipstick-removebg-preview.png';
import watch from '../../images/watch-removebg-preview.png';

//brand images
import shipping from '../../images/brand/free.png';
import logo from '../../images/brand/logo.png';


//interaction buttons
import hot from '../../images/glyphs/hot.png';
import like from '../../images/glyphs/like.png';
import liked from '../../images/glyphs/liked.png';
import star from '../../images/glyphs/unstar.png';



//product images
import apple from '../../images/products/apple.jpg';
import mac from '../../images/products/mac.jpg';
import ps from '../../images/products/playst.jpg';
import sony from '../../images/products/sony.jpg';
import tendo from '../../images/products/tendo.jpg';
import xbox from '../../images/products/xbox.jpg';




const categories = [
    {
        name: "Computers", 
        src: lappy
    }, 
    {
        name: "Furniture",
        src: couch
    },
    {
        name: " SmartPhones",
        src: mobile
    },
    {
        name: "Electronics",
        src: camera
    },
    {
        name: "Clothing",
        src: shirt
    },
    {
        name: "Sports",
        src: bicycle
    },
    {
        name: "Headsets",
        src: headset
    },
    {
        name: "Toys",
        src: blocks
    },
    {
        name: "Video games",
        src: pad
    },
    {
        name: "Cosmetics",
        src: lip
    },
    {
        name: "Clothing Accessories",
        src: watch
    }];




const products = [
    {
        id: '001',
        name: "Nintendo Switch (2019)",
        company: 'Nintendo',
        price: '175,000',
        save: '175,500',
        like: true,
        rating: 4,
        reviews: 21032,
        src: tendo
    },
    {
        id: '002',
        name: 'Sony A7s III',
        company: 'Sony',
        price: "1,230,000",
        save: '1,240,000',
        like: false,
        rating: 4,
        reviews: 2865,
        src: sony
    },
    {
        id: '003',
        name: 'Apple Iphone 12 (white)',
        company: "Apple",
        price: '510,000',
        save: '540,000',
        like: false,
        rating: 1,
        reviews: 1200897,
        src: apple
    },
    {
        id: '004',
        name: "Apple MacBook Pro 13.3",
        company: 'Apple',
        price: '820,000',
        save: '0.0',
        like: true,
        rating: 4,
        reviews: 169470,
        src: mac
    },
    {
        id: '005',
        name: "Xbox Series X",
        company: 'Microsoft',
        price: '410,000',
        save: '0.0',
        like: true,
        rating: 5,
        reviews: 2230567,
        src: xbox
    },
    {
        id: '006',
        name: "PlayStation 5",
        company: 'PlayStation',
        price: '545,000',
        save: '545,550',
        like: true,
        rating: 5,
        reviews: 2235567,
        src: ps
    }
];




export {products, logo, hot, like, liked, star, shipping, categories};
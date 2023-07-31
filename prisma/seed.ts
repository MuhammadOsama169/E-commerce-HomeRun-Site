

import { v4 as uuidv4 } from 'uuid';
import prisma from '../app/lib/prisma'

interface ProductTypes {
  id: string;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}
const products:ProductTypes[] = [
    {
        id:generateRandomId(),
        title:'Mens Casual Premium Slim Fit T-Shirts',
        price:200,
        category:'Mens Clothing',
        description:'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
        image:'https://res.cloudinary.com/dwz4buven/image/upload/v1675064362/justin_buisson_JU_5_b_Uxr5_Rg_unsplash_1_269a25607d_0e958650d6.jpg'
    },
    {
        id:generateRandomId(),
        title:'Mens Cotton Jacket',
        price:120,
        category:'Mens Clothing',
        description:'Stay cool and stylish all summer long with our Great Outerwear T-Shirt. Crafted with lightweight and breathable fabric, this versatile tee is the perfect companion for your outdoor adventures and casual outings, ensuring comfort and fashion effortlessly blend together.',
        image:'https://res.cloudinary.com/dcxx6ihq2/image/upload/v1690706114/black-graphic-tee_btvays.jpg'
    },
    {
        id:generateRandomId(),
        title:'Black Casual T-Shirt ',
        price:60,
        category:'Womens Clothing',
        description:'95% Cotton Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.',
        image:'https://res.cloudinary.com/dcxx6ihq2/image/upload/v1690706114/black-tee_cjegyf.jpg'
    },
    {
        id:generateRandomId(),
        title:'Blue Casual Skirt',
        price:110,
        category:'Womens Clothing',
        description:'100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort',
        image:'https://res.cloudinary.com/dcxx6ihq2/image/upload/v1690706112/blue-casuals_oueg1t.jpg'
    },
    {
        id:generateRandomId(),
        title:'Casual T-Shirt',
        price:90,
        category:'Womens Clothing',
        description:'Introducing our versatile and stylish product: the Lightweight Travelers Delight. Crafted for the avid traveler or casual outings, its feather-light design ensures unparalleled comfort without compromising on style. Embrace your adventures with ease and flair, as this product becomes the perfect companion for any journey or leisurely day out.',
        image:'https://res.cloudinary.com/dcxx6ihq2/image/upload/v1690706114/black-tee-women_ju8l1v.jpg'
    },
    {
        id:generateRandomId(),
        title:'Womens T-Shirt',
        price:100,
        category:'Womens Clothing',
        description:'Introducing our latest innovation: The epitome of comfort and style, this lightweight masterpiece is designed for both your adventurous trips and everyday casual wear, ensuring you can move with ease and confidence wherever you go',
        image:'https://res.cloudinary.com/dcxx6ihq2/image/upload/v1690706112/black-T-women_rpctwg.jpg'
    },
    {
        id:generateRandomId(),
        title:'Deno Shorts Womens Wear',
        price:150,
        category:'Womens Clothing',
        description:'Introducing our stylish and comfortable outdoor summer wear collection for women, crafted to elevate your seasonal fashion with effortless grace and functionality. Embrace the sunny days ahead while staying chic and cool in these versatile pieces, designed to complement any adventure or leisure activity.',
        image:'https://res.cloudinary.com/dcxx6ihq2/image/upload/v1690706111/deno-shorts-women_vaznsx.jpg'
    },
    {
        id:generateRandomId(),
        title:'Pearly Silk Casuals',
        price:200,
        category:'Womens Clothing',
        description:'When it comes to formal business wear, youll want to aim for a professional and polished look. Here are some classic and timeless options for both men and women',
        image:'https://res.cloudinary.com/dcxx6ihq2/image/upload/v1690706111/formal-brown_e4rbje.jpg'
    },
    {
        id:generateRandomId(),
        title:'Purple Long Dress',
        price:180,
        category:'Womens Clothing',
        description:'This purple long dress is an elegant and captivating garment designed for women. Its flowing silhouette, rich hue, and intricate detailing make it a perfect choice for formal occasions or special events, exuding both sophistication and grace. ',
        image:'https://res.cloudinary.com/dcxx6ihq2/image/upload/v1690706112/graphic-tee_udptgr.jpg'
    },
    {
        id:generateRandomId(),
        title:'Graphic T-Shirt',
        price:200,
        category:'Womens Clothing',
        description:'This casual graphic t-shirt for women is a stylish and comfortable wardrobe staple, designed to effortlessly elevate any casual outfit. With its eye-catching graphic print and soft, breathable fabric, it adds a touch of personality and flair to your everyday look, perfect for laid-back outings or hanging out with friends.',
        image:'https://res.cloudinary.com/dcxx6ihq2/image/upload/v1690706111/graphic-tee-women_it0xpj.jpg'
    },
    {
        id:generateRandomId(),
        title:'White Neon Green Sneakers',
        price:120,
        category:'Shoes',
        description:'White Neon Green Sneakers: These stylish sneakers feature a clean white design accented with vibrant neon green detailing, offering a perfect blend of timeless elegance and modern flair. Whether youre hitting the gym or strolling around town, these eye-catching shoes are sure to turn heads and add a refreshing pop of color to any outfit.',
        image:'https://res.cloudinary.com/dcxx6ihq2/image/upload/v1690706112/green-sneakers_ltjnsy.jpg'
    },
    {
        id:generateRandomId(),
        title:'Grey Long Sleeves',
        price:150,
        category:'Womens Clothing',
        description:'Introducing a chic and versatile addition to any wardrobe, our grey long sleeves for women offer a perfect blend of comfort and style. Crafted with premium materials, these elegant garments ensure a timeless look for any occasion, from casual outings to formal events.',
        image:'https://res.cloudinary.com/dcxx6ihq2/image/upload/v1690706112/Grey-longsleeves_biycel.jpg'
    },
    {
        id:generateRandomId(),
        title:'Kai Special Edition Jeans',
        price:80,
        category:'Womens Clothing',
        description:'These casual womens jeans are the perfect wardrobe staple, designed to be versatile and comfortable throughout all seasons. With their timeless style and durable construction, these jeans effortlessly blend fashion and functionality, making them a go-to choice for any occasion, year-round.',
        image:'https://res.cloudinary.com/dcxx6ihq2/image/upload/v1690706112/kai-special-edition-jeans_sygnsp.jpg'
    },
    {
        id:generateRandomId(),
        title:'Laura Chouette Red Jeans',
        price:120,
        category:'Womens Clothing',
        description:'These vibrant red jeans designed exclusively for women are a versatile and stylish addition to any wardrobe, providing a bold and fashionable choice for all seasons, combining comfort with a striking statement of personal style. Whether its a sunny summer day or a chilly winter evening, these red jeans effortlessly transition from casual to chic, making them a go-to fashion staple all year round.',
        image:'https://res.cloudinary.com/dcxx6ihq2/image/upload/v1690706112/Laura-Chouette_neiypm.jpg'
    },
    {
        id:generateRandomId(),
        title:'Nathan Dueller Leather Shoes',
        price:150,
        category:'Shoes',
        description:'These leather shoes are specially designed for men, catering to various outdoor activities like hiking, trekking, and other adventurous pursuits. Crafted from high-quality leather, they offer durability, comfort, and style, making them the perfect choice for any outdoor enthusiast looking to conquer new terrains with confidence and ease.',
        image:'https://res.cloudinary.com/dcxx6ihq2/image/upload/v1690706113/nathan-duler-shoes_tno88d.jpg'
    },
    {
        id:generateRandomId(),
        title:'nr37 Hoodie',
        price:180,
        category:'Mens Clothing',
        description:'This mens hoodie is the ultimate essential for the winter and autumn seasons, combining warmth and style effortlessly. Its soft and insulating fabric ensures you stay cozy during chilly days, while its versatile design complements any casual outfit, making it a go-to choice for outdoor activities or simply lounging in comfort.',
        image:'https://res.cloudinary.com/dcxx6ihq2/image/upload/v1690706113/nr37-fashion-hoodie_wrf2qn.jpg'
    },
    {
        id:generateRandomId(),
        title:'Red Shoes',
        price:100,
        category:'Shoes',
        description:'These red casual sneakers are designed for both men and women, offering a versatile and stylish footwear option suitable for various occasions. With their vibrant red color, comfortable design, and unisex appeal, these sneakers are the perfect choice for anyone looking to add a pop of color and effortless flair to their everyday outfits.',
        image:'https://res.cloudinary.com/dcxx6ihq2/image/upload/v1690706113/red-shoes_eniyve.jpg'
    },
    {
        id:generateRandomId(),
        title:'Summer Womens Casuals',
        price:80,
        category:'Womens Clothing',
        description:'Summer womens casuals are a vibrant and comfortable collection of clothing designed to embrace the carefree spirit of the season. From breezy sundresses adorned with playful patterns to stylish shorts paired with airy tops, these outfits effortlessly blend fashion and ease for a laid-back yet chic summer look.',
        image:'https://res.cloudinary.com/dcxx6ihq2/image/upload/v1690706113/summer-women-shirt_f2gafd.jpg'
    },
    {
        id:generateRandomId(),
        title:'Uni Wan Black T-Shirt',
        price:50,
        category:'Womens Clothing',
        description:'Womens casuals in black offer a versatile and chic option for women seeking comfortable and stylish everyday wear. With their timeless appeal and easy-to-match color, these black casuals are the perfect addition to any womans wardrobe, effortlessly elevating any casual outfit to a fashionable and confident ensemble.',
        image:'https://res.cloudinary.com/dcxx6ihq2/image/upload/v1690706113/uni-wan-black-tee_kyxvzd.jpg'
    },
    
    {
        id:generateRandomId(),
        title:'White Casuals Wear',
        price:50,
        category:'Womens Clothing',
        description:'Womens casuals in white are stylish and comfortable footwear options designed for women. These versatile shoes complement a wide range of casual outfits, providing a chic and laid-back look for various occasions.',
        image:'https://res.cloudinary.com/dcxx6ihq2/image/upload/v1690706113/white-casual-women_yddux9.jpg'
    },
    {
        id:generateRandomId(),
        title:'White Formal Wear',
        price:200,
        category:'Womens Clothing',
        description:'Womens formal white attire exudes elegance and sophistication, tailored to accentuate the grace and poise of modern women. From pristine white dresses to stylish pant suits, these ensembles are perfect for special occasions, professional gatherings, and events that demand timeless beauty and class.',
        image:'https://res.cloudinary.com/dcxx6ihq2/image/upload/v1690706113/white-dress_v3i21y.jpg'
    },
    {
        id:generateRandomId(),
        title:'White Addidas Shoes',
        price:200,
        category:'Shoes',
        description:'White fashion shoes are stylish and versatile footwear designed to complement a wide range of outfits, offering a fresh and modern aesthetic. With their clean and pristine appearance, these shoes effortlessly elevate any ensemble, making them a must-have accessory for fashion-forward individuals.',
        image:'https://res.cloudinary.com/dcxx6ihq2/image/upload/v1690706114/white-fashion-shoes_hdtz4m.jpg'
    },
    {
        id:generateRandomId(),
        title:'White Casual T-Shirt',
        price:200,
        category:'Mens Clothing',
        description:'This white graphic tee for men features a clean and timeless design, combining a comfortable fit with a stylish statement. Its versatile appeal makes it a wardrobe essential, suitable for casual outings or paired with other wardrobe pieces for a fashion-forward look.',
        image:'https://res.cloudinary.com/dcxx6ihq2/image/upload/v1690706113/white-graphic-tee_dgylwk.jpg'
    },
    {
        id:generateRandomId(),
        title:'White Casual T-Shirt',
        price:50,
        category:'Mens Clothing',
        description:'This white graphic tee for men is a versatile and stylish wardrobe staple. With its clean design and comfortable fit, it pairs effortlessly with any outfit, making it a must-have for any fashion-forward gentleman. The high-quality cotton fabric ensures both durability and breathability, while the eye-catching graphic adds a touch of individuality and flair to elevate any casual ensemble.',
        image:'https://res.cloudinary.com/dcxx6ihq2/image/upload/v1690708635/pexels-shishir-shuvo-12650794_uvgleo.jpg'
    },
    {
        id:generateRandomId(),
        title:'White Casual T-Shirt',
        price:200,
        category:'Shoes',
        description:'White fashion shoes are a versatile and stylish footwear option, exuding a clean and contemporary aesthetic. These trendy shoes effortlessly complement various outfits, making them a popular choice for both casual and formal occasions.',
        image:'https://res.cloudinary.com/dcxx6ihq2/image/upload/v1690706114/white-shoes_uvlpdk.jpg'
    },
    {
        id:generateRandomId(),
        title:'White Casual Wear',
        price:200,
        category:'Womens Clothing',
        description:'Womens casual white for women" refers to a collection of laid-back and comfortable white clothing designed specifically for women. This versatile ensemble combines style and ease, providing a fashion-forward option for various relaxed occasions and daily wear.',
        image:'https://res.cloudinary.com/dcxx6ihq2/image/upload/v1690706114/white-Tee_yovqnt.jpg'
    },
    {
        id:generateRandomId(),
        title:'White Casual T-Shirt',
        price:50,
        category:'Mens Clothing',
        description:'This white graphic tee for men features a minimalist design, combining comfort and style effortlessly. Crafted from soft, high-quality cotton, it showcases a timeless appeal that complements any casual outfit, making it a wardrobe essential for fashion-conscious men.',
        image:'https://res.cloudinary.com/dcxx6ihq2/image/upload/v1690706114/white-tee-men_biiqbi.jpg'
    },
    
]
function generateRandomId() {
    return uuidv4();
  }
  
  async function main() {
    console.log(`Start seeding...`);
    for (const product of products) {
      await prisma.product.create({ data: product });
    }
    console.log(`Seeding finished!`);
  }
  
  main()
    .then(async () => {
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
    });
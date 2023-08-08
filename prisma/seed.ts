

import { v4 as uuidv4 } from 'uuid';
import prisma from '../app/lib/prisma'

interface ProductTypes {
  id: string;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string[] | string;
}
const products:ProductTypes[] = [
    {
        id:generateRandomId(),
        title:'Khizana Embellished Trim Detail Dress',
        price:200,
        category:'Womens Clothing',
        description:'Discover elegance with our Khizana Embellished Trim Detail Dress. This exquisite piece combines intricate embellishments with a refined trim design, perfect for making a statement at any special occasion.',
        image:['https://res.cloudinary.com/dcxx6ihq2/image/upload/v1691484488/6433b4c1-1b68-49b3-8871-9d0bc6937532_tmfcn1.png',
    'https://res.cloudinary.com/dcxx6ihq2/image/upload/v1691484488/517f4f40-f5c1-4f19-be5d-ed26502ec2b1_ldp1zy.png']
    },
    {
        id:generateRandomId(),
        title:'PUMA Mens Casual T-Shirt',
        price:20,
        category:'Mens Clothing',
        description:'Discover casual comfort and sporty style with the PUMA Mens Casual T-Shirt. Crafted with quality materials, this shirt offers a perfect blend of fashion and relaxation for the modern urban explorer.',
        image:['https://res.cloudinary.com/dcxx6ihq2/image/upload/v1691484489/71c99ca4-499b-4a5b-9473-20637d222d2e_ad6hqr.png',
    'https://res.cloudinary.com/dcxx6ihq2/image/upload/v1691484491/54ecf0b2-2904-49d6-9449-0355b2004cf6_lkohq5.png']
    },
    {
        id:generateRandomId(),
        title:'Youth Logo Dress',
        price:20,
        category:'Womens Clothing',
        description:'Discover youthful elegance with our Youth Logo Dress, a captivating blend of style and comfort. This chic dress features a dynamic logo design, perfect for fashion-forward individuals seeking a versatile statement piece',
        image:['https://res.cloudinary.com/dcxx6ihq2/image/upload/v1691484489/2449aa6e-870e-41f1-a5df-4c59b724597a_evd0bb.png',
    'https://res.cloudinary.com/dcxx6ihq2/image/upload/v1691484489/e0d3dc28-38c8-44a7-9a18-3d2330446f28_xzkoeo.png']
    },
    {
        id:generateRandomId(),
        title:'Satin Court Shoe With Embellishment Cream',
        price:80,
        category:'Shoes',
        description:'Elevate your elegance with our Satin Court Shoe in Cream, adorned with exquisite embellishments. This shoe seamlessly combines luxurious satin comfort with captivating embellishments for a truly enchanting and sophisticated addition to your ensemble.',
        image:['https://res.cloudinary.com/dcxx6ihq2/image/upload/v1691484489/N31348926V_1_en548m.png',
    'https://res.cloudinary.com/dcxx6ihq2/image/upload/v1691484490/N31348926V_2_eqr9ej.png']
    },
    {
        id:generateRandomId(),
        title:'Knee Length Short Sleeve Solid Dress Black',
        price:100,
        category:'Womens Clothing',
        description:'Discover timeless elegance with our Knee Length Short Sleeve Solid Dress in Black. Crafted with attention to detail, this dress blends comfort and style, making it a versatile choice for any occasion.',
        image:['https://res.cloudinary.com/dcxx6ihq2/image/upload/v1691484490/N47960358V_1_ciyr7i.png',
    'https://res.cloudinary.com/dcxx6ihq2/image/upload/v1691484490/N47960358V_3_b6m37u.png']
    },
    {
        id:generateRandomId(),
        title:'Bardot Balloon Sleeve Floral Print Dress',
        price:50,
        category:'Womens Clothing',
        description:'Elevate your style with our Bardot Balloon Sleeve Floral Print Dress, a perfect blend of elegance and flair. Embrace the charm of its floral patterns and embrace your femininity with its unique balloon sleeves, making it an essential choice for any special occasion.',
        image:['https://res.cloudinary.com/dcxx6ihq2/image/upload/v1691484489/99ec40ac-02ee-400a-8103-c1f65b70fdda_uuysri.png',
    'https://res.cloudinary.com/dcxx6ihq2/image/upload/v1691484489/87be63f7-b17c-4535-9a4d-716a9916cfb1_pp1qps.png']
    },
    {
        id:generateRandomId(),
        title:'Seventy Five Denim Jacket',
        price:160,
        category:'Mens Clothing',
        description:'The Seventy Five Denim Jacket blends timeless style with modern comfort, featuring a sleek design, durable construction, and a comfortable fit, making it a versatile choice for both casual outings and urban adventures. Elevate your wardrobe with this iconic jacket that effortlessly combines fashion and functionality.',
        image:['https://res.cloudinary.com/dcxx6ihq2/image/upload/v1691484491/39f4918d-7264-4d7b-96e5-7d535665adc3_wvtmew.png',
    'https://res.cloudinary.com/dcxx6ihq2/image/upload/v1691484492/20db871e-87de-475f-bc6d-e4afa9edadc3_j8nal9.png']
    },
    {
        id:generateRandomId(),
        title:'Seventy Five Bomber Jacket',
        price:150,
        category:'Mens Clothing',
        description:'The Seventy Five Bomber Jacket blends timeless style with modern comfort, featuring a sleek design, durable construction, and a comfortable fit, making it a versatile choice for both casual outings and urban adventures. Elevate your wardrobe with this iconic jacket that effortlessly combines fashion and functionality.',
        image:['https://res.cloudinary.com/dcxx6ihq2/image/upload/v1691484491/5c991361-80e1-402b-9460-b165863d599f_muxyiv.png',
    'https://res.cloudinary.com/dcxx6ihq2/image/upload/v1691484491/2e15ede8-b068-4db8-b993-52017199a074_kuzxy9.png']
    },
    {
        id:generateRandomId(),
        title:'JACK & JONES Varsity Bomber Jacket',
        price:180,
        category:'Mens Clothing',
        description:'The Seventy Five Bomber Jacket blends timeless style with modern comfort, featuring a sleek design, durable construction, and a comfortable fit, making it a versatile choice for both casual outings and urban adventures. Elevate your wardrobe with this iconic jacket that effortlessly combines fashion and functionality.',
        image:['https://res.cloudinary.com/dcxx6ihq2/image/upload/v1691484489/ee4aae74-ffd8-45a3-84cd-090ced702879_rhsxvi.png',
    'https://res.cloudinary.com/dcxx6ihq2/image/upload/v1691484489/7cf89c85-03e4-4fe7-a732-c282f777b255_f7bz7e.png']
    },
    {
        id:generateRandomId(),
        title:'Reebok Baseball Dress',
        price:50,
        category:'Womens Clothing',
        description:'Elevate your sporty style with the Reebok Baseball Dress for women. This trendy dress combines athletic flair with a touch of femininity, perfect for casual outings or active days',
        image:['https://res.cloudinary.com/dcxx6ihq2/image/upload/v1691484489/93465d58-7462-4d2f-8efc-7e4bdf2b333d_iwtime.png',
    'https://res.cloudinary.com/dcxx6ihq2/image/upload/v1691484489/fb4dfca2-9db1-4167-80fa-23608f67be43_tvcynj.png']
    },
    {
        id:generateRandomId(),
        title:'Floral Printed Round Neck Top Pink/White',
        price:100,
        category:'Womens Clothing',
        description:'Explore effortless elegance with our Floral Printed Round Neck Top in a charming Pink/White palette. This versatile piece combines a classic round neck design with a delicate floral pattern, perfect for adding a touch of sophistication to your wardrobe.',
        image:['https://res.cloudinary.com/dcxx6ihq2/image/upload/v1691484490/N49330465V_2_w6ml44.png',
    'https://res.cloudinary.com/dcxx6ihq2/image/upload/v1691484491/N49330465V_3_v8czwg.png']
    },
    {
        id:generateRandomId(),
        title:'Casual Printed Top Multicolour',
        price:110,
        category:'Womens Clothing',
        description:'Discover style and comfort with our Casual Printed Top in a mesmerizing multicolor design, tailor-made for women who embrace versatility and fashion. Elevate your wardrobe with this vibrant piece that effortlessly combines elegance and casual charm',
        image:['https://res.cloudinary.com/dcxx6ihq2/image/upload/v1691484490/N48739065V_1_bjofpb.png',
    'https://res.cloudinary.com/dcxx6ihq2/image/upload/v1691484490/N48739065V_2_ak5mzb.png']
    },

    {
        id:generateRandomId(),
        title:'Mens Casual Slim Fit',
        price:200,
        category:'Mens Clothing',
        description:'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
        image:['https://res.cloudinary.com/dwz4buven/image/upload/v1675064362/justin_buisson_JU_5_b_Uxr5_Rg_unsplash_1_269a25607d_0e958650d6.jpg']
    },

    {
        id:generateRandomId(),
        title:'White Neon Green Sneakers',
        price:120,
        category:'Shoes',
        description:'White Neon Green Sneakers: These stylish sneakers feature a clean white design accented with vibrant neon green detailing, offering a perfect blend of timeless elegance and modern flair. Whether youre hitting the gym or strolling around town, these eye-catching shoes are sure to turn heads and add a refreshing pop of color to any outfit.',
        image:['https://res.cloudinary.com/dcxx6ihq2/image/upload/v1690706112/green-sneakers_ltjnsy.jpg']
    },

    {
        id:generateRandomId(),
        title:'Nathan Dueller Leather Shoes',
        price:150,
        category:'Shoes',
        description:'These leather shoes are specially designed for men, catering to various outdoor activities like hiking, trekking, and other adventurous pursuits. Crafted from high-quality leather, they offer durability, comfort, and style, making them the perfect choice for any outdoor enthusiast looking to conquer new terrains with confidence and ease.',
        image:['https://res.cloudinary.com/dcxx6ihq2/image/upload/v1690706113/nathan-duler-shoes_tno88d.jpg']
    },

    {
        id:generateRandomId(),
        title:'Red/Black Anti Slip Shoes',
        price:150,
        category:'Shoes',
        description:'These red casual sneakers are designed for both men and women, offering a versatile and stylish footwear option suitable for various occasions. With their vibrant red color, comfortable design, and unisex appeal, these sneakers are the perfect choice for anyone looking to add a pop of color and effortless flair to their everyday outfits.',
        image:['https://res.cloudinary.com/dcxx6ihq2/image/upload/v1691484491/2e376e81-8748-4a39-8bad-1d37a06c18a8_vlljem.png',
    'https://res.cloudinary.com/dcxx6ihq2/image/upload/v1691484491/b296b810-a3f6-443a-bd6a-5037fcb107c2_tezgsc.png']
    },
    {
        id:generateRandomId(),
        title:'White Addidas Shoes',
        price:200,
        category:'Shoes',
        description:'White fashion shoes are stylish and versatile footwear designed to complement a wide range of outfits, offering a fresh and modern aesthetic. With their clean and pristine appearance, these shoes effortlessly elevate any ensemble, making them a must-have accessory for fashion-forward individuals.',
        image:['https://res.cloudinary.com/dcxx6ihq2/image/upload/v1690706114/white-fashion-shoes_hdtz4m.jpg',
        'https://res.cloudinary.com/dcxx6ihq2/image/upload/v1690706114/white-shoes_uvlpdk.jpg'
    ]
    },
    {
        id:generateRandomId(),
        title:'White Casual T-Shirt',
        price:200,
        category:'Mens Clothing',
        description:'This white graphic tee for men features a clean and timeless design, combining a comfortable fit with a stylish statement. Its versatile appeal makes it a wardrobe essential, suitable for casual outings or paired with other wardrobe pieces for a fashion-forward look.',
        image:['https://res.cloudinary.com/dcxx6ihq2/image/upload/v1690706113/white-graphic-tee_dgylwk.jpg',
    'https://res.cloudinary.com/dcxx6ihq2/image/upload/v1690706113/white-graphic-tee_dwwkg6.jpg']
    },
    {
        id:generateRandomId(),
        title:'White Casual T-Shirt',
        price:50,
        category:'Mens Clothing',
        description:'This white graphic tee for men features a minimalist design, combining comfort and style effortlessly. Crafted from soft, high-quality cotton, it showcases a timeless appeal that complements any casual outfit, making it a wardrobe essential for fashion-conscious men.',
        image:['https://res.cloudinary.com/dcxx6ihq2/image/upload/v1690706114/white-tee-men_biiqbi.jpg']
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
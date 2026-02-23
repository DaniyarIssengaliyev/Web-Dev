import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { Product } from '../models/product';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private categories: Category[] = [
    { id: 1, name: 'Guitars' },
    { id: 2, name: 'Strings' },
    { id: 3, name: 'Belts' },
    { id: 4, name: 'Capos' },
  ];

  private products: Product[] = [
    {
        id: 1,
        name: 'Гитара акустическая Yamaha F310',
        description: 'YAMAHA F310 воплощает приверженность качеству дизайна и звучания, свойственному всем акустикам Yamaha, и объединяет эти достоинства в единое целое по непревзойденно доступной цене.',
        price: 69490,
        rating: 5,
        image: 'product1/front1.jpg',
        images: ['product1/back1.jpg','product1/add1.jpg'],
        link: 'https://kaspi.kz/shop/p/gitara-akusticheskaja-yamaha-f310-korichnevyi-chernyi-zheltyi-14100411/?c=750000000',
        likes: 0,
        categoryId: 1
    },
    {
        id: 2,
        name: 'Гитара акустическая MuzLife MUSIC ALMATY',
        description: 'Гитара MuzLife MUSIC ALMATY 05054000 — идеальный выбор для музыкантов, которые ценят качество и стиль',
        price: 16990,
        rating: 5,
        image: 'product1/front2.jpeg',
        images: ['product1/back2.jpeg','product1/add2.jpeg'],
        link: 'https://kaspi.kz/shop/p/gitara-akusticheskaja-muzlife-music-almaty-05054000-chernyi-128973257/?c=750000000',
        likes: 0,
        categoryId: 1
    },
    {
        id: 3,
        name: 'Укулеле сопрано Veston KUS 15',
        description: 'Укулеле сопрано Veston KUS 15 зеленый.',
        price: 15000,
        rating: 5,
        image: 'product1/front3.jpg',
        images: ['product1/back3.jpg','product1/add3.jpg'],
        link: 'https://kaspi.kz/shop/p/ukulele-soprano-veston-kus-15-zelenyi-15500115/?c=750000000',
        likes: 0,
        categoryId: 1
    },
    {
        id: 4,
        name: 'Гитара акустическая Fender CD-60SCE',
        description: 'Fender CD-60SCE Natural – электроакустическая гитара из линейки Classic Design.   ',
        price: 237415,
        rating: 5,
        image: 'product1/front4.jpg',
        images: ['product1/back4.jpg','product1/add4.jpg'],
        link: 'https://kaspi.kz/shop/p/gitara-akusticheskaja-adagio-sb-kn41-muzlife-korichnevyi-105337505/?c=750000000',
        likes: 0,
        categoryId: 1

    },
    {
        id: 5,
        name: 'ENYA MUSIC электрогитара Nova Go Sonic/BK черный',
        description: 'Умная электрогитара нового поколения, встроенный динамик 10 Вт, уникальный корпус из углеродного волокна размером 39, форма Лес Пол, передовой чип и интеллектуальная звуковая система Enya S1 DSP, Bluetooth подключение для воспроизведения и управления через приложение, поддерживает до 10 часов автономной работы и требует всего 2 часа быстрой зарядки, идеально подходит для путешествий и выступлений на сцене! В комплекте: чехол, ключ, кабель для зарядки, 6.35 кабель.',
        price: 205920,
        rating: 5,
        image: 'product1/front5.jfif',
        images: ['product1/back5.jfif','product1/add5.jfif'],
        link: 'https://kaspi.kz/shop/p/enya-music-elektrogitara-nova-go-sonic-bk-chernyi-117378140/?c=750000000',
        likes: 0,
        categoryId: 1
    },
    {
        id:6,
        name: "Струны D'Addario Custom Light EJ13 NT11-52'",
        description:"🎸 СТРУНЫ ДЛЯ АКУСТИЧЕСКОЙ ГИТАРЫ D'ADDARIO EJ15 NT 10–47",
        price:1269,
        rating:5,
        image:'https://resources.cdn-kaspi.kz/img/m/p/h50/hf3/63971522019358.jpg?format=gallery-large',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/h50/hf3/63971522019358.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h8d/h77/63971525230622.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/hde/ha6/63971528441886.jpg?format=gallery-medium'],
        link:'https://kaspi.kz/shop/p/d-addario-custom-light-ej13-nt11-52-100284194/?c=750000000',
        likes:0,
        categoryId:2
    },
    {
        id: 7,
        name:"Струны Струны D'Addario EJ27N NT29-45",
        description:"🎸 СТРУНЫ ДЛЯ КЛАССИЧЕСКОЙ ГИТАРЫ D'ADDARIO EJ27N NT 28–43",
        price: 864,
        rating:4.8,
        image:"https://resources.cdn-kaspi.kz/img/m/p/h09/h1b/63907471589406.jpg?format=gallery-medium",
        images:["https://resources.cdn-kaspi.kz/img/m/p/h09/h1b/63907471589406.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/hc7/he3/63907474014238.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/h7f/h14/63907476766750.jpg?format=gallery-medium"],
        link:"https://kaspi.kz/shop/p/struny-d-addario-ej27n-nt29-45-100269581/?c=750000000",
        likes:0,
        categoryId:2
    },
    {
        id: 8,
        name:"Струны D'Addario Acoustic X-Lite EZ900 NT10-50",
        description:"🔥 Универсальные струны, созданные для акустической гитары, обеспечивающие мягкость при игре и сбалансированное звучание во всём диапазоне.",
        price: 974,
        rating:5,
        image:"https://resources.cdn-kaspi.kz/img/m/p/h5b/h01/63904631914526.jpg?format=gallery-medium",
        images:["https://resources.cdn-kaspi.kz/img/m/p/h5b/h01/63904631914526.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/hb4/hbf/63904633913374.jpg?format=gallery-medium  ",
            "https://resources.cdn-kaspi.kz/img/m/p/h54/he6/63904635977758.jpg?format=gallery-medium"],
        link:"https://kaspi.kz/shop/p/d-addario-acoustic-x-lite-ez900-nt10-50-100295159/?c=750000000",
        likes:0,
        categoryId:2
    },
    {
        id: 9,
        name:"Струны D'Addario XSAPB1152 NT11-52",
        description:"🎸 СТРУНЫ D'Addario XSAPB1152 NT11–52 🔥 Струны из фосфорной бронзы для акустической гитары, обеспечивающие яркий, сбалансированный звук и комфорт при игре NT.",
        price: 7897,
        rating:5,
        image:"https://resources.cdn-kaspi.kz/img/m/p/h1a/h80/64217088327710.jpg?format=gallery-medium",
        images:["https://resources.cdn-kaspi.kz/img/m/p/h1a/h80/64217088327710.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/h34/h17/64217091080222.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/p6c/p38/72358065.png?format=gallery-medium"],
        link:"https://kaspi.kz/shop/p/d-addario-xsapb1152-nt11-52-101394524/?c=750000000",
        likes:0,
        categoryId:2
    },
    {
        id: 10,
        name:"Струны D'Addario EJ16 NT12-53",
        description:"🎸 СТРУНЫ ДЛЯ АКУСТИЧЕСКОЙ ГИТАРЫ D'ADDARIO EJ16 NT 12–53 🔥 Чистый и сбалансированный тон с комфортным натяжением — струны NT идеально подходят для ритма, фингерстайла и акустической игры.",
        price: 982,
        rating:4.9,
        image:"https://resources.cdn-kaspi.kz/img/m/p/h2a/h22/63982893039646.jpg?format=gallery-medium",
        images:["https://resources.cdn-kaspi.kz/img/m/p/h2a/h22/63982893039646.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/h20/hd0/63982896349214.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/h3e/h8f/63982899101726.jpg?format=gallery-medium"],
        link:"https://kaspi.kz/shop/p/struny-d-addario-ej16-nt12-53-100271132/?c=750000000",
        likes:0,
        categoryId:2
    },
    {
        id: 11,
        name: "Ремень RedPRC Almaty 111204 мультиколор",
        description:"Стильный и удобный ремень для вашей гитары. Ремень крепится на пуговицы, в комплекте шнурок для крепления за гриф для классической гитары.",
        price: 1124,
        rating:5,
        image:"https://resources.cdn-kaspi.kz/img/m/p/h6b/h36/64379746615326.jpg?format=gallery-medium",
        images:["https://resources.cdn-kaspi.kz/img/m/p/h6b/h36/64379746615326.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/h8a/he2/64379748450334.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/hfa/h8a/64379752513566.jpg?format=gallery-medium"],
        link:"https://kaspi.kz/shop/p/remen-redprc-almaty-111204-mul-tikolor-104364503/?c=750000000",
        likes:0,
        categoryId:3
    },
    {
        id: 12,
        name: "Ремень RedPRC Almaty 111203 черный, синий",
        description:"Стильный и удобный ремень для вашей гитары. Ремень крепится на пуговицы, в комплекте шнурок для крепления за гриф для классической гитары.",
        price: 1127,
        rating:5,
        image:"https://resources.cdn-kaspi.kz/img/m/p/hd2/h58/64452392878110.jpg?format=gallery-medium",
        images:["https://resources.cdn-kaspi.kz/img/m/p/hd2/h58/64452392878110.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/h25/h38/64452394909726.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/hda/h23/64452397006878.jpg?format=gallery-medium"],
        link:"https://kaspi.kz/shop/p/redprc-almaty-111203-chernyi-sinii-104364502/?c=750000000",
        likes:0,
        categoryId:3
    },
    {
        id: 13,
        name: "Ремень RedPRC Almaty 111205 черный, белый",
        description:"Стильный и удобный ремень для вашей гитары. Ремень крепится на пуговицы, в комплекте шнурок для крепления за гриф для классической гитары.",
        price: 1188,
        rating:4.9,
        image:"https://resources.cdn-kaspi.kz/img/m/p/h7a/h40/64452628021278.jpg?format=gallery-medium",
        images:["https://resources.cdn-kaspi.kz/img/m/p/h7a/h40/64452628021278.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/ha9/hc3/64452630904862.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/ha4/h17/64452633231390.jpg?format=gallery-medium"],
        link:"https://kaspi.kz/shop/p/redprc-almaty-111205-chernyi-belyi-104364504/?c=750000000",
        likes:0,
        categoryId:3
    },
    {
        id: 14,
        name: "Ремень RedPRC Almaty 111202 черный, красный",
        description:"Стильный и удобный ремень для вашей гитары. Ремень крепится на пуговицы, в комплекте шнурок для крепления за гриф для классической гитары.",
        price: 1129,
        rating:4.9,
        image:"https://resources.cdn-kaspi.kz/img/m/p/h11/h37/64380134064158.jpg?format=gallery-medium",
        images:["https://resources.cdn-kaspi.kz/img/m/p/h11/h37/64380134064158.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/hae/h94/64380169256990.jpg?format=gallery-medium"],
        link:"https://kaspi.kz/shop/p/redprc-almaty-111202-chernyi-krasnyi-104364501/?c=750000000",
        likes:0,
        categoryId:3
    },
    {
        id: 15,
        name: "Ремень RedPRC Almaty 111209 черный, желтый",
        description:"Стильный и удобный ремень для вашей гитары. Ремень крепится на пуговицы, в комплекте шнурок для крепления за гриф для классической гитары.",
        price: 1129,
        rating:4.9,
        image:"https://resources.cdn-kaspi.kz/img/m/p/h0e/hb5/64453928910878.jpg?format=gallery-medium",
        images:["https://resources.cdn-kaspi.kz/img/m/p/h0e/hb5/64453928910878.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/hf1/hf0/64453996019742.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/h73/ha3/64453998313502.jpg?format=gallery-medium"],
        link:"https://kaspi.kz/shop/p/redprc-almaty-111209-chernyi-zheltyi-104364510/?c=750000000",
        likes:0,
        categoryId:3
    },
    {
        id: 16,
        name: "Каподастр MD-KAPO",
        description:"Гитарный каподастр из алюминиевого сплава. Имеет резиновые накладки для защиты грифа и струн.",
        price: 650,
        rating:5,
        image:"https://resources.cdn-kaspi.kz/img/m/p/pf5/pfb/81202659.jpg?format=gallery-medium",
        images:["https://resources.cdn-kaspi.kz/img/m/p/pf5/pfb/81202659.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/p6d/pf9/81202661.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/p18/pf9/81202664.jpg?format=gallery-medium"],
        link:"https://kaspi.kz/shop/p/md-kapo-137908156/?c=750000000",
        likes:0,
        categoryId:4
    },
    {
        id: 17,
        name: "Каподастр Bellavenc красный NT46",
        description:"🎸 Каподастр BELLAVENC NT — выбор гитаристов 🔥",
        price: 900,
        rating:5,
        image:"https://resources.cdn-kaspi.kz/img/m/p/p75/p68/21720051.jpg?format=gallery-medium",
        images:["https://resources.cdn-kaspi.kz/img/m/p/p75/p68/21720051.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/pae/p68/21720053.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/p02/p69/21720056.jpg?format=gallery-medium"],
        link:"https://kaspi.kz/shop/p/bellavenc-krasnyi-nt46-133846269/?c=750000000",
        likes:0,
        categoryId:4
    },
    {
        id: 18,
        name: "Каподастр RockStel RGC-501A",
        description:"RockStel RGC-501A – это не просто каподастр, это творческий инструмент, который заботится о каждой ноте. ",
        price: 3021,
        rating:5,
        image:"https://resources.cdn-kaspi.kz/img/m/p/p1b/p87/23538654.jpeg?format=gallery-medium",
        images:["https://resources.cdn-kaspi.kz/img/m/p/p1b/p87/23538654.jpeg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/p85/p8a/23538655.jpeg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/p29/pf3/23538656.png?format=gallery-medium"],
        link:"https://kaspi.kz/shop/p/rockstel-rgc-501a-115738092/?c=750000000",
        likes:0,
        categoryId:4
    },
    {
        id: 19,
        name: "Каподастр Bellavenc золотой NT45",
        description:"🎸 Каподастр BELLAVENC NT — выбор гитаристов 🔥",
        price: 1250,
        rating:5,
        image:"https://resources.cdn-kaspi.kz/img/m/p/pb9/p57/104908823.png?format=gallery-medium",
        images:["https://resources.cdn-kaspi.kz/img/m/p/pb9/p57/104908823.png?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/p23/p73/21720085.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/p3f/p73/21720086.jpg?format=gallery-medium"],
        link:"https://kaspi.kz/shop/p/bellavenc-zolotoi-nt45-133846276/?c=750000000",
        likes:0,
        categoryId:4
    },
    {
        id: 20,
        name: "Каподастр Music Life 9446800",
        description:"Каподастр Music Life - полезный аксессуар для гитаристов, который позволяет изменять тональность без перестройки гитары. Он легко устанавливается на гриф и надежно фиксируется, не мешая игре. Каподастр выполнен из качественных материалов и имеет стильный дизайн.",
        price: 3000,
        rating:5,
        image:"https://resources.cdn-kaspi.kz/img/m/p/p4e/p3f/9685170.jpg?format=gallery-medium",
        images:["https://resources.cdn-kaspi.kz/img/m/p/p4e/p3f/9685170.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/p6a/p3f/9685171.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/pa2/p3f/9685173.jpg?format=gallery-medium"],
        link:"https://kaspi.kz/shop/p/music-life-9446800-130437049/?c=750000000",
        likes:0,
        categoryId:4
    },
  ];
  getProducts(): Product[]{
    return this.products;
  }
  getCategories(): Category[] {
    return this.categories;
  }

  getProductsByCategory(categoryId: number): Product[] {
    return this.products.filter(p => p.categoryId === categoryId);
  }
}
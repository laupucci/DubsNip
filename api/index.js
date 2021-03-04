const server = require("./src/app.js");
const { conn } = require("./src/db.js");

const { Product, Category, Order, User } = require("./src/db.js");

let products = [
  {
    name: "Guitar",
    description:
      "This is the description of an awesome guitar, it has strings and ...",
    price: 299.99,
    picture: "https://alterra.com.ar/dubsnip/guitar.png",
    stock: 5,
  },
  {
    name: "Cymbal",
    description: "An awesome cymbal that makes a really good noise ... ",
    price: 49.99,
    picture: "https://alterra.com.ar/dubsnip/cymbal.png",
    stock: 10,
  },
  {
    name: "Micro",
    description:
      "Best microphone in the market, awesome price and everything ...",
    price: 699.99,
    picture: "https://alterra.com.ar/dubsnip/microphone.png",
    stock: 200,
  },
  {
    name: "Horn",
    description:
      "Best horn in the market, you will have the best soplada with it ...",
    price: 14.99,
    picture:
      "https://images-na.ssl-images-amazon.com/images/I/51VOZGyDvaL._AC_SL1001_.jpg",
    stock: 13,
  },
  {
    name: "Saxo",
    description:
      "Made of brass with gold plating technique, it is a high quality craftwork.",
    price: 24.09,
    picture:
      "https://images-na.ssl-images-amazon.com/images/I/51t2ySaJX6L._AC_SL1001_.jpg",
    stock: 3,
  },
  {
    name: "Drum",
    description:
      "The Music Alley 3 piece drum set is an ideal kids drum set for the young beginner aged from 3 to 8.",
    price: 89.99,
    picture:
      "https://images-na.ssl-images-amazon.com/images/I/712PhLFrqvL._AC_SL1500_.jpg",
    stock: 20,
  },
  {
    name: `Trumpet`,
    description:
      "Another brand new series Kaizer is introducing this year is the 3000 Series trumpets.",
    price: 232.99,
    picture:
      "https://images-na.ssl-images-amazon.com/images/I/71l6xKqHLCL._AC_SL1500_.jpg",
    stock: 30,
  },
  {
    name: "Harp",
    description: "Very piola harp.",
    price: 19.99,
    picture:
      "https://http2.mlstatic.com/D_NQ_NP_2X_744742-MLA43653066378_102020-F.webp",
    stock: 16,
  },
  {
    name: "Axe Guitar",
    description: "Cort Gsaxe Axe Gene Simmons Signature Bajo Hacha.",
    price: 199.99,
    picture:
      "https://http2.mlstatic.com/D_NQ_NP_2X_746215-MLA31128310328_062019-F.webp",
    stock: 5,
  },
  {
    name: "Accordion",
    description: "Awesome Hohner Hohnica A1620s 12 Bass Red Accordion.",
    price: "1050",
    picture:
      "https://http2.mlstatic.com/D_NQ_NP_954564-MLA31913034095_082019-O.webp",
    stock: Math.floor(Math.random() * 20 + 1),
  }, //1
  {
    name: "Creole Drum",
    description:
      "Legüero Criolla Bass Drum No. 3 Premium Lacquered and pampa guard",
    price: "1250",
    stock: Math.floor(Math.random() * 20 + 1),
    picture:
      "https://http2.mlstatic.com/D_NQ_NP_767657-MLA31598848340_072019-O.webp",
  }, //2
  {
    name: "Electric Guitar",
    description: "ESSEX Vintage style electric guitar. Black..",
    price: "1650",
    stock: Math.floor(Math.random() * 20 + 1),
    picture:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQOwvPw8udiO1WjruF4pEMK6GchM7QJLHVJcWiO7B-EPzNCmbvfFe6R8SNd0CORYdeaCT1euyuFWl3k6rNPnqOXDk7OFkOQxF3AinUt8ZrzJisydiH-tlyzgg&usqp=CAE",
  }, //3
  {
    name: "Complete Battery",
    description:
      "Krest Standard Complete Battery. Includes: 5 bodies, Irons, It does not include cymbal set, Construction of quality.",
    price: "990",
    stock: Math.floor(Math.random() * 20 + 1),
    picture:
      "https://http2.mlstatic.com/D_NQ_NP_743701-MLA20386847524_082015-O.webp",
  }, //4
  {
    name: "Metal Güiro",
    description: "Scraper With Professional Steel Comb.",
    price: "1490",
    stock: Math.floor(Math.random() * 20 + 1),
    picture:
      "https://http2.mlstatic.com/D_NQ_NP_641414-MLA31603833157_072019-O.webp",
  }, //5
  {
    name: "Acoustic Piano",
    description: "Acoustic Piano 1/4 Tail Japanese Baby Grand Piano.",
    price: "850",
    stock: Math.floor(Math.random() * 20 + 1),
    picture:
      "https://http2.mlstatic.com/D_NQ_NP_866658-MLA31586000849_072019-O.webp",
  }, //6
  {
    name: "Double Stradella",
    description: "Double Bass Stradella Solid Top Mb6072 3/4.",
    price: "870",
    picture:
      "https://http2.mlstatic.com/D_NQ_NP_662303-MLA41392432785_042020-O.webp",
    stock: Math.floor(Math.random() * 20 + 1),
  }, //7
  {
    name: "Violin 4/4",
    description: "Violin 4/4 Study With Case Bow Resin.",
    price: "690",
    stock: Math.floor(Math.random() * 20 + 1),
    picture:
      "https://http2.mlstatic.com/D_NQ_NP_744546-MLA31007818406_062019-O.webp",
  }, //8
  {
    name: "Trumb Tycoon",
    description:
      "Tycoon Supremo 10 + 11 Conga Percussion Tumbadora With Stand.",
    price: "1150",
    stock: Math.floor(Math.random() * 20 + 1),
    picture:
      "https://http2.mlstatic.com/D_NQ_NP_832417-MLA31575768506_072019-O.webp",
  }, //9
  {
    name: "Bango Stagg",
    description: "Stagg Bongo 6,5 And 7 Inches Wood Natural Color Bw70n.",
    stock: Math.floor(Math.random() * 20 + 1),
    price: "750",
    picture:
      "https://http2.mlstatic.com/D_NQ_NP_12842-MLA20066811397_032014-O.webp",
  }, //10
  {
    name: "Seat Bench",
    description: "Double Leg Reinforced Drum Seat Bench.",
    price: "720",
    stock: Math.floor(Math.random() * 20 + 1),
    picture:
      "https://http2.mlstatic.com/D_NQ_NP_778819-MLA43950233835_102020-O.webp",
  }, //11
  {
    name: "Violin With Case",
    description: "Violin 4/4 With Case, Bow, Studio Resin.",
    price: "1750",
    stock: Math.floor(Math.random() * 20 + 1),
    picture:
      "https://http2.mlstatic.com/D_NQ_NP_857915-MLA43950333170_102020-O.webp",
  }, //12
];

let categories = [
  {
    name: "Strings",
    description: "Strings description",
  },
  {
    name: "Wind",
    description: "Winds description",
  },
  {
    name: "Keyboard",
    description: "Keyboard description",
  },
  {
    name: "Brass",
    description: "Brass (vientos de metal) description",
  },
  {
    name: "Percussion",
    description: "Percussion instruments description",
  },
];

// Asigno siempre la fecha del dia actual
var today = new Date();
let orders = [
  {
    state: "cart",
    date: `${today.getUTCDate()}/${today.getUTCMonth()}/${today.getUTCFullYear()}`,
  },
  {
    state: "created",
    date: `${today.getUTCDate()}/${today.getUTCMonth()}/${today.getUTCFullYear()}`,
  },
  {
    state: "cancelled",
    date: `${today.getUTCDate()}/${today.getUTCMonth()}/${today.getUTCFullYear()}`,
  },
  {
    state: "completed",
    date: `${today.getUTCDate()}/${today.getUTCMonth()}/${today.getUTCFullYear()}`,
  },
];

let users = [
  {
    givenName: "Franco",
    familyName: "Ascarate",
    email: "francoascarate349@gmail.com",
    password: "francofacha",
    isAdmin: true,
    isMailVerified: true,
    photoUrl:
      "https://vignette.wikia.nocookie.net/los-padrinos-magicos4real/images/e/ec/Timmy-turner-personajes-padrinos-magicos.png/revision/latest?cb=20180315152313&path-prefix=es",
    address: "Debajo del puente",
    postal_code: "T4000",
    city: "Tucuman",
  },
  {
    givenName: "Laura",
    familyName: "Puccinelli",
    email: "laurafacha@gmail.com",
    password: "laurapiolinga",
    isAdmin: true,
    isMailVerified: true,
    photoUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjW_aj_jUy1rVR_vAA7dR5STTqJB9WZh1i3A&usqp=CAU",
    address: "Una calle de Santa fe",
    postal_code: "S3000",
    city: "Santa Fe",
  },
  {
    givenName: "Juan",
    familyName: "Castro",
    email: "juanragnarlothbrok@gmail.com",
    password: "juancruzfacha",
    isAdmin: true,
    isMailVerified: true,
    photoUrl:
      "https://pbs.twimg.com/profile_images/1228481171488727040/vPlRRVhw_400x400.jpg",
    address: "Por una calle de Escobar",
    postal_code: "B1625",
    city: "Buenos Aires",
  },
  {
    givenName: "Sixto",
    familyName: "Acuña",
    email: "sixto@gmail.com",
    password: "sixtuplo",
    isAdmin: true,
    isMailVerified: true,
    photoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/7/78/Flag_of_Chile.svg",
    address: "Por una calle de Chile",
    postal_code: "832 0000",
    city: "Santiago de Chile",
  },
  {
    givenName: "Lisbeth",
    familyName: "Jardim",
    email: "lis@gmail.com",
    password: "ron",
    isAdmin: true,
    isMailVerified: true,
    photoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Appleton_Estate_V-X_Jamaica_Rum-with_glass.jpg/270px-Appleton_Estate_V-X_Jamaica_Rum-with_glass.jpg",
    address: "Por una calle de Venezuela",
    postal_code: "1010",
    city: "Caracas",
  },
  {
    givenName: "Joaquin",
    familyName: "Franco",
    email: "joafran0016@gmail.com",
    password: "chaqueñopalavecino",
    isAdmin: true,
    isMailVerified: true,
    photoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Chaco_in_Argentina_%28%2BFalkland%29.svg/270px-Chaco_in_Argentina_%28%2BFalkland%29.svg.png",
    address: "Por una calle del Chaco",
    postal_code: "H3500",
    city: "Chaco",
  },
  {
    givenName: "Prueba",
    familyName: "Facil",
    email: "prueba@facil.com",
    password: "1234",
    isAdmin: false,
    isMailVerified: true,
    photoUrl:
      "https://pbs.twimg.com/profile_images/1228481171488727040/vPlRRVhw_400x400.jpg",
    address: "Por una calle del Chaco",
    postal_code: "H3500",
    city: "Chaco",
  },
];

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(process.env.PORT, async () => {
    console.log(`%s listening at ${process.env.PORT}`); // eslint-disable-line no-console
    //Charging categories
    categories.forEach(async (category) => {
      await Category.create(category);
    });

    //Charging products
    products.forEach(async (product) => {
      let producto = await Product.create(product);
      //Assigning a random category to the created product
      producto.addCategory(Math.floor(Math.random() * categories.length + 1));
    });
    orders.forEach(async (order, i) => {
      const orden3 = await Order.create(order);
      //Assigning products to orders!
      const product1 = await Product.findByPk(1);
      const product2 = await Product.findByPk(2);
      await orden3.addProduct(product1, {
        through: {
          quantity: Math.floor(Math.random() * 8 + 1),
          price: 1 * product1.price,
        },
      });
      await orden3.addProduct(product2, {
        through: {
          quantity: Math.floor(Math.random() * 8 + 1),
          price: 1 * product2.price,
        },
      });
      // await orden.addProduct(product2);
      const user2 = await User.findByPk(7);
      await orden3.setUser(user2);
      //orden.update( {userId: user1.id })
    });

    //Charging Users
    users.forEach(async (user, i) => {
      const usuario = await User.create(user);
    });
    console.log("Productos y categorias cargados");
  });
});

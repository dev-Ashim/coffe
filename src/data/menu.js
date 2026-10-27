// Menu — add, remove or reprice items here.
// `signature: true` items also appear on the home page.

export const menu = [
  {
    id: "hot",
    label: "Hot Coffee",
    items: [
      { name: "Espresso", price: 140, desc: "Double shot, house blend, bright and chocolatey." },
      { name: "Americano", price: 170, desc: "Espresso lengthened with hot water." },
      { name: "Cappuccino", price: 210, desc: "Equal parts espresso, steamed milk and velvet foam." },
      { name: "Flat White", price: 230, desc: "Ristretto with silky micro-foam." },
      { name: "Café Latte", price: 220, desc: "Mellow, milky, endlessly comforting." },
      { name: "Sol Mocha", price: 260, desc: "Espresso, dark chocolate and a pinch of sea salt.", signature: true },
      { name: "Pour Over", price: 280, desc: "Single-origin, hand-brewed. Ask what's on today." },
      { name: "Masala Chai", price: 150, desc: "Slow-simmered with whole spices." },
    ],
  },
  {
    id: "cold",
    label: "Cold & Iced",
    items: [
      { name: "Classic Cold Brew", price: 240, desc: "Steeped 18 hours. Smooth, low-acid, bold.", signature: true },
      { name: "Iced Latte", price: 230, desc: "Espresso over cold milk and ice." },
      { name: "Vietnamese Iced", price: 250, desc: "Strong brew with condensed milk." },
      { name: "Espresso Tonic", price: 260, desc: "Tonic, citrus and a floating shot." },
      { name: "Bean Frappé", price: 270, desc: "Blended coffee, cream and caramel drizzle." },
      { name: "Sunrise Cooler", price: 220, desc: "Orange, cold brew and honey — our signature.", signature: true },
    ],
  },
  {
    id: "bites",
    label: "Bites",
    items: [
      { name: "Butter Croissant", price: 180, desc: "Flaky, golden, baked every morning." },
      { name: "Avocado Toast", price: 320, desc: "Sourdough, smashed avo, chilli flakes, lime." },
      { name: "Pesto Grilled Sandwich", price: 290, desc: "Basil pesto, mozzarella, roasted veggies." },
      { name: "Chicken Club", price: 340, desc: "Triple-decker with herbed mayo." },
      { name: "Shakshuka", price: 350, desc: "Eggs in spiced tomato, served with bread." },
      { name: "Loaded Fries", price: 240, desc: "Peri-peri dust, cheese sauce, spring onion." },
    ],
  },
  {
    id: "sweet",
    label: "Sweet Things",
    items: [
      { name: "Basque Cheesecake", price: 290, desc: "Burnt top, creamy centre.", signature: true },
      { name: "Tiramisu Jar", price: 270, desc: "Espresso-soaked, mascarpone, cocoa." },
      { name: "Brownie", price: 190, desc: "Fudgy, dark, a little gooey." },
      { name: "Cinnamon Roll", price: 210, desc: "Glazed and warm from the oven." },
      { name: "Affogato", price: 240, desc: "Vanilla gelato drowned in espresso." },
    ],
  },
];

export const signatures = menu.flatMap((cat) => cat.items.filter((i) => i.signature));

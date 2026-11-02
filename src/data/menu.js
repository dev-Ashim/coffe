// Menu — add, remove or reprice items here.
// `signature: true` items also appear on the home page.
// `tag` marks a variant (e.g. "Veg / Chicken"); split prices are written as "280 / 320".
// `addOns` lists the extras for a category, grouped by price.

export const menu = [
  {
    id: "hot-coffee", label: "Hot Coffee",
    tagline: "Pulled slow, poured with care.",
    groups: [
      { label: "Espresso Classics", items: [
        { name: "Americano", price: 120, desc: "Rich espresso diluted with hot water for a smooth, balanced cup." },
        { name: "Cappuccino", price: 150, desc: "Espresso topped with velvety steamed milk and airy foam." },
        { name: "Caffè Latte", price: 150, desc: "Rich espresso blended with silky steamed milk." },
        { name: "Cortado", price: 150, desc: "Equal parts espresso and steamed milk for a smooth, balanced finish." },
        { name: "Espresso Macchiato", price: 140, desc: "Double espresso marked with a delicate touch of milk." },
        { name: "Caffè Mocha", price: 170, desc: "Rich espresso blended with chocolate and topped with whipped cream." },
      ] },
      { label: "Signature Lattes", items: [
        { name: "Vanilla Latte", price: 170, desc: "Espresso blended with silky milk and sweet vanilla." },
        { name: "Irish Cream Latte", price: 170, desc: "Smooth espresso with creamy Irish-inspired flavours." },
        { name: "Spanish Latte", price: 170, desc: "Rich espresso blended with creamy, sweet condensed milk." },
        { name: "Honey Cinnamon Latte", price: 180, desc: "Silky latte sweetened with honey and a hint of cinnamon." },
        { name: "Spiced Hazelnut Latte", price: 180, desc: "Nutty hazelnut blended with espresso and warming spices." },
        { name: "Cookie Crumble Latte", price: 190, desc: "Creamy latte finished with a delightful cookie crumble." },
        { name: "Salted Caramel Latte", price: 180, desc: "Smooth espresso with buttery caramel and a hint of sea salt." },
      ] },
    ],
    addOns: [
      { price: 40, items: ["Extra espresso shot", "Flavoured syrup", "Oat / almond milk", "Whipped cream", "Extra chocolate / caramel drizzle"] },
    ],
  },
  {
    id: "tea-cocoa", label: "Tea & Cocoa",
    tagline: "Warm cups for unhurried moments.",
    groups: [
      { label: "Matcha & Tea", items: [
        { name: "Matcha Latte", price: 180, desc: "Vibrant matcha blended with silky steamed milk." },
        { name: "Assam Tea & Maska Bun", price: 200, desc: "Strong, aromatic Assam tea served with a soft, buttery maska bun." },
      ] },
      { label: "Cascara", note: "The dried fruit of the coffee cherry.", items: [
        { name: "Hot Cascara", price: 170, desc: "A delicate, fruity infusion brewed from dried coffee cherries." },
        { name: "Honey Lemon Cascara", price: 180, desc: "Fruity cascara brightened with honey and fresh lemon." },
        { name: "Apple Cider Cascara", price: 190, desc: "A fruity cascara infusion with refreshing apple cider notes." },
      ] },
      { label: "Hot Chocolate", items: [
        { name: "Classic Hot Chocolate", price: 200, desc: "Rich, velvety chocolate in a comforting warm cup." },
        { name: "Exotic Hot Chocolate", price: 240, desc: "A special chocolate indulgence with rich, distinctive flavours." },
        { name: "Hazelnut Hot Chocolate", price: 240, desc: "Velvety hot chocolate infused with rich, nutty hazelnut." },
        { name: "Strawberry Hot Chocolate", price: 240, desc: "Smooth, creamy chocolate with sweet strawberry notes." },
      ] },
    ],
    addOns: [
      { price: 40, items: ["Whipped cream", "Chocolate drizzle", "Flavoured syrup", "Oat / almond milk", "Marshmallows"] },
      { price: 60, items: ["Extra matcha"] },
    ],
  },
  {
    id: "iced-coffee", label: "Iced Coffee",
    tagline: "Cooled down, dressed up.",
    groups: [
      { label: "Blended", items: [
        { name: "Signature Cold Coffee", price: 180, desc: "Rich blended coffee topped with ice cream and whipped cream." },
        { name: "Hazelnut Frappé", price: 200, desc: "Blended espresso with creamy vanilla and rich hazelnut." },
        { name: "Caramel Cold Coffee", price: 200, desc: "Smooth blended coffee with creamy caramel sweetness." },
      ] },
      { label: "Vietnamese Coffee", items: [
        { name: "Vietnamese Iced Coffee", price: 220, desc: "Strong coffee with creamy condensed milk over ice." },
        { name: "Salted Vietnamese Coffee", price: 240, desc: "Rich Vietnamese coffee finished with smooth, lightly salted cream." },
        { name: "Coconut Vietnamese Coffee", price: 240, desc: "Bold Vietnamese coffee with creamy coconut over ice." },
      ] },
      { label: "Coffee & Dessert", items: [
        { name: "Affogato", price: 150, desc: "A scoop of vanilla ice cream crowned with a shot of hot espresso." },
      ] },
      { label: "Over Ice", items: [
        { name: "Iced Americano", price: 140, desc: "Espresso poured over chilled water and ice." },
        { name: "Iced Latte", price: 180, desc: "Rich espresso blended with chilled milk over ice." },
        { name: "Iced Cappuccino", price: 180, desc: "Espresso with chilled milk and a delicate layer of cold foam." },
        { name: "Iced Honey Cinnamon Latte", price: 240, desc: "Chilled espresso and milk sweetened with honey and cinnamon." },
        { name: "Iced Mocha", price: 220, desc: "Rich espresso and chocolate blended with chilled milk over ice." },
        { name: "Cranberry Iced Espresso", price: 200, desc: "Bold espresso brightened with refreshing cranberry." },
      ] },
    ],
    addOns: [
      { price: 40, items: ["Extra espresso shot", "Flavoured syrup", "Whipped cream", "Cookie / brownie crumble", "Fruit purée"] },
      { price: 60, items: ["Extra ice cream"] },
    ],
  },
  {
    id: "iced-tea", label: "Iced Tea & Cold Brew",
    tagline: "Steeped for hours, gone in minutes.",
    groups: [
      { label: "Iced Tea", items: [
        { name: "Lemon Basil Iced Tea", price: 210, desc: "Refreshing iced tea infused with fresh basil and zesty lemon." },
        { name: "Peach Iced Tea", price: 180, desc: "Smooth, chilled tea with delicate peach sweetness." },
        { name: "Passion Fruit Sparkling Iced Tea", price: 180, desc: "Refreshing iced tea with tangy passion fruit and sparkling soda." },
        { name: "Watermelon Iced Tea", price: 200, desc: "Light, refreshing iced tea with juicy watermelon notes." },
      ] },
      { label: "Iced Matcha", items: [
        { name: "Iced Matcha Latte", price: 220, desc: "Vibrant matcha blended with chilled milk over ice." },
        { name: "Coconut Strawberry Matcha", price: 260, desc: "Earthy matcha layered with sweet strawberry and creamy coconut." },
        { name: "Blueberry Matcha Latte", price: 260, desc: "Vibrant matcha paired with sweet, fruity blueberry." },
      ] },
      { label: "Cold Brew", items: [
        { name: "Classic Cold Brew", price: 180, desc: "Slow-steeped coffee with a smooth, naturally rich finish." },
        { name: "Guava Cold Brew", price: 200, desc: "Smooth cold brew brightened with tropical guava." },
        { name: "Litchi Cold Brew", price: 200, desc: "Refreshing cold brew with delicate, sweet litchi notes." },
        { name: "Orange Cold Brew", price: 200, desc: "Bold cold brew balanced with bright citrusy orange." },
      ] },
    ],
    addOns: [
      { price: 40, items: ["Fruit purée", "Flavoured syrup", "Popping pearls", "Extra espresso shot"] },
      { price: 60, items: ["Extra cold brew"] },
    ],
  },
  {
    id: "coolers", label: "Coolers",
    tagline: "Bright, refreshing and alcohol-free.",
    groups: [
      { label: "Classics", items: [
        { name: "Piña Colada", price: 210, desc: "Tropical pineapple blended with creamy coconut and ice." },
        { name: "Virgin Mojito", price: 160, desc: "Fresh mint, zesty lime and a splash of soda." },
        { name: "Fresh Lemonade", price: 140, desc: "Freshly squeezed lemon with a refreshing, citrusy finish." },
        { name: "Blue Lagoon", price: 180, desc: "A vibrant blue citrus cooler with a refreshing, zesty finish." },
      ] },
      { label: "House Coolers", items: [
        { name: "Strawberry Basil Lemonade", price: 200, desc: "Fresh lemonade infused with sweet strawberry and aromatic basil." },
        { name: "Spiced Jamun Cooler", price: 180, desc: "Tangy jamun blended with refreshing spices." },
        { name: "Red Coconut Cloud", price: 180, desc: "A creamy, coconut-based cooler with a refreshing twist." },
        { name: "Green Apple Cooler", price: 180, desc: "Crisp green apple with a refreshing, tangy finish." },
        { name: "Mango Mint Cooler", price: 190, desc: "Juicy mango blended with fresh mint and a hint of lemon." },
        { name: "Blueberry Mint Cooler", price: 190, desc: "Sweet blueberries, fresh mint and a touch of citrus." },
      ] },
    ],
    addOns: [
      { price: 40, items: ["Fruit purée", "Popping pearls", "Extra soda", "Flavoured syrup"] },
      { price: 60, items: ["Extra fruit"] },
    ],
  },
  {
    id: "shakes", label: "Shakes & Smoothies",
    tagline: "Go big. Share if you must.",
    groups: [
      { label: "Freakshakes", items: [
        { name: "Chocolate Fantasy", price: 250, desc: "Decadent chocolate ganache, brownie, cookie crumble and ice cream." },
        { name: "Blueberry Cheesecake Shake", price: 250, desc: "Juicy blueberries blended with creamy cheesecake and vanilla ice cream." },
        { name: "Red Velvet Shake", price: 260, desc: "Rich red velvet cake blended with smooth cream cheese." },
        { name: "Oreo Shake", price: 230, desc: "Classic Oreo cookies blended with chilled milk and creamy ice cream." },
        { name: "Biscoff Cookie Shake", price: 260, desc: "Caramelised Biscoff cookies blended into a rich, creamy shake." },
        { name: "Brownie Fudge Shake", price: 260, desc: "Rich brownie and chocolate fudge blended with creamy ice cream." },
      ] },
      { label: "Smoothies", items: [
        { name: "Mixed Fruit Smoothie", price: 250, desc: "A refreshing blend of strawberry, guava, apple, pineapple, banana and mango." },
        { name: "Berry Blast", price: 250, desc: "A vibrant blend of mixed berries in a smooth, fruity smoothie." },
        { name: "Peanut Butter Chocolate Smoothie", price: 240, desc: "Creamy peanut butter blended with rich chocolate." },
        { name: "Banana Strawberry Smoothie", price: 250, desc: "Sweet strawberries and ripe banana blended to creamy perfection." },
      ] },
    ],
    addOns: [
      { price: 40, items: ["Cookie crumble", "Brownie crumble", "Whipped cream", "Fruit purée", "Peanut butter"] },
      { price: 60, items: ["Extra ice cream"] },
    ],
  },
  {
    id: "breakfast", label: "Breakfast",
    tagline: "Slow mornings start here.",
    groups: [
      { label: "Veg Breakfast", items: [
        { name: "Veg Breakfast Platter", price: 250, desc: "Baked beans, golden hash browns and sautéed vegetables on toast." },
        { name: "Fruit & Oat Bowl", price: 250, desc: "Wholesome oats topped with seasonal fruits and chia seeds." },
        { name: "Granola & Yogurt Bowl", price: 250, desc: "Creamy yogurt layered with crunchy granola and fresh fruit." },
        { name: "Avocado Toast & Salsa", price: 280, desc: "Sourdough toast topped with creamy avocado, fresh salsa, lemon and chilli flakes." },
      ] },
      { label: "Non-Veg Breakfast", items: [
        { name: "Healthy Breakfast Plate", price: 230, desc: "Boiled eggs, creamy avocado, olives, cucumber and chickpeas." },
        { name: "English Breakfast", price: 290, desc: "Eggs your way, golden hash browns and chicken sausages." },
        { name: "Mutton & Bacon Breakfast Platter", price: 320, desc: "Tender mutton, crispy bacon, omelette, baked beans and vegetables." },
      ] },
      { label: "Pancakes & Waffles", items: [
        { name: "Waffle Delight", price: 170, desc: "Golden, crisp waffles served with your choice of Nutella or chocolate." },
        { name: "Classic Pancake Stack", price: 200, desc: "Soft, fluffy pancakes drizzled with your choice of Nutella or chocolate." },
      ] },
    ],
    addOns: [
      { price: 40, items: ["Extra cheese", "Extra egg"] },
      { price: 60, items: ["Extra avocado", "Extra paneer", "Extra chicken sausage"] },
    ],
  },
  {
    id: "salads-soups", label: "Salads & Soups",
    tagline: "Fresh bowls, warm spoons.",
    groups: [
      { label: "Salads", items: [
        { name: "Caesar Salad", price: 220, desc: "Crisp lettuce tossed in creamy garlic and lemon-pepper dressing." },
        { name: "Greek Salad", price: 220, desc: "Fresh lettuce, juicy tomatoes, cucumber, feta and olives with balsamic dressing." },
        { name: "Mediterranean Vegetable Salad", price: 220, desc: "Seasonal vegetables tossed with aromatic herbs and a light dressing." },
        { name: "Roasted Chicken Salad", price: 280, desc: "Tender roasted chicken served over fresh greens with house dressing." },
        { name: "Italian Chicken Pasta Salad", price: 280, desc: "Pasta, tender chicken and fresh vegetables tossed in Italian dressing." },
      ] },
      { label: "Soups", items: [
        { name: "Zuppa di Broccoli", price: 200, desc: "Creamy broccoli soup finished with delicate almond flakes." },
        { name: "Pomodoro e Basilico", price: 200, desc: "Rich, velvety tomato soup infused with fragrant fresh basil." },
        { name: "Chinese Soup Selection", tag: "Veg / Chicken", price: "200 / 230", desc: "Choose from Sweet Corn, Hot & Sour, Peking or Manchow.", signature: true },
        { name: "Tomato & Bell Pepper Soup", price: 200, desc: "Tangy tomato soup blended with sweet bell peppers." },
        { name: "Cream of Chicken Soup", price: 230, desc: "Smooth, creamy soup with tender chicken." },
        { name: "Clear Chicken Soup", price: 230, desc: "Light, comforting chicken broth with delicate flavours." },
      ] },
    ],
    addOns: [
      { price: 40, items: ["Extra dressing", "Extra cheese / feta", "Extra croutons", "Extra almonds"] },
      { price: 60, items: ["Extra paneer", "Extra chicken"] },
    ],
  },
  {
    id: "sandwiches-wraps", label: "Sandwiches & Wraps",
    tagline: "Good things, between good bread.",
    groups: [
      { label: "Sandwiches", items: [
        { name: "Club Sandwich", tag: "Veg / Chicken", price: "280 / 320", desc: "Layered, toasted sandwich served with golden fries and fresh salad." },
        { name: "Classic Grilled", tag: "Veg / Chicken", price: 300, desc: "Grilled bread filled with vegetables and paneer or smoked chicken." },
        { name: "The Bean Special Sandwich", price: 345, desc: "Our signature filling of beans, fresh vegetables and melted cheese." },
        { name: "Egg & Cheese Sandwich", price: 340, desc: "Egg, cheddar, onion and crisp lettuce with house sauce." },
      ] },
      { label: "Open Toasts", items: [
        { name: "Avocado Tartine", price: 285, desc: "Sourdough topped with creamy avocado, lemon, chilli flakes and herbs." },
        { name: "Garden Fresh Toast", price: 255, desc: "Toasted bread topped with seasonal vegetables, herbs and house dressing." },
        { name: "Green & Golden Toast", price: 295, desc: "Toasted bread topped with spinach, sweet corn and melted cheese." },
      ] },
      { label: "Wraps & Rolls", items: [
        { name: "Lebanese Wrap", price: 245, desc: "Falafel and pickled vegetables wrapped with creamy hummus." },
        { name: "Spicy Paneer / Chicken Wrap", price: "225 / 250", desc: "Spicy tikka filling with fresh vegetables and mint relish." },
        { name: "Veg Shawarma Wrap", price: 225, desc: "Fresh vegetables wrapped with creamy garlic sauce." },
      ] },
    ],
    addOns: [
      { price: 40, items: ["Extra cheese", "Extra egg", "Extra vegetable toppings", "Extra dip / sauce"] },
      { price: 60, items: ["Extra paneer", "Extra chicken", "Extra burger-style patty"] },
    ],
  },
  {
    id: "appetizers", label: "Appetizers",
    tagline: "Small plates, big conversations.",
    groups: [
      { label: "Fries & Nachos", items: [
        { name: "French Fries", price: 180, desc: "Golden, crispy fries with a fluffy centre." },
        { name: "Peri-Peri Fries", price: 190, desc: "Crispy fries tossed in a bold, zesty peri-peri seasoning." },
        { name: "Loaded Fries", price: 210, desc: "Golden fries piled with delicious sauces and toppings. Add chicken for ₹50." },
        { name: "Herbed Potato Wedges", price: 190, desc: "Golden potato wedges seasoned with aromatic herbs." },
        { name: "Nachos with Salsa", price: 220, desc: "Crispy nachos served with fresh, tangy salsa." },
        { name: "Loaded Nachos", price: 240, desc: "Crunchy nachos topped with delicious sauces and toppings. Add chicken for ₹50." },
      ] },
      { label: "Bites", items: [
        { name: "Joy Croquettes", price: 230, desc: "Cheesy bites with jalapeño and green chilli." },
        { name: "Mushroom Peri-Peri", price: 240, desc: "Mushrooms tossed in a bold, flavourful peri-peri sauce." },
        { name: "Cheesy Jalapeño Sticks", price: 249, desc: "Crispy mozzarella and jalapeño sticks with a golden coating." },
        { name: "Crispy Corn", price: 255, desc: "Crunchy golden corn tossed in our chef's special seasoning." },
        { name: "Chicken Nuggets", price: 225, desc: "Golden, crispy chicken bites served with fries." },
        { name: "Fish & Chips", price: 355, desc: "Golden battered fish served with crispy fries and tartar sauce." },
        { name: "Chicken Wings in Peri-Peri Sauce", price: 385, desc: "Juicy chicken wings coated in a bold, spicy peri-peri sauce." },
      ] },
    ],
    addOns: [
      { price: 40, items: ["Extra dip / sauce", "Extra cheese", "Extra jalapeños", "Extra peri-peri seasoning"] },
      { price: 60, items: ["Extra chicken"] },
    ],
  },
  {
    id: "burgers-bowls", label: "Burgers & Bowls",
    tagline: "Hearty plates for hungry hours.",
    groups: [
      { label: "Burgers", note: "All burgers are served with fries.", items: [
        { name: "Lamb Smash Burger", price: 350, desc: "Juicy smashed lamb patty layered with our signature house sauce." },
        { name: "Grilled Chicken Burger", price: 350, desc: "Smoky grilled chicken served with crispy wedges and an optional fried egg." },
        { name: "Peri-Peri Cheddar Burger", tag: "Veg / Chicken", price: "300 / 350", desc: "A flavourful patty with bold peri-peri seasoning and creamy cheddar." },
        { name: "Veg Mushroom Burger", price: 285, desc: "Mushroom patty layered with crisp lettuce and house sauce." },
        { name: "Classic Veg Burger", price: 255, desc: "Golden vegetable patty with fresh lettuce and house sauce." },
        { name: "Classic Chicken Burger", price: 275, desc: "Juicy chicken patty topped with crisp lettuce and house sauce." },
      ] },
      { label: "Bowls", items: [
        { name: "Cottage Cheese Bowl", price: 345, desc: "Fresh cottage cheese served with wholesome, flavourful accompaniments." },
        { name: "Chicken Burrito Bowl", price: 425, desc: "Chicken, rice and fresh vegetables with delicious burrito-style toppings." },
        { name: "Veg Fajita Bowl", price: 325, desc: "Sautéed vegetables tossed in bold fajita seasoning." },
      ] },
      { label: "Plates & Mains", items: [
        { name: "Grilled Chicken Plate", price: 455, desc: "Grilled chicken served with creamy mashed potatoes, vegetables and rice, with your choice of BBQ or mushroom sauce." },
      ] },
    ],
    addOns: [
      { price: 40, items: ["Extra cheese", "Extra egg", "Extra vegetable toppings", "Extra sauce"] },
      { price: 60, items: ["Extra paneer", "Extra chicken", "Extra burger patty"] },
    ],
  },
  {
    id: "chinese", label: "Chinese",
    tagline: "Wok-tossed and full of fire.",
    groups: [
      { label: "Momos", items: [
        { name: "Classic Veg Momos", price: 225, desc: "Steamed vegetable dumplings served with a spicy dipping sauce." },
        { name: "Classic Chicken Momos", price: 255, desc: "Steamed chicken dumplings served with a spicy dipping sauce." },
        { name: "Crispy Veg Momos", price: 275, desc: "Golden-fried vegetable dumplings served with a flavourful dip." },
        { name: "Crispy Chicken Momos", price: 285, desc: "Golden-fried chicken dumplings served with a flavourful dip." },
      ] },
      { label: "Noodles & Rice", items: [
        { name: "Veg Hakka / Chilli Garlic Noodles", price: 300, desc: "Wok-tossed noodles with fresh vegetables and your choice of Hakka or chilli garlic style." },
        { name: "Chicken Hakka Noodles", price: 375, desc: "Wok-tossed Hakka noodles with tender chicken and fresh vegetables." },
        { name: "Schezwan Fried Rice", price: 300, desc: "Spicy Schezwan-style fried rice. Add egg for ₹40 or chicken for ₹60." },
      ] },
      { label: "Starters & Indo-Chinese", items: [
        { name: "Crispy Honey Chilli Potato", price: 275, desc: "Crispy potato fingers tossed in a sweet and sticky honey-chilli glaze." },
        { name: "Veg Manchurian", price: 300, desc: "Vegetable dumplings tossed in a tangy Indo-Chinese sauce, available dry or with gravy." },
        { name: "Paneer Manchurian", price: 350, desc: "Soft paneer tossed in a bold, flavourful Manchurian sauce." },
        { name: "Chicken Manchurian (Dry)", price: 355, desc: "Crispy chicken tossed in a spicy, tangy Manchurian sauce." },
        { name: "Chilli Paneer (Dry)", price: 400, desc: "Paneer tossed with chillies, peppers and a savoury Indo-Chinese sauce." },
        { name: "Chilli Chicken (Dry)", price: 450, desc: "Tender chicken tossed with chillies, peppers and a bold, spicy sauce." },
      ] },
    ],
    addOns: [
      { price: 40, items: ["Extra vegetables", "Extra egg", "Extra sauce"] },
      { price: 60, items: ["Extra noodles / rice", "Extra paneer", "Extra chicken"] },
    ],
  },
  {
    id: "pizza-pasta", label: "Pizza & Pasta",
    tagline: "An Italian afternoon, any time of day.",
    groups: [
      { label: "Pizza", items: [
        { name: "Margherita", price: 325, desc: "Classic tomato sauce topped with mozzarella and fresh basil." },
        { name: "Pizza alla Bella", price: 360, desc: "Mozzarella, sun-dried tomatoes and fragrant basil pesto." },
        { name: "Chicken Pepperoni Pizza", price: 385, desc: "Chicken pepperoni layered with rich tomato sauce and melted cheese." },
        { name: "Farm Fresh Pizza", price: 375, desc: "Seasonal vegetables topped with rich tomato sauce and melted cheese." },
        { name: "Peri-Peri Paneer Pizza", price: 395, desc: "Soft paneer, zesty peri-peri seasoning and melted cheese." },
        { name: "BBQ Chicken Pizza", price: 395, desc: "Tender chicken topped with smoky barbecue sauce and cheese." },
        { name: "Classic Chicken Pizza", price: 365, desc: "Tender chicken, mozzarella and rich tomato sauce." },
      ] },
      { label: "Baked Pasta", items: [
        { name: "Vegetable Lasagne", price: 425, desc: "Layers of pasta, spinach, sweet corn and rich savoury sauce." },
        { name: "Chicken Lasagne", price: 445, desc: "Layers of pasta with chicken and a rich tomato-vegetable sauce." },
      ] },
      { label: "Pasta", note: "Penne, fettuccine or spaghetti · with garlic bread · add chicken for ₹50", items: [
        { name: "Spicy Arrabbiata", price: 349, desc: "Pasta tossed in a fiery tomato sauce with roasted garlic." },
        { name: "Alfredo Pasta", price: 370, desc: "Creamy cheese sauce with mushrooms and Parmesan." },
        { name: "Basil Pesto Pasta", price: 380, desc: "Pasta tossed in fragrant basil pesto with Parmesan and peppers." },
        { name: "Aglio e Olio Peperoncino", price: 400, desc: "Pasta tossed in olive oil, garlic, chilli and aromatic herbs." },
        { name: "Chicken Bolognese Spaghetti", price: 380, desc: "Spaghetti tossed in a rich tomato sauce with minced chicken." },
        { name: "Mac & Cheese", price: 390, desc: "Creamy, cheesy macaroni baked to comforting perfection." },
        { name: "Pink Sauce Pasta", price: 380, desc: "Pasta tossed in a creamy tomato and cheese sauce." },
        { name: "Spinach & Ricotta Ravioli", price: 425, desc: "Delicate pasta parcels filled with spinach and ricotta, served in a light sauce." },
        { name: "Pesto Ravioli", price: 440, desc: "Delicate stuffed pasta tossed in fragrant basil pesto." },
      ] },
    ],
    addOns: [
      { price: 40, items: ["Extra cheese", "Extra vegetable toppings", "Extra jalapeños", "Extra sauce"] },
      { price: 60, items: ["Extra paneer", "Extra chicken", "Extra garlic bread"] },
    ],
  },
];

export const signatures = menu.flatMap((category) =>
  (category.groups || [{ items: category.items }])
    .flatMap((group) => group.items || [])
    .filter((item) => item.signature)
);

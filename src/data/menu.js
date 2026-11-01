// Menu — add, remove or reprice items here.
// `signature: true` items also appear on the home page.

export const menu = [
  {
    id: "hot-coffee", label: "Hot Coffee",
    groups: [
      { label: "Espresso Classics", items: [
        { name: "Americano", price: 120, desc: "Espresso lengthened with hot water." },
        { name: "Cappuccino", price: 150, desc: "Espresso, steamed milk and a soft foam cap." },
        { name: "Café Latte", price: 150, desc: "Espresso with silky steamed milk." },
        { name: "Cortado", price: 150, desc: "Equal parts espresso and warm milk." },
        { name: "Coffee Macchiato", price: 140, desc: "Double espresso with a dash of milk." },
        { name: "Café Mocha", price: 170, desc: "Chocolate latte with whipped cream." },
        { name: "Filter Coffee", price: 100, desc: "Traditional filter-brewed coffee." },
      ] },
      { label: "Signature Lattes", items: [
        { name: "Vanilla Latte", price: 170, desc: "Latte with vanilla syrup." },
        { name: "Irish Latte", price: 170, desc: "An Irish-inspired latte." },
        { name: "Spanish Latte", price: 170, desc: "Sweet, creamy and smooth." },
        { name: "Honey Cinnamon Latte", price: 180, desc: "Latte with honey and warm cinnamon." },
        { name: "Spiced Hazelnut Latte", price: 180, desc: "Hazelnut latte with a warm spice." },
        { name: "Cookie Crumble Latte", price: 190, desc: "Latte topped with cookie crumble." },
        { name: "Salted Caramel Coffee", price: 180, desc: "Warm coffee with salted caramel." },
      ] },
    ],
  },
  {
    id: "tea-cocoa", label: "Tea & Cocoa",
    groups: [
      { label: "Tea", items: [
        { name: "Matcha Latte", price: 180, desc: "Creamy matcha and latte." },
        { name: "Assam Tea with Muska Bun", price: 200, desc: "Assam tea with soft, buttery muska bun." },
        { name: "Cascara Hot", price: 170, desc: "A light, fruity tea-like coffee cherry infusion." },
        { name: "Honey Lemon Hot Cascara", price: 180, desc: "Brightened with honey and fresh lemon." },
        { name: "Apple Cider Cascara", price: 190, desc: "Apple-cider notes, a gently sweet finish." },
      ] },
      { label: "Hot Chocolate", items: [
        { name: "Regular Hot Chocolate", price: 200, desc: "Classic and creamy." },
        { name: "Exotic Hot Chocolate", price: 240, desc: "Special hot chocolate variation." },
        { name: "Hazelnut Hot Chocolate", price: 240, desc: "Hot chocolate with hazelnut flavour." },
        { name: "Strawberry Hot Chocolate", price: 240, desc: "Creamy, with strawberry flavour." },
      ] },
    ],
  },
  {
    id: "iced-coffee", label: "Iced Coffee",
    groups: [
      { label: "Blended", items: [
        { name: "Signature Cold Coffee", price: 180, desc: "With ice cream and whipped cream." },
        { name: "Hazelnut Frappé", price: 200, desc: "Espresso, vanilla ice cream, hazelnut." },
        { name: "Caramel Cold Coffee", price: 200, desc: "Ice cream and caramel sauce." },
        { name: "Iced Mocha", price: 220, desc: "Coffee and chocolate sauce over ice." },
        { name: "Affogato", price: 150, desc: "Espresso poured over vanilla ice cream." },
      ] },
      { label: "Vietnamese", items: [
        { name: "Vietnamese Iced Coffee", price: 220, desc: "Condensed milk and chocolate over ice." },
        { name: "Salted Vietnamese", price: 240, desc: "A smooth, lightly salted Vietnamese finish." },
        { name: "Coconut Vietnamese", price: 240, desc: "With creamy coconut." },
      ] },
      { label: "Over Ice", items: [
        { name: "Iced Americano", price: 140, desc: "Espresso and cold water." },
        { name: "Iced Latte", price: 180, desc: "Espresso with chilled milk." },
        { name: "Iced Cappuccino", price: 180, desc: "Espresso and chilled milk foam." },
        { name: "Iced Honey Cinnamon Latte", price: 240, desc: "Honey and cinnamon, over ice." },
        { name: "Cranberry Espresso", price: 200, desc: "Espresso with cranberry." },
        { name: "Iced Matcha Latte", price: 220, desc: "Chilled matcha with milk." },
        { name: "Coconut Strawberry Matcha", price: 260, desc: "Coconut, strawberry and matcha." },
        { name: "Blueberry Matcha", price: 260, desc: "Blueberry and matcha." },
      ] },
    ],
  },
  {
    id: "iced-tea", label: "Iced Tea & Cold Brew",
    groups: [
      { label: "Iced Tea", items: [
        { name: "Lemon Basil Iced Tea", price: 210, desc: "Lemon juice and fresh basil over ice." },
        { name: "Peach Iced Tea", price: 180, desc: "Iced tea with peach." },
        { name: "Passion Fruit Iced Tea", price: 180, desc: "Passion fruit and club soda." },
        { name: "Watermelon Iced Tea", price: 200, desc: "Fresh and summery." },
      ] },
      { label: "Cold Brew", items: [
        { name: "Classic Cold Brew", price: 180, desc: "Slow-steeped coffee, served chilled." },
        { name: "Guava Cold Brew", price: 200, desc: "Cold brew with guava." },
        { name: "Litchi Cold Brew", price: 200, desc: "Cold brew with litchi." },
        { name: "Orange Cold Brew", price: 200, desc: "Cold brew with orange." },
      ] },
    ],
  },
  {
    id: "coolers", label: "Coolers",
    groups: [
      { label: "Classics", items: [
        { name: "Piña Colada", price: 210, desc: "Pineapple, ice cream and coconut milk." },
        { name: "Virgin Mojito", price: 160, desc: "Mint or watermelon." },
        { name: "Fresh Lemonade", price: 140, desc: "Lemon or cumin (jeera)." },
        { name: "Strawberry Basil Lemonade", price: 200, desc: "Fresh lemonade, strawberry and basil." },
        { name: "Spiced Jamun", price: 180, desc: "Jamun cooler with a spicy twist." },
      ] },
      { label: "House Coolers", items: [
        { name: "Red Coconut Cloud", price: 180, desc: "A coconut-based cooler." },
        { name: "Blue Lagoon", price: 180, desc: "Blue citrus cooler, granita style." },
        { name: "Green Apple Cooler", price: 180, desc: "Crisp green apple." },
        { name: "Mango Mint Cooler", price: 190, desc: "Mango, fresh mint and a hint of lemon." },
        { name: "Blueberry Mint Cooler", price: 190, desc: "Blueberry, mint and citrus finish." },
      ] },
    ],
  },
  {
    id: "shakes", label: "Shakes & Smoothies",
    groups: [
      { label: "Freakshakes", items: [
        { name: "Chocolate Fantasy", price: 250, desc: "Ganache, brownie, cookies and ice cream." },
        { name: "Blueberry Cheese Shake", price: 250, desc: "Blueberries, cream cheese and vanilla ice cream." },
        { name: "Red Velvet Shake", price: 260, desc: "Red velvet cake and cream cheese." },
        { name: "Oreo Shake", price: 230, desc: "Oreo cookies, ice cream and milk." },
        { name: "Biscoff Cookie Shake", price: 260, desc: "Biscoff cookies, ice cream and milk." },
      ] },
      { label: "Smoothies", items: [
        { name: "Mushakkt (Mixed Fruit)", price: 250, desc: "Strawberry, guava, apple, pineapple, banana, mango." },
        { name: "Berry Blast", price: 250, desc: "A mixed berry smoothie." },
        { name: "Peanut Butter Chocolate", price: 240, desc: "Peanut butter and chocolate." },
        { name: "Banana Strawberry", price: 250, desc: "Banana and strawberry." },
        { name: "Brownie Fudge Blend", price: 260, desc: "Brownie, chocolate and ice cream." },
      ] },
    ],
  },
  {
    id: "breakfast", label: "Breakfast",
    groups: [
      { label: "Veg Breakfast", items: [
        { name: "Veg Breakfast Platter", price: 250, desc: "Baked beans on toast, hash browns, sautéed vegetables." },
        { name: "Oats Fruit Bowl", price: 250, desc: "Oats, seasonal fruit and chia seeds." },
        { name: "Granola Yogurt Bowl", price: 250, desc: "Yogurt, crunchy granola and fresh fruit." },
        { name: "Avocado Toast & Salsa", price: 280, desc: "Sourdough, avocado, lemon, chilli flakes, salsa." },
      ] },
      { label: "Non-Veg Breakfast", items: [
        { name: "Healthy Morning", price: 230, desc: "Boiled egg, avocado, olives, cucumber, chickpeas." },
        { name: "English Breakfast", price: 290, desc: "Eggs your way, hash browns, chicken sausages." },
        { name: "Mutton & Bacon Breakfast", price: 320, desc: "Mutton, bacon, omelette, beans and vegetables." },
      ] },
      { label: "Pancakes & Waffles", items: [
        { name: "Waffle Magic", price: 170, desc: "Waffle with Nutella or chocolate." },
        { name: "Pancake Stack", price: 200, desc: "Soft, fluffy, with Nutella or chocolate." },
      ] },
    ],
  },
  {
    id: "salads-soups", label: "Salads & Soups",
    groups: [
      { label: "Salads", items: [
        { name: "Caesar Salad", price: 220, desc: "Crisp lettuce, creamy garlic and lemon-pepper dressing." },
        { name: "Greek Salad", price: 220, desc: "Lettuce, tomato, cucumber, feta, olives, balsamic." },
        { name: "Mediterranean Vegetable", price: 220, desc: "Seasonal vegetables, herbs and a light dressing." },
        { name: "Roasted Chicken Salad", price: 280, desc: "Roasted chicken over greens, house dressing." },
        { name: "Italian Chicken Pasta Salad", price: 280, desc: "Pasta, chicken, vegetables, Italian dressing." },
      ] },
      { label: "Soups", items: [
        { name: "Zuppa di Broccoli", price: 200, desc: "Creamy broccoli with grated almonds." },
        { name: "Basil al Pomodoro", price: 200, desc: "Fresh tomato soup with basil." },
        { name: "Chinese Soup", price: 200, desc: "Veg or chicken; sweet corn, hot & sour, Peking or Manchow.", signature: true },
        { name: "Tomato & Bell Pepper", price: 200, desc: "Tangy tomato with sweet bell peppers." },
        { name: "Cream of Chicken", price: 230, desc: "Smooth and creamy, with tender chicken." },
        { name: "Clear Chicken Soup", price: 230, desc: "A light chicken broth." },
      ] },
    ],
  },
  {
    id: "sandwiches-wraps", label: "Sandwiches & Wraps",
    groups: [
      { label: "Sandwiches", items: [
        { name: "Club Sandwich", price: 280, desc: "Veg or chicken; layered and toasted with fries and salad." },
        { name: "Classic Grilled", price: 300, desc: "Veg or chicken; vegetables, paneer or roasted chicken." },
        { name: "The Bean Special Sandwich", price: 345, desc: "Our house filling, vegetables and cheese." },
        { name: "Egg & Cheese Sandwich", price: 340, desc: "Egg, cheddar, onion, lettuce, house sauce." },
      ] },
      { label: "Open Toasts", items: [
        { name: "Avocado Tartine", price: 285, desc: "Sourdough, avocado, lemon, chilli and herbs." },
        { name: "Garden Fresh Toast", price: 255, desc: "Seasonal vegetables, herbs, house dressing." },
        { name: "Green & Golden Melt", price: 295, desc: "Spinach, sweet corn and melted cheese." },
      ] },
      { label: "Wraps & Rolls", items: [
        { name: "Lebanese Wrap", price: 245, desc: "Falafel and pickled vegetables with hummus." },
        { name: "Spicy Paneer / Chicken Wrap", price: 225, desc: "Spicy filling with vegetables and mint relish." },
        { name: "Shawarma Wrap", price: 225, desc: "Vegetables and a creamy garlic sauce." },
      ] },
    ],
  },
  {
    id: "appetizers", label: "Appetizers",
    groups: [
      { label: "Fries & Nachos", items: [
        { name: "French Fries", price: 180, desc: "Crisp outside, fluffy inside." },
        { name: "Piri Piri Fries", price: 190, desc: "Tossed in zesty peri-peri." },
        { name: "Loaded Fries", price: 210, desc: "Sauces and toppings, add chicken +50." },
        { name: "Herbed Potato Wedges", price: 190, desc: "Seasoned with herbs, golden and crisp." },
        { name: "Nachos with Salsa", price: 220, desc: "With a fresh, tangy salsa." },
        { name: "Loaded Nachos", price: 240, desc: "Sauces and toppings, add chicken +50." },
      ] },
      { label: "Bites", items: [
        { name: "Joy Croquettes", price: 230, desc: "Cheesy bites with jalapeño and green chilli." },
        { name: "Mushroom Peri-Peri", price: 240, desc: "Mushrooms in a bold peri-peri sauce." },
        { name: "Cheesy Jalapeño Sticks", price: 249, desc: "Mozzarella and jalapeño, crisp coating." },
        { name: "Crispy Corn", price: 255, desc: "Crunchy corn, chef's seasoning." },
        { name: "Chicken Nuggets", price: 225, desc: "Served with fries." },
        { name: "Fish & Chips", price: 355, desc: "Battered fish, fries and tartar sauce." },
        { name: "Chicken Wings in Peri-Peri Sauce", price: 385, desc: "Coated in a bold, spicy peri-peri sauce." },
      ] },
    ],
  },
  {
    id: "burgers-bowls", label: "Burgers & Bowls",
    groups: [
      { label: "Burgers", items: [
        { name: "Lamb Smash Burger", price: 350, desc: "Chef's special, smashed lamb, house sauce." },
        { name: "Grilled Chicken Burger", price: 350, desc: "Smoky chicken, wedges, optional fried egg." },
        { name: "Peri-Peri Cheddar", price: 300, desc: "Veg or chicken, Cajun spice and sriracha mayo." },
        { name: "Veg Mushroom Burger", price: 285, desc: "Mushroom patty, lettuce, house sauce." },
        { name: "Classic Veg Burger", price: 255, desc: "Vegetable patty, lettuce, house sauce." },
        { name: "Classic Chicken Burger", price: 275, desc: "Chicken patty, lettuce, house sauce." },
      ] },
      { label: "Bowls", items: [
        { name: "Chicken Full Plate", price: 455, desc: "Grilled chicken, smashed potatoes, vegetables and rice; BBQ or mushroom sauce." },
        { name: "Cottage Cheese Bowl", price: 345, desc: "Cottage cheese with fresh accompaniments." },
        { name: "Chicken Burrito Bowl", price: 425, desc: "Chicken, rice, vegetables, burrito toppings." },
        { name: "Veg Fajita Bowl", price: 325, desc: "Sautéed vegetables with fajita seasoning." },
      ] },
    ],
  },
  {
    id: "chinese", label: "Chinese",
    groups: [
      { label: "Momos", items: [
        { name: "Classic Veg Momos", price: null, desc: "Steamed, with spicy dipping sauce." },
        { name: "Classic Chicken Momos", price: null, desc: "Steamed, with spicy dipping sauce." },
        { name: "Crispy Veg Momos", price: null, desc: "Fried until crisp, with a flavourful dip." },
        { name: "Crispy Chicken Momos", price: null, desc: "Fried golden, with a flavourful dip." },
      ] },
      { label: "Starters & Manchurian", items: [
        { name: "Crispy Honey Chilli Potato", price: 275, desc: "Sweet, sticky honey-chilli glaze." },
        { name: "Veg Manchurian", price: 300, desc: "Tangy Indo-Chinese, dry or gravy." },
        { name: "Paneer Manchurian", price: 350, desc: "Chilli, hot garlic or lemongrass sauce." },
        { name: "Chicken Manchurian (Dry)", price: null, desc: "Crispy chicken, tangy Manchurian sauce." },
        { name: "Chilli Paneer (Dry)", price: 400, desc: "Chilli peppers, peppers and savoury sauce." },
        { name: "Chilli Chicken (Dry)", price: 450, desc: "Chilli peppers and peppers in savoury sauce." },
      ] },
      { label: "Noodles & Rice", items: [
        { name: "Hakka / Chilli Garlic Noodles", price: 300, desc: "Veg, stir-fried with vegetables." },
        { name: "Chicken Hakka Noodles", price: null, desc: "Wok-tossed with chicken and vegetables." },
        { name: "Schezwan Fried Rice", price: 300, desc: "Add egg +40 or chicken +60." },
      ] },
    ],
  },
  {
    id: "pizza-pasta", label: "Pizza & Pasta",
    groups: [
      { label: "Pizza", items: [
        { name: "Margherita", price: 325, desc: "Tomato, mozzarella and fresh basil." },
        { name: "Pizza alla Bella", price: 360, desc: "Mozzarella, sun-dried tomato, pesto." },
        { name: "Pepperoni Pizza", price: 385, desc: "Chicken pepperoni, tomato and cheese." },
        { name: "Farm Fresh Pizza", price: 375, desc: "Seasonal vegetables and cheese." },
        { name: "Peri-Peri Paneer Pizza", price: 395, desc: "Paneer and zesty peri-peri." },
        { name: "BBQ Chicken Pizza", price: 395, desc: "Chicken, smoky barbecue sauce." },
        { name: "Chicken Pizza", price: 365, desc: "Chicken, mozzarella, tomato sauce." },
      ] },
      { label: "Bakes", items: [
        { name: "Vegetable Lasagne", price: 425, desc: "Spinach, sweet corn, rich savoury sauce." },
        { name: "Chicken Lasagne", price: 445, desc: "Chicken, tomato-vegetable sauce." },
      ] },
      { label: "Pasta", items: [
        { name: "Penne, Fettuccine or Spaghetti", price: 349, desc: "With garlic bread; add chicken +50." },
        { name: "Spicy Arrabbiata", price: 349, desc: "Spicy tomato sauce, roasted garlic." },
        { name: "Alfredo", price: 370, desc: "Creamy cheese sauce, mushrooms, Parmesan." },
        { name: "Basil Pesto", price: 380, desc: "Basil pesto, Parmesan and peppers." },
        { name: "Aglio e Olio Peperoncino", price: 400, desc: "Olive oil, garlic, chilli, herbs." },
        { name: "Spaghetti Bolognese", price: 380, desc: "Rich tomato sauce with chicken." },
        { name: "Mac & Cheese", price: 390, desc: "Creamy, comforting, classic." },
        { name: "Pink Sauce Pasta", price: 380, desc: "Creamy tomato and cheese sauce." },
        { name: "Spinach & Ricotta Ravioli", price: 425, desc: "Served in a light sauce." },
        { name: "Pesto Ravioli", price: 440, desc: "Tossed in fragrant basil pesto." },
      ] },
    ],
  },
  {
    id: "extras", label: "Make It Yours",
    groups: [
      { label: "For Your Drink", items: [
        { name: "Extra Espresso Shot", price: 40 },
        { name: "Flavoured Syrup", price: 25, desc: "Vanilla, caramel, hazelnut or Irish." },
        { name: "Chocolate / Caramel Sauce", price: 20 },
        { name: "Whipped Cream", price: 30 },
        { name: "Oat / Almond Milk", price: 40 },
        { name: "Extra Matcha", price: 40 },
        { name: "Honey", price: 15 },
        { name: "Cookie Crumble", price: 25 },
        { name: "Brownie Crumble", price: 35 },
        { name: "Fruit Purée", price: 30, desc: "Strawberry, mango or berry." },
        { name: "Tapioca / Popping Pearls", price: 40 },
      ] },
      { label: "For Your Plate", items: [
        { name: "Extra Cheese", price: 40 },
        { name: "Extra Cheese Slice", price: 30 },
        { name: "Extra Veg Toppings", price: 40 },
        { name: "Extra Paneer", price: 60 },
        { name: "Extra Chicken", price: 80 },
        { name: "Extra Burger Patty", price: 60 },
        { name: "Add Egg", price: 30 },
        { name: "Extra Fries", price: 80 },
        { name: "Peri-Peri Fries Upgrade", price: 25 },
        { name: "Extra Dip / Sauce", price: 25 },
        { name: "Garlic Bread", price: 100 },
        { name: "Extra Dressing", price: 20 },
        { name: "Extra Noodles", price: 50 },
        { name: "Extra Jalapeños", price: 30 },
      ] },
    ],
  },
];

export const signatures = menu.flatMap((category) =>
  (category.groups || [{ items: category.items }])
    .flatMap((group) => group.items || [])
    .filter((item) => item.signature)
);

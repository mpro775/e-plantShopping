// 18 unique plants: six plants in each of three categories.
// The SVG illustrations are bundled locally, so product images work offline.
export const productCategories = [
  {
    id: 'air-purifying',
    title: 'Air Purifying Plants',
    description: 'Refresh your space with naturally beautiful leafy companions.',
    products: [
      { id: 'monstera', name: 'Monstera Deliciosa', price: 35, description: 'Sculptural split leaves for bright, indirect light.' },
      { id: 'snake', name: 'Snake Plant', price: 22, description: 'Tall, elegant leaves and wonderfully easy care.' },
      { id: 'peace-lily', name: 'Peace Lily', price: 28, description: 'Glossy leaves and delicate white blossoms.' },
      { id: 'rubber', name: 'Rubber Plant', price: 32, description: 'Deep green leaves with a bold, modern silhouette.' },
      { id: 'boston-fern', name: 'Boston Fern', price: 19, description: 'Feathery green fronds for a lush, fresh look.' },
      { id: 'areca-palm', name: 'Areca Palm', price: 39, description: 'Soft tropical fronds that brighten any room.' },
    ],
  },
  {
    id: 'aromatic',
    title: 'Aromatic Plants',
    description: 'Fragrant favorites to bring a little garden magic indoors.',
    products: [
      { id: 'lavender', name: 'Lavender', price: 18, description: 'Calming purple blooms with a gentle herbal scent.' },
      { id: 'rosemary', name: 'Rosemary', price: 16, description: 'Fragrant evergreen sprigs, perfect near a window.' },
      { id: 'jasmine', name: 'Jasmine', price: 26, description: 'Small starry blossoms with a lovely sweet fragrance.' },
      { id: 'gardenia', name: 'Gardenia', price: 30, description: 'Creamy blooms above rich, glossy foliage.' },
      { id: 'lemon-balm', name: 'Lemon Balm', price: 14, description: 'Bright green leaves with a citrus-fresh aroma.' },
      { id: 'mint', name: 'Mint', price: 12, description: 'A refreshing kitchen herb with vibrant new growth.' },
    ],
  },
  {
    id: 'easy-care',
    title: 'Easy Care Plants',
    description: 'Beautiful plants for busy people and first-time gardeners.',
    products: [
      { id: 'aloe', name: 'Aloe Vera', price: 17, description: 'Sun-loving, sculptural leaves and simple upkeep.' },
      { id: 'zz-plant', name: 'ZZ Plant', price: 33, description: 'Shiny leaves that tolerate lower light conditions.' },
      { id: 'pothos', name: 'Golden Pothos', price: 20, description: 'Trailing heart-shaped foliage for shelves or desks.' },
      { id: 'jade', name: 'Jade Plant', price: 21, description: 'Plump rounded leaves on a miniature tree form.' },
      { id: 'spider', name: 'Spider Plant', price: 18, description: 'Graceful striped leaves with a cheerful shape.' },
      { id: 'echeveria', name: 'Echeveria', price: 15, description: 'A compact, symmetrical rosette succulent.' },
    ],
  },
];

export const allProducts = productCategories.flatMap((category) => category.products);
export const productsById = Object.fromEntries(allProducts.map((product) => [product.id, product]));

export const formatPrice = (amount) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 }).format(amount);

export const productImage = (product) => `${import.meta.env.BASE_URL}plants/${product.id}.svg`;

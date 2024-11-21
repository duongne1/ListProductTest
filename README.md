## Requirements

**Using this [product api](https://dummyjson.com/docs/products) to implement the infinite scrolling list for display list of products.**

1. Each time the user **scrolls to the end of the list, fetch the next 20 products**.
2. **Display the list of products** with relevant information (e.g., name, price, image).
    1. Keep the design as simple as possible. Please note that the **design will not be evaluated.**
3. Implement an **input for searching product name** (using */products/search?q* ). 
Whenever user typing, fetch data and update the product list.
4. Products data should be deserialized after fetched from api.


## Project Overview

This project is built using React and TypeScript. It incorporates infinite scrolling using `react-infinite-scroll-component` and lazy loading of images using `react-lazy-load-image-component`. The goal of this project is to provide a smooth user experience with minimal data loading at once and optimized image loading. Additionally, the project includes a search feature that uses `lodash.debounce` to optimize performance by limiting the number of times the search function is triggered during user input.

## Technologies Used

- **React** - JavaScript library for building user interfaces.
- **TypeScript** - A typed superset of JavaScript that adds type safety.
- **react-infinite-scroll-component** - A library to implement infinite scrolling.
- **react-lazy-load-image-component** - A library to implement lazy loading for images.
- **Axios** - For fetching data from APIs.
- **lodash.debounce** - A utility function from Lodash used to optimize the search feature by debouncing user input and reducing the number of search requests.
- **CSS** - For styling the components.

### Installing Dependencies

Clone the repository and navigate into the project folder:

```bash
git clone https://github.com/duongne1/ListProductTest.git
cd ListProductTest
npm install
npm start

```

### Deployment Link

You can access the deployed version of the project at the following link:

[**Deployed Application**](https://list-product-test-g96ukm0qv-duongne1s-projects.vercel.app/)



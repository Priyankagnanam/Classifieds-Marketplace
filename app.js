document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('product-list');
    const productForm = document.getElementById('product-form');
    
    // Sample initial products
    const products = [
        {
            title: "Vintage Camera",
            description: "Classic film camera in excellent condition",
            price: 85.00,
            image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600"
        },
        {
            title: "Wooden Bookshelf",
            description: "Handcrafted oak bookshelf, barely used",
            price: 120.00,
            image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=600"
        }
    ];
    
    // Function to render products
    function renderProducts() {
        productList.innerHTML = '';
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.title}" class="product-img">
                <div class="product-info">
                    <h3>${product.title}</h3>
                    <p>${product.description}</p>
                    <p class="product-price">$${product.price.toFixed(2)}</p>
                </div>
            `;
            productList.appendChild(productCard);
        });
    }
    
    // Form submission
    productForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const price = parseFloat(document.getElementById('price').value);
        const image = document.getElementById('image').value || 'https://via.placeholder.com/300';
        
        // Add new product
        products.push({
            title,
            description,
            price,
            image
        });
        
        // Render updated products
        renderProducts();
        
        // Reset form
        productForm.reset();
    });
    
    // Initial render
    renderProducts();
});

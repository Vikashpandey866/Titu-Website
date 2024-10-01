document.addEventListener('DOMContentLoaded', () => {
    const cartList = document.getElementById('cart-list');
    const totalAmountDisplay = document.getElementById('total-amount');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    // Sample product data
    const products = {
        'Product 1': 10.00,
        'Product 2': 15.50,
        'Product 3': 8.99,
        'Product 4': 8.99,
        'Product 5': 8.99
    };

    // Initialize an empty cart
    let cartItems = [];

    // Function to update the cart display and total amount
    const updateCartDisplay = () => {
        cartList.innerHTML = ''; // Clear the cart display
        let totalAmount = 0; // Initialize total amount

        if (cartItems.length === 0) {
            cartList.innerHTML = '<p>Your cart is empty.</p>';
        } else {
            cartItems.forEach((item, index) => {
                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                cartItem.innerHTML = `
                    <span>${item} - $${products[item].toFixed(2)}</span>
                    <button class="remove-btn" data-index="${index}">Remove</button>
                `;
                cartList.appendChild(cartItem);
                // Add the item's price to the total amount
                totalAmount += products[item];
            });
        }

        // Update the total amount display
        totalAmountDisplay.innerHTML = `Total Amount: $${totalAmount.toFixed(2)}`;
    };

    // Event listener for "Add to Cart" buttons
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const product = button.getAttribute('data-product');
            cartItems.push(product);
            updateCartDisplay();
            showFeedback(`${product} added to cart!`);
        });
    });

    // Event delegation for remove buttons
    cartList.addEventListener('click', (event) => {
        if (event.target.classList.contains('remove-btn')) {
            const index = event.target.getAttribute('data-index');
            cartItems.splice(index, 1); // Remove item from cart
            updateCartDisplay();
        }
    });

    // Dark mode toggle functionality
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const modeIcon = document.getElementById('mode-icon'); // Assuming this is the ID of your icon

    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');

        // Change the icon based on the mode
        if (document.body.classList.contains('dark-mode')) {
            modeIcon.classList.remove('fa-sun'); // Change to moon icon
            modeIcon.classList.add('fa-moon');
        } else {
            modeIcon.classList.remove('fa-moon'); // Change to sun icon
            modeIcon.classList.add('fa-sun');
        }
    });

    // Feedback message when adding to cart
    function showFeedback(message) {
        const feedback = document.createElement('div');
        feedback.textContent = message;
        feedback.className = 'feedback-message';
        document.body.appendChild(feedback);
        setTimeout(() => {
            feedback.remove();
        }, 2000);
    }

    // Menu Toggle Functionality
    const menuIcon = document.querySelector('.menu-icon');
    const closeBtn = document.querySelector('.close-btn');
    const navMenu = document.querySelector('header nav ul');

    menuIcon.addEventListener('click', () => {
        navMenu.classList.toggle('show');
        menuIcon.classList.toggle('active');
        closeBtn.classList.toggle('active');
    });

    closeBtn.addEventListener('click', () => {
        navMenu.classList.toggle('show');
        menuIcon.classList.toggle('active');
        closeBtn.classList.toggle('active');
    });
});

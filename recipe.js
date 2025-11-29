// Recipe Data with verified working images
const recipes = [
    {
        id: 1,
        title: "Avocado Toast with Poached Eggs",
        image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        time: 15,
        servings: 2,
        calories: 320,
        description: "Creamy avocado on toasted artisan bread topped with perfectly poached eggs.",
        tags: ["breakfast", "vegetarian", "healthy", "quick"],
        ingredients: ["2 slices artisan bread", "1 ripe avocado", "2 eggs", "Salt and pepper", "Red pepper flakes", "Lemon juice"],
        instructions: ["Toast bread until golden", "Mash avocado with lemon juice, salt, and pepper", "Poach eggs to your liking", "Spread avocado on toast", "Top with poached eggs and red pepper flakes"]
    },
    {
        id: 2,
        title: "Classic Margherita Pizza",
        image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        time: 30,
        servings: 4,
        calories: 280,
        description: "Homemade pizza with fresh tomatoes, mozzarella, and basil on a thin crust.",
        tags: ["dinner", "vegetarian", "italian"],
        ingredients: ["Pizza dough", "2 tomatoes", "Fresh mozzarella", "Fresh basil", "Olive oil", "Salt"],
        instructions: ["Preheat oven to 475°F", "Roll out pizza dough", "Slice tomatoes and mozzarella", "Arrange on dough", "Bake for 12-15 minutes", "Garnish with fresh basil"]
    },
    {
        id: 3,
        title: "Rainbow Quinoa Bowl",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        time: 25,
        servings: 1,
        calories: 420,
        description: "Nutritious quinoa bowl with roasted vegetables and tahini dressing.",
        tags: ["lunch", "vegan", "gluten-free", "healthy"],
        ingredients: ["1/2 cup quinoa", "Mixed vegetables", "Tahini", "Lemon juice", "Garlic", "Olive oil"],
        instructions: ["Cook quinoa according to package", "Roast vegetables", "Mix tahini dressing", "Combine all ingredients", "Serve warm or cold"]
    },
    {
        id: 4,
        title: "Creamy Mushroom Pasta",
        image: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        time: 20,
        servings: 2,
        calories: 510,
        description: "Rich and creamy pasta with sautéed mushrooms and herbs.",
        tags: ["dinner", "vegetarian", "quick"],
        ingredients: ["200g pasta", "250g mushrooms", "Heavy cream", "Garlic", "Parmesan cheese", "Fresh herbs"],
        instructions: ["Cook pasta al dente", "Sauté mushrooms and garlic", "Add cream and simmer", "Combine with pasta", "Garnish with parmesan"]
    },
    {
        id: 5,
        title: "Fluffy Blueberry Pancakes",
        image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        time: 25,
        servings: 3,
        calories: 320,
        description: "Light and fluffy pancakes bursting with fresh blueberries.",
        tags: ["breakfast", "vegetarian", "quick"],
        ingredients: ["1 cup flour", "1 cup milk", "1 egg", "Blueberries", "Baking powder", "Maple syrup"],
        instructions: ["Mix dry ingredients", "Add wet ingredients", "Fold in blueberries", "Cook on griddle", "Serve with maple syrup"]
    },
    {
        id: 6,
        title: "Tropical Green Smoothie",
        image: "https://images.unsplash.com/photo-1635365117518-862ab6d67e2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        time: 5,
        servings: 1,
        calories: 180,
        description: "Refreshing smoothie with spinach, pineapple, mango and coconut water.",
        tags: ["breakfast", "vegan", "gluten-free", "healthy", "quick"],
        ingredients: ["1 cup spinach", "1/2 cup pineapple", "1/2 cup mango", "1 cup coconut water", "1 banana"],
        instructions: ["Add all ingredients to blender", "Blend until smooth", "Serve immediately"]
    },
    {
        id: 7,
        title: "Mediterranean Salad Bowl",
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        time: 15,
        servings: 2,
        calories: 290,
        description: "Fresh Mediterranean flavors with feta, olives, and lemon dressing.",
        tags: ["lunch", "vegetarian", "gluten-free", "healthy", "quick"],
        ingredients: ["Mixed greens", "Cherry tomatoes", "Cucumber", "Feta cheese", "Kalamata olives", "Lemon dressing"],
        instructions: ["Chop vegetables", "Combine in bowl", "Add feta and olives", "Dress with lemon vinaigrette"]
    },
    {
        id: 8,
        title: "Vegetable Stir Fry",
        image: "https://images.unsplash.com/photo-1626700051175-6818013e0571?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        time: 20,
        servings: 2,
        calories: 240,
        description: "Colorful vegetables stir-fried in a savory sauce with tofu.",
        tags: ["dinner", "vegan", "gluten-free", "healthy", "quick"],
        ingredients: ["Mixed vegetables", "Tofu", "Soy sauce", "Ginger", "Garlic", "Sesame oil"],
        instructions: ["Press and cube tofu", "Stir-fry vegetables", "Add sauce ingredients", "Combine and serve hot"]
    },
    {
        id: 9,
        title: "Classic Beef Burger",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        time: 25,
        servings: 4,
        calories: 450,
        description: "Juicy beef burgers with all the classic toppings.",
        tags: ["dinner", "lunch"],
        ingredients: ["1lb ground beef", "Burger buns", "Lettuce", "Tomato", "Cheese", "Condiments"],
        instructions: ["Form burger patties", "Grill to preference", "Toast buns", "Assemble with toppings"]
    },
    {
        id: 10,
        title: "Chocolate Chip Cookies",
        image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        time: 30,
        servings: 12,
        calories: 180,
        description: "Classic chocolate chip cookies with crispy edges and chewy centers.",
        tags: ["dessert", "vegetarian"],
        ingredients: ["Flour", "Butter", "Brown sugar", "Chocolate chips", "Egg", "Vanilla"],
        instructions: ["Cream butter and sugars", "Add egg and vanilla", "Mix in dry ingredients", "Fold in chocolate chips", "Bake at 350°F for 10-12 minutes"]
    },
    {
        id: 11,
        title: "Greek Yogurt Parfait",
        image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        time: 5,
        servings: 1,
        calories: 220,
        description: "Layers of Greek yogurt, granola, and fresh berries.",
        tags: ["breakfast", "vegetarian", "healthy", "quick"],
        ingredients: ["Greek yogurt", "Granola", "Mixed berries", "Honey"],
        instructions: ["Layer yogurt in glass", "Add granola layer", "Top with berries", "Drizzle with honey"]
    },
    {
        id: 12,
        title: "Vegetable Lasagna",
        image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        time: 60,
        servings: 6,
        calories: 380,
        description: "Hearty vegetable lasagna with layers of pasta, cheese, and fresh vegetables.",
        tags: ["dinner", "vegetarian"],
        ingredients: ["Lasagna noodles", "Ricotta cheese", "Mozzarella", "Vegetables", "Tomato sauce", "Herbs"],
        instructions: ["Cook noodles", "Layer with vegetables and cheese", "Bake covered for 45 minutes", "Let rest before serving"]
    },
    {
        id: 13,
        title: "Mango Salsa",
        image: "https://images.unsplash.com/photo-1553621042-f6e147245754?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        time: 15,
        servings: 4,
        calories: 80,
        description: "Fresh and tangy mango salsa perfect for chips or as a topping.",
        tags: ["snack", "vegan", "gluten-free", "healthy", "quick"],
        ingredients: ["2 ripe mangoes", "Red onion", "Cilantro", "Lime juice", "Jalapeño"],
        instructions: ["Dice mangoes and vegetables", "Combine in bowl", "Add lime juice", "Chill before serving"]
    },
    {
        id: 14,
        title: "Chicken Caesar Salad",
        image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        time: 20,
        servings: 2,
        calories: 320,
        description: "Classic Caesar salad with grilled chicken and homemade dressing.",
        tags: ["lunch", "dinner", "healthy"],
        ingredients: ["Romaine lettuce", "Grilled chicken", "Parmesan", "Croutons", "Caesar dressing"],
        instructions: ["Chop and wash lettuce", "Slice grilled chicken", "Toss with dressing", "Top with parmesan and croutons"]
    },
    {
        id: 15,
        title: "Berry Smoothie Bowl",
        image: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        time: 10,
        servings: 1,
        calories: 280,
        description: "Thick smoothie bowl topped with fresh fruits and nuts.",
        tags: ["breakfast", "vegan", "gluten-free", "healthy", "quick"],
        ingredients: ["Mixed berries", "Banana", "Almond milk", "Toppings of choice"],
        instructions: ["Blend fruits with minimal liquid", "Pour into bowl", "Arrange toppings", "Serve immediately"]
    },
    {
        id: 16,
        title: "Garlic Butter Shrimp",
        image: "https://images.unsplash.com/photo-1605478371310-a9f1e96b4ff4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        time: 15,
        servings: 2,
        calories: 290,
        description: "Succulent shrimp cooked in garlic butter sauce.",
        tags: ["dinner", "gluten-free", "quick"],
        ingredients: ["Shrimp", "Butter", "Garlic", "Lemon", "Parsley"],
        instructions: ["Sauté garlic in butter", "Add shrimp and cook", "Squeeze lemon juice", "Garnish with parsley"]
    },
    {
        id: 17,
        title: "Overnight Oats",
        image: "https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        time: 5,
        servings: 1,
        calories: 350,
        description: "Make-ahead oats that soak overnight for a perfect breakfast.",
        tags: ["breakfast", "vegetarian", "healthy", "quick"],
        ingredients: ["Oats", "Milk", "Chia seeds", "Maple syrup", "Toppings"],
        instructions: ["Combine ingredients in jar", "Refrigerate overnight", "Add toppings before serving"]
    },
    {
        id: 18,
        title: "Caprese Skewers",
        image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        time: 10,
        servings: 6,
        calories: 120,
        description: "Easy appetizer with mozzarella, tomatoes, and basil.",
        tags: ["appetizer", "vegetarian", "gluten-free", "quick"],
        ingredients: ["Cherry tomatoes", "Mozzarella balls", "Fresh basil", "Balsamic glaze"],
        instructions: ["Thread ingredients on skewers", "Drizzle with balsamic", "Serve immediately"]
    },
    {
        id: 19,
        title: "Vegetable Curry",
        image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        time: 35,
        servings: 4,
        calories: 280,
        description: "Spicy and aromatic vegetable curry with coconut milk.",
        tags: ["dinner", "vegan", "gluten-free", "healthy"],
        ingredients: ["Mixed vegetables", "Coconut milk", "Curry paste", "Herbs and spices"],
        instructions: ["Sauté vegetables", "Add curry paste", "Pour in coconut milk", "Simmer until tender"]
    },
    {
        id: 20,
        title: "Banana Bread",
        image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        time: 70,
        servings: 8,
        calories: 250,
        description: "Moist and delicious banana bread perfect for breakfast or snack.",
        tags: ["breakfast", "dessert", "vegetarian"],
        ingredients: ["Ripe bananas", "Flour", "Eggs", "Butter", "Sugar", "Baking soda"],
        instructions: ["Mash bananas", "Mix wet and dry ingredients", "Bake at 350°F for 55-60 minutes", "Cool before slicing"]
    },
    {
        id: 21,
        title: "Grilled Salmon",
        image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        time: 20,
        servings: 2,
        calories: 320,
        description: "Perfectly grilled salmon with lemon and herbs.",
        tags: ["dinner", "gluten-free", "healthy", "quick"],
        ingredients: ["Salmon fillets", "Lemon", "Herbs", "Olive oil", "Salt and pepper"],
        instructions: ["Season salmon", "Grill skin-side down", "Flip and finish cooking", "Serve with lemon wedges"]
    },
    {
        id: 22,
        title: "Fruit Salad",
        image: "https://images.unsplash.com/photo-1564093497595-593b96d80180?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        time: 15,
        servings: 4,
        calories: 120,
        description: "Colorful mix of fresh seasonal fruits with honey lime dressing.",
        tags: ["dessert", "vegan", "gluten-free", "healthy", "quick"],
        ingredients: ["Mixed fruits", "Lime juice", "Honey", "Mint leaves"],
        instructions: ["Chop fruits", "Mix dressing", "Combine and toss gently", "Chill before serving"]
    },
    {
        id: 23,
        title: "Tomato Basil Soup",
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        time: 30,
        servings: 4,
        calories: 180,
        description: "Creamy tomato soup with fresh basil and a hint of garlic.",
        tags: ["lunch", "dinner", "vegetarian", "gluten-free", "healthy"],
        ingredients: ["Tomatoes", "Fresh basil", "Garlic", "Cream", "Vegetable broth"],
        instructions: ["Sauté garlic", "Add tomatoes and broth", "Simmer and blend", "Stir in cream and basil"]
    },
    {
        id: 24,
        title: "Chicken Stir Fry",
        image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        time: 25,
        servings: 2,
        calories: 320,
        description: "Quick and easy chicken stir fry with colorful vegetables.",
        tags: ["dinner", "lunch", "healthy", "quick"],
        ingredients: ["Chicken breast", "Mixed vegetables", "Soy sauce", "Ginger", "Garlic"],
        instructions: ["Slice and cook chicken", "Stir-fry vegetables", "Combine with sauce", "Serve over rice"]
    },
    {
        id: 25,
        title: "Chocolate Avocado Mousse",
        image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        time: 10,
        servings: 2,
        calories: 280,
        description: "Rich and creamy chocolate mousse made with avocado.",
        tags: ["dessert", "vegan", "gluten-free", "healthy", "quick"],
        ingredients: ["Ripe avocado", "Cocoa powder", "Maple syrup", "Vanilla extract"],
        instructions: ["Blend all ingredients", "Chill for 30 minutes", "Serve with berries"]
    }
];

// DOM Elements
const recipesGrid = document.getElementById('recipesGrid');
const filterButtons = document.querySelectorAll('.filter-btn');
const searchInput = document.getElementById('searchInput');
const backToTopButton = document.getElementById('backToTop');
const exploreBtn = document.getElementById('exploreBtn');
const phoneNumberElement = document.getElementById('phoneNumber');
const categoryCards = document.querySelectorAll('.category-card');
const contactForm = document.getElementById('contactForm');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    displayRecipes(recipes);
    setupEventListeners();
    generatePhoneNumber();
});

// Display recipes in the grid
function displayRecipes(recipesToDisplay) {
    recipesGrid.innerHTML = '';
    
    if (recipesToDisplay.length === 0) {
        recipesGrid.innerHTML = '<div class="loading">No recipes found. Try a different search or filter.</div>';
        return;
    }
    
    recipesToDisplay.forEach(recipe => {
        const recipeCard = createRecipeCard(recipe);
        recipesGrid.appendChild(recipeCard);
    });
}

// Create recipe card HTML
function createRecipeCard(recipe) {
    const card = document.createElement('div');
    card.className = 'recipe-card';
    card.dataset.tags = recipe.tags.join(' ');
    
    const tagsHTML = recipe.tags.map(tag => 
        `<span class="recipe-tag">${tag}</span>`
    ).join('');
    
    card.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.title}" class="recipe-img" onerror="this.src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'">
        <div class="recipe-content">
            <h3 class="recipe-title">${recipe.title}</h3>
            <div class="recipe-meta">
                <span><i class="fas fa-clock"></i> ${recipe.time} min</span>
                <span><i class="fas fa-user"></i> ${recipe.servings} ${recipe.servings === 1 ? 'serving' : 'servings'}</span>
                <span><i class="fas fa-fire"></i> ${recipe.calories} cal</span>
            </div>
            <div class="recipe-tags">
                ${tagsHTML}
            </div>
            <p class="recipe-description">${recipe.description}</p>
            <button class="recipe-btn" data-id="${recipe.id}">View Recipe</button>
        </div>
    `;
    
    return card;
}

// Setup event listeners
function setupEventListeners() {
    // Filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.dataset.filter;
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter recipes
            filterRecipes(filter);
        });
    });
    
    // Search functionality
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        searchRecipes(searchTerm);
    });
    
    // Back to top button
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });
    
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Explore button
    exploreBtn.addEventListener('click', function() {
        document.getElementById('recipes').scrollIntoView({
            behavior: 'smooth'
        });
    });
    
    // Category cards
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const category = this.dataset.category;
            
            // Update active filter button
            filterButtons.forEach(btn => {
                btn.classList.toggle('active', btn.dataset.filter === category);
            });
            
            // Filter recipes
            filterRecipes(category);
            
            // Scroll to recipes section
            document.getElementById('recipes').scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Footer category links
    document.querySelectorAll('.footer-links a[data-filter]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const filter = this.dataset.filter;
            
            // Update active filter button
            filterButtons.forEach(btn => {
                btn.classList.toggle('active', btn.dataset.filter === filter);
            });
            
            // Filter recipes
            filterRecipes(filter);
            
            // Scroll to recipes section
            document.getElementById('recipes').scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Recipe button clicks (delegated)
    recipesGrid.addEventListener('click', function(e) {
        if (e.target.classList.contains('recipe-btn')) {
            const recipeId = parseInt(e.target.dataset.id);
            const recipe = recipes.find(r => r.id === recipeId);
            if (recipe) {
                showRecipeModal(recipe);
            }
        }
    });
    
    // Contact form submission
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    }
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Filter recipes by category
function filterRecipes(filter) {
    const allRecipes = document.querySelectorAll('.recipe-card');
    
    if (filter === 'all') {
        allRecipes.forEach(card => {
            card.classList.remove('hidden');
        });
    } else {
        allRecipes.forEach(card => {
            if (card.dataset.tags.includes(filter)) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    }
}

// Search recipes
function searchRecipes(searchTerm) {
    if (searchTerm === '') {
        displayRecipes(recipes);
        return;
    }
    
    const filteredRecipes = recipes.filter(recipe => 
        recipe.title.toLowerCase().includes(searchTerm) ||
        recipe.description.toLowerCase().includes(searchTerm) ||
        recipe.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
        recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchTerm))
    );
    
    displayRecipes(filteredRecipes);
}

// Generate random phone number
function generatePhoneNumber() {
    const areaCode = Math.floor(Math.random() * 900) + 100;
    const prefix = Math.floor(Math.random() * 900) + 100;
    const lineNumber = Math.floor(Math.random() * 9000) + 1000;
    const phoneNumber = `(${areaCode}) ${prefix}-${lineNumber}`;
    
    if (phoneNumberElement) {
        phoneNumberElement.textContent = phoneNumber;
    }
}

// Show recipe modal
function showRecipeModal(recipe) {
    // Create modal HTML
    const modalHTML = `
        <div class="modal-overlay" id="recipeModal">
            <div class="modal-content">
                <button class="modal-close">&times;</button>
                <div class="modal-header">
                    <img src="${recipe.image}" alt="${recipe.title}" onerror="this.src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'">
                    <h2>${recipe.title}</h2>
                    <div class="recipe-meta">
                        <span><i class="fas fa-clock"></i> ${recipe.time} min</span>
                        <span><i class="fas fa-user"></i> ${recipe.servings} ${recipe.servings === 1 ? 'serving' : 'servings'}</span>
                        <span><i class="fas fa-fire"></i> ${recipe.calories} cal</span>
                    </div>
                </div>
                <div class="modal-body">
                    <div class="ingredients-section">
                        <h3>Ingredients</h3>
                        <ul>
                            ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="instructions-section">
                        <h3>Instructions</h3>
                        <ol>
                            ${recipe.instructions.map(instruction => `<li>${instruction}</li>`).join('')}
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Add modal to page
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Add event listeners for modal
    const modal = document.getElementById('recipeModal');
    const closeBtn = modal.querySelector('.modal-close');
    
    closeBtn.addEventListener('click', function() {
        document.body.removeChild(modal);
    });
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function closeModal(e) {
        if (e.key === 'Escape' && modal) {
            document.body.removeChild(modal);
            document.removeEventListener('keydown', closeModal);
        }
    });
}
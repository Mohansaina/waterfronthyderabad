import React from 'react';
import './index.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="fixed w-full z-50 bg-transparent backdrop-blur-sm bg-white bg-opacity-10 shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-amber">
            <span className="text-white">Waterfront</span> <span className="text-amber">Hyderabad</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-white hover:text-amber transition">Home</a>
            <a href="#menu" className="text-white hover:text-amber transition">Menu</a>
            <a href="#experience" className="text-white hover:text-amber transition">Experience</a>
            <a href="#gallery" className="text-white hover:text-amber transition">Gallery</a>
            <a href="#reviews" className="text-white hover:text-amber transition">Reviews</a>
            <a href="#contact" className="text-white hover:text-amber transition">Contact</a>
          </div>
          <button className="btn-primary hidden md:block">
            Reserve Table
          </button>
          <button className="md:hidden text-white text-2xl">
            <i className="fas fa-bars"></i>
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-navy-blue/70 to-teal/50"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 text-shadow">
            Dine by the Water. Taste the Moment.
          </h1>
          <p className="text-xl text-beige mb-10 max-w-2xl mx-auto text-shadow">
            Hyderabad's finest waterfront dining experience with breathtaking lake views and exquisite cuisine
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="btn-primary">
              <i className="fas fa-calendar-alt mr-2"></i> Reserve a Table
            </button>
            <button className="btn-secondary">
              <i className="fas fa-utensils mr-2"></i> Explore Menu
            </button>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="section-padding bg-gradient-to-b from-teal to-navy-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-white mb-4">Our Culinary Journey</h2>
            <div className="w-24 h-1 bg-amber mx-auto"></div>
          </div>

          {/* Hyderabadi Specials */}
          <div className="mb-16">
            <h3 className="text-2xl font-serif font-semibold text-amber mb-8 text-center">Hyderabadi Specials</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="glass-card text-center">
                <img 
                  src="https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                  alt="Chicken Dum Biryani" 
                  className="w-full h-48 object-cover rounded-t-2xl"
                />
                <h4 className="text-xl font-semibold text-white mt-4">Chicken Dum Biryani</h4>
                <p className="text-beige mt-2">Fragrant basmati rice layered with tender chicken and aromatic spices</p>
                <p className="text-amber font-bold mt-2">₹450</p>
              </div>
              
              <div className="glass-card text-center">
                <img 
                  src="https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                  alt="Mutton Dum Biryani" 
                  className="w-full h-48 object-cover rounded-t-2xl"
                />
                <h4 className="text-xl font-semibold text-white mt-4">Mutton Dum Biryani</h4>
                <p className="text-beige mt-2">Slow-cooked mutton with basmati rice and traditional Hyderabadi spices</p>
                <p className="text-amber font-bold mt-2">₹550</p>
              </div>
              
              <div className="glass-card text-center">
                <img 
                  src="https://images.unsplash.com/photo-1561758033-7e924f619b47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                  alt="Hyderabadi Haleem" 
                  className="w-full h-48 object-cover rounded-t-2xl"
                />
                <h4 className="text-xl font-semibold text-white mt-4">Hyderabadi Haleem</h4>
                <p className="text-beige mt-2">Slow-cooked delicacy of wheat, barley, meat and spices</p>
                <p className="text-amber font-bold mt-2">₹380</p>
              </div>
              
              <div className="glass-card text-center">
                <img 
                  src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=781&q=80" 
                  alt="Mirchi Ka Salan" 
                  className="w-full h-48 object-cover rounded-t-2xl"
                />
                <h4 className="text-xl font-semibold text-white mt-4">Mirchi Ka Salan</h4>
                <p className="text-beige mt-2">Spicy curry made with big green chilies and peanuts</p>
                <p className="text-amber font-bold mt-2">₹280</p>
              </div>
            </div>
          </div>

          {/* Seafood Specials */}
          <div className="mb-16">
            <h3 className="text-2xl font-serif font-semibold text-amber mb-8 text-center">Seafood Specials</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="glass-card text-center">
                <img 
                  src="https://images.unsplash.com/photo-1606755962773-d324e0a13086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Grilled Fish with Lemon Butter" 
                  className="w-full h-48 object-cover rounded-t-2xl"
                />
                <h4 className="text-xl font-semibold text-white mt-4">Grilled Fish with Lemon Butter</h4>
                <p className="text-beige mt-2">Fresh catch of the day grilled to perfection with lemon herb butter</p>
                <p className="text-amber font-bold mt-2">₹650</p>
              </div>
              
              <div className="glass-card text-center">
                <img 
                  src="https://images.unsplash.com/photo-1606755456206-b25206cde27e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                  alt="Butter Garlic Prawns" 
                  className="w-full h-48 object-cover rounded-t-2xl"
                />
                <h4 className="text-xl font-semibold text-white mt-4">Butter Garlic Prawns</h4>
                <p className="text-beige mt-2">Jumbo prawns cooked in rich butter garlic sauce</p>
                <p className="text-amber font-bold mt-2">₹750</p>
              </div>
              
              <div className="glass-card text-center">
                <img 
                  src="https://images.unsplash.com/photo-1606755456206-b25206cde27e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                  alt="Coastal Fish Curry" 
                  className="w-full h-48 object-cover rounded-t-2xl"
                />
                <h4 className="text-xl font-semibold text-white mt-4">Coastal Fish Curry</h4>
                <p className="text-beige mt-2">Traditional coastal recipe with coconut and tamarind</p>
                <p className="text-amber font-bold mt-2">₹580</p>
              </div>
              
              <div className="glass-card text-center">
                <img 
                  src="https://images.unsplash.com/photo-1606755456206-b25206cde27e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                  alt="Seafood Platter" 
                  className="w-full h-48 object-cover rounded-t-2xl"
                />
                <h4 className="text-xl font-semibold text-white mt-4">Seafood Platter</h4>
                <p className="text-beige mt-2">Assortment of prawns, fish, and calamari with signature sauces</p>
                <p className="text-amber font-bold mt-2">₹950</p>
              </div>
            </div>
          </div>

          {/* Starters */}
          <div className="mb-16">
            <h3 className="text-2xl font-serif font-semibold text-amber mb-8 text-center">Starters</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="glass-card text-center">
                <img 
                  src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80" 
                  alt="Chicken Tikka" 
                  className="w-full h-48 object-cover rounded-t-2xl"
                />
                <h4 className="text-xl font-semibold text-white mt-4">Chicken Tikka</h4>
                <p className="text-beige mt-2">Tender chicken pieces marinated in yogurt and spices</p>
                <p className="text-amber font-bold mt-2">₹380</p>
              </div>
              
              <div className="glass-card text-center">
                <img 
                  src="https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=786&q=80" 
                  alt="Paneer Tikka" 
                  className="w-full h-48 object-cover rounded-t-2xl"
                />
                <h4 className="text-xl font-semibold text-white mt-4">Paneer Tikka</h4>
                <p className="text-beige mt-2">Cottage cheese cubes marinated and grilled to perfection</p>
                <p className="text-amber font-bold mt-2">₹320</p>
              </div>
              
              <div className="glass-card text-center">
                <img 
                  src="https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                  alt="Crispy Corn" 
                  className="w-full h-48 object-cover rounded-t-2xl"
                />
                <h4 className="text-xl font-semibold text-white mt-4">Crispy Corn</h4>
                <p className="text-beige mt-2">Golden fried baby corn with special spices</p>
                <p className="text-amber font-bold mt-2">₹260</p>
              </div>
              
              <div className="glass-card text-center">
                <img 
                  src="https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=786&q=80" 
                  alt="Veg Kebab Platter" 
                  className="w-full h-48 object-cover rounded-t-2xl"
                />
                <h4 className="text-xl font-semibold text-white mt-4">Veg Kebab Platter</h4>
                <p className="text-beige mt-2">Assortment of grilled vegetable kebabs with mint chutney</p>
                <p className="text-amber font-bold mt-2">₹420</p>
              </div>
            </div>
          </div>

          {/* Continental & Asian */}
          <div className="mb-16">
            <h3 className="text-2xl font-serif font-semibold text-amber mb-8 text-center">Continental & Asian</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="glass-card text-center">
                <img 
                  src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Creamy Alfredo Pasta" 
                  className="w-full h-48 object-cover rounded-t-2xl"
                />
                <h4 className="text-xl font-semibold text-white mt-4">Creamy Alfredo Pasta</h4>
                <p className="text-beige mt-2">Fettuccine in rich creamy parmesan sauce</p>
                <p className="text-amber font-bold mt-2">₹380</p>
              </div>
              
              <div className="glass-card text-center">
                <img 
                  src="https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                  alt="Grilled Chicken Steak" 
                  className="w-full h-48 object-cover rounded-t-2xl"
                />
                <h4 className="text-xl font-semibold text-white mt-4">Grilled Chicken Steak</h4>
                <p className="text-beige mt-2">Juicy chicken breast grilled to perfection with herbs</p>
                <p className="text-amber font-bold mt-2">₹580</p>
              </div>
              
              <div className="glass-card text-center">
                <img 
                  src="https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                  alt="Asian Veg Stir Fry" 
                  className="w-full h-48 object-cover rounded-t-2xl"
                />
                <h4 className="text-xl font-semibold text-white mt-4">Asian Veg Stir Fry</h4>
                <p className="text-beige mt-2">Mixed vegetables stir-fried in oriental sauces</p>
                <p className="text-amber font-bold mt-2">₹350</p>
              </div>
              
              <div className="glass-card text-center">
                <img 
                  src="https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                  alt="Teriyaki Chicken Bowl" 
                  className="w-full h-48 object-cover rounded-t-2xl"
                />
                <h4 className="text-xl font-semibold text-white mt-4">Teriyaki Chicken Bowl</h4>
                <p className="text-beige mt-2">Grilled chicken with teriyaki sauce over steamed rice</p>
                <p className="text-amber font-bold mt-2">₹480</p>
              </div>
            </div>
          </div>

          {/* Desserts & Beverages */}
          <div>
            <h3 className="text-2xl font-serif font-semibold text-amber mb-8 text-center">Desserts & Beverages</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="glass-card text-center">
                <img 
                  src="https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                  alt="Chocolate Lava Cake" 
                  className="w-full h-48 object-cover rounded-t-2xl"
                />
                <h4 className="text-xl font-semibold text-white mt-4">Chocolate Lava Cake</h4>
                <p className="text-beige mt-2">Warm chocolate cake with molten center, served with vanilla ice cream</p>
                <p className="text-amber font-bold mt-2">₹280</p>
              </div>
              
              <div className="glass-card text-center">
                <img 
                  src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=781&q=80" 
                  alt="Kunafa" 
                  className="w-full h-48 object-cover rounded-t-2xl"
                />
                <h4 className="text-xl font-semibold text-white mt-4">Kunafa</h4>
                <p className="text-beige mt-2">Traditional Middle Eastern dessert with cheese and syrup</p>
                <p className="text-amber font-bold mt-2">₹320</p>
              </div>
              
              <div className="glass-card text-center">
                <img 
                  src="https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                  alt="Gulab Jamun with Ice Cream" 
                  className="w-full h-48 object-cover rounded-t-2xl"
                />
                <h4 className="text-xl font-semibold text-white mt-4">Gulab Jamun with Ice Cream</h4>
                <p className="text-beige mt-2">Soft milk-solid dumplings in rose syrup with vanilla ice cream</p>
                <p className="text-amber font-bold mt-2">₹250</p>
              </div>
              
              <div className="glass-card text-center">
                <img 
                  src="https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                  alt="Signature Mocktails" 
                  className="w-full h-48 object-cover rounded-t-2xl"
                />
                <h4 className="text-xl font-semibold text-white mt-4">Signature Mocktails</h4>
                <p className="text-beige mt-2">Refreshing non-alcoholic beverages with unique flavors</p>
                <p className="text-amber font-bold mt-2">₹180</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-padding bg-gradient-to-b from-navy-blue to-teal">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-white mb-4">Our Dining Experience</h2>
            <div className="w-24 h-1 bg-amber mx-auto"></div>
            <p className="text-xl text-beige mt-6 max-w-2xl mx-auto">Discover the perfect blend of culinary excellence and serene waterfront ambiance</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass-card text-center p-8">
              <div className="text-amber text-5xl mb-6">
                <i className="fas fa-water"></i>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Lakeside Seating</h3>
              <p className="text-beige">Experience the tranquil beauty of the lake with our thoughtfully designed seating arrangements that offer unobstructed views of the water.</p>
            </div>

            <div className="glass-card text-center p-8">
              <div className="text-amber text-5xl mb-6">
                <i className="fas fa-sun"></i>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Sunset Views</h3>
              <p className="text-beige">Witness the mesmerizing sunset over the water as golden hues reflect on the lake, creating an unforgettable dining atmosphere.</p>
            </div>

            <div className="glass-card text-center p-8">
              <div className="text-amber text-5xl mb-6">
                <i className="fas fa-candle-holder"></i>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Candle-light Dinners</h3>
              <p className="text-beige">Romantic evenings with soft candlelight ambiance, perfect for intimate conversations and special moments.</p>
            </div>

            <div className="glass-card text-center p-8">
              <div className="text-amber text-5xl mb-6">
                <i className="fas fa-music"></i>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Live Music Evenings</h3>
              <p className="text-beige">Enjoy soulful melodies and acoustic performances that complement your dining experience with soothing sounds.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="section-padding bg-gradient-to-b from-teal to-navy-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-white mb-4">Gallery</h2>
            <div className="w-24 h-1 bg-amber mx-auto"></div>
            <p className="text-xl text-beige mt-6 max-w-2xl mx-auto">A visual journey through our waterfront dining experience</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="glass-card overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Waterfront View Day"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            
            <div className="glass-card overflow-hidden group md:col-span-2">
              <img 
                src="https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80" 
                alt="Waterfront View Night"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            
            <div className="glass-card overflow-hidden group md:col-span-2">
              <img 
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                alt="Food Close-up"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            
            <div className="glass-card overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80" 
                alt="Table Setup"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            
            <div className="glass-card overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Ambient Lighting"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            
            <div className="glass-card overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                alt="Dining Ambiance"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="section-padding bg-gradient-to-b from-navy-blue to-teal">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-white mb-4">What Our Guests Say</h2>
            <div className="w-24 h-1 bg-amber mx-auto"></div>
            <p className="text-xl text-beige mt-6 max-w-2xl mx-auto">Experience the luxury through the words of our valued guests</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8">
              <div className="flex mb-4">
                <i className="fas fa-star text-amber"></i>
                <i className="fas fa-star text-amber"></i>
                <i className="fas fa-star text-amber"></i>
                <i className="fas fa-star text-amber"></i>
                <i className="fas fa-star text-amber"></i>
              </div>
              <p className="text-beige mb-6">"The waterfront view combined with exceptional cuisine made our anniversary unforgettable. The staff was attentive and the ambiance was perfect."</p>
              <div className="flex items-center">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                <div className="ml-4">
                  <h4 className="font-semibold text-white">Rajesh Kumar</h4>
                  <p className="text-amber">Google Review</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-8">
              <div className="flex mb-4">
                <i className="fas fa-star text-amber"></i>
                <i className="fas fa-star text-amber"></i>
                <i className="fas fa-star text-amber"></i>
                <i className="fas fa-star text-amber"></i>
                <i className="fas fa-star text-amber"></i>
              </div>
              <p className="text-beige mb-6">"The Hyderabadi biryani was the best I've ever had! The lake view during sunset was breathtaking. A perfect evening with family."</p>
              <div className="flex items-center">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                <div className="ml-4">
                  <h4 className="font-semibold text-white">Priya Sharma</h4>
                  <p className="text-amber">Google Review</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-8">
              <div className="flex mb-4">
                <i className="fas fa-star text-amber"></i>
                <i className="fas fa-star text-amber"></i>
                <i className="fas fa-star text-amber"></i>
                <i className="fas fa-star text-amber"></i>
                <i className="fas fa-star text-amber"></i>
              </div>
              <p className="text-beige mb-6">"The romantic setting with candlelight and soft music created the perfect atmosphere for our proposal. The food was exquisite!"</p>
              <div className="flex items-center">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                <div className="ml-4">
                  <h4 className="font-semibold text-white">Amit & Sneha</h4>
                  <p className="text-amber">Google Review</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-gradient-to-b from-teal to-navy-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-white mb-4">Visit Us</h2>
            <div className="w-24 h-1 bg-amber mx-auto"></div>
            <p className="text-xl text-beige mt-6 max-w-2xl mx-auto">Located by the serene waters of Hussain Sagar Lake, Hyderabad</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-amber text-2xl mr-4">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Address</h4>
                    <p className="text-beige">Waterfront Complex, Hussain Sagar Lake, Hyderabad, Telangana 500004</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-amber text-2xl mr-4">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Phone</h4>
                    <p className="text-beige">+91 98765 43210</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-amber text-2xl mr-4">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Email</h4>
                    <p className="text-beige">info@waterfronthyderabad.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-amber text-2xl mr-4">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Opening Hours</h4>
                    <p className="text-beige">Monday - Sunday: 12:00 PM - 11:00 PM</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center justify-center">
                  <i className="fab fa-whatsapp mr-2"></i> WhatsApp Us
                </a>
              </div>
              
              <div className="mt-6 flex space-x-4">
                <a href="#" className="text-2xl text-amber hover:text-white transition">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-2xl text-amber hover:text-white transition">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-2xl text-amber hover:text-white transition">
                  <i className="fab fa-tripadvisor"></i>
                </a>
              </div>
            </div>
            
            <div className="glass-card p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Find Us</h3>
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 flex items-center justify-center text-gray-500">
                Map Location
                <br />
                Waterfront Hyderabad
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-blue text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-amber">
                <span className="text-white">Waterfront</span> <span className="text-amber">Hyderabad</span>
              </h3>
              <p className="text-beige mt-2">Luxury dining by the lake</p>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-amber hover:text-white transition">
                <i className="fab fa-instagram text-2xl"></i>
              </a>
              <a href="#" className="text-amber hover:text-white transition">
                <i className="fab fa-facebook text-2xl"></i>
              </a>
              <a href="#" className="text-amber hover:text-white transition">
                <i className="fab fa-tripadvisor text-2xl"></i>
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-beige">
            <p>&copy; {new Date().getFullYear()} Waterfront Hyderabad. All rights reserved. | <a href="#" className="text-amber hover:underline">Privacy Policy</a></p>
          </div>
        </div>
      </footer>

      {/* Mobile Reserve Button */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <button className="btn-primary flex items-center">
          <i className="fas fa-calendar-alt mr-2"></i> Reserve
        </button>
      </div>
    </div>
  );
}

export default App;
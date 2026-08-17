# 🌸 GlowCare – E-Commerce Skincare Application

A responsive and user-friendly **E-Commerce Skincare Web Application** developed using **HTML5, CSS3, JavaScript (ES6), and Firebase**.

GlowCare allows users to explore skincare products, view product details, create an account, log in securely, manage their shopping cart, and proceed through a simulated checkout process.

---

## 📌 Project Overview

**GlowCare** is a modern skincare e-commerce website designed to provide customers with a simple and attractive online shopping experience.

The application includes a responsive user interface, product browsing, product details, shopping cart management, user authentication, checkout simulation, and an administrative interface.

The project was developed as a practical web development project to demonstrate frontend development, JavaScript functionality, Firebase Authentication, responsive design, debugging, and web deployment.

---

## 🎯 Project Objectives

The main objectives of GlowCare are:

* To develop a professional skincare e-commerce website.
* To provide users with an easy-to-use shopping interface.
* To implement user registration and login.
* To dynamically display skincare products.
* To implement shopping cart functionality.
* To provide a product details page.
* To implement a checkout simulation.
* To create a responsive design for desktop, tablet, and mobile devices.
* To deploy the application using Firebase Hosting.
* To provide an administrative interface for product management.

---

## ✨ Features

### 🏠 Home Page

* Professional landing page
* GlowCare branding
* Navigation menu
* Featured products
* Promotional sections
* Product categories
* Responsive layout
* Footer with useful links

### 🧴 Product Catalog

The application contains a large collection of skincare products.

Each product contains:

* Product ID
* Product name
* Price
* Product image
* Product information

Product categories can include:

* Cleansers
* Serums
* Moisturizers
* Sunscreens
* Face masks
* Toners
* Face oils
* Scrubs
* Lip care
* Body care

---

### 🔎 Product Details

Users can select a product to view additional information.

The product details section can display:

* Product image
* Product name
* Price
* Description
* Benefits
* Product category
* Add to Cart button

---

### 🛒 Shopping Cart

Users can manage their selected products through the cart.

Features include:

* Add products to cart
* Remove products
* Increase quantity
* Decrease quantity
* Calculate subtotal
* Calculate total amount
* Display selected products
* Maintain cart data using browser storage

---

### 💳 Checkout Simulation

The checkout page provides a simulated purchasing experience.

Users can enter:

* Full name
* Email
* Phone number
* Delivery address
* City
* Postal code
* Payment method

After submitting the checkout form, the application displays an order confirmation.

> Note: The current implementation is a checkout simulation and does not process real payments.

---

### 🔐 User Registration

Users can create an account using:

* Email
* Password

Firebase Authentication is used to manage user registration securely.

---

### 🔑 User Login

Registered users can log in using:

* Email
* Password

Firebase Authentication verifies the credentials.

---

### 🚪 Logout

Authenticated users can log out of their account using the logout functionality.

---

### 👨‍💼 Admin Dashboard

The project includes an administrative interface for product management.

The admin interface can be extended to support:

* Add product
* Edit product
* Delete product
* Update product price
* Manage product information
* Manage inventory

For a production application, administrator access should be protected using authentication and authorization rules.

---

### 📄 About Page

The About page provides information about:

* GlowCare
* Project purpose
* Brand vision
* Mission
* Skincare focus

---

### 📞 Contact Page

The Contact page provides a way for users to communicate with the application/company.

It can contain:

* Name
* Email
* Message
* Contact information

---

### 📱 Responsive Design

The application is designed to work across different screen sizes:

* Desktop
* Laptop
* Tablet
* Mobile

Responsive layouts are implemented using:

* CSS Flexbox
* CSS Grid
* Media Queries
* Responsive sizing

---

## 🛠️ Technologies Used

### Frontend

#### HTML5

Used to create the structure of the application.

HTML is used for:

* Navigation
* Forms
* Product cards
* Product pages
* Cart
* Checkout
* Footer
* Page layouts

#### CSS3

Used for:

* UI design
* Colors
* Typography
* Layout
* Animations
* Hover effects
* Buttons
* Cards
* Responsive design

#### JavaScript ES6

JavaScript is used to provide dynamic functionality.

It handles:

* Product rendering
* Product selection
* Shopping cart
* Quantity management
* Price calculation
* Form handling
* Local Storage
* User interactions
* Firebase Authentication

---

## ☁️ Firebase Services

### Firebase Authentication

Firebase Authentication is used for:

* User registration
* User login
* Authentication state
* User account management
* Logout

The application uses **Email/Password Authentication**.

### Firebase Hosting

Firebase Hosting is used to deploy the web application online.

The deployed application can be accessed through:

**GlowCare:**
https://glowcare-23.web.app/

---

## 🧰 Development Tools

### Visual Studio Code

Used as the primary development environment for:

* Writing HTML
* Writing CSS
* Writing JavaScript
* Managing project files
* Debugging
* Running the application locally

### Firebase Console

Used for:

* Creating the Firebase project
* Configuring Authentication
* Managing users
* Configuring the web application
* Managing Firebase Hosting

### Chrome Developer Tools

Used for debugging:

* JavaScript errors
* HTML/CSS issues
* Firebase errors
* Network requests
* Console messages
* Responsive layouts

### Git

Used for source-code version control and project management.

---

## 📂 Project Structure

```text
E-Commerce Skincare Application/
│
├── index.html
├── about.html
├── contact.html
├── login.html
├── register.html
├── product.html
├── cart.html
├── checkout.html
├── admin.html
│
├── style.css
├── script.js
├── product.js
│
├── images/
│   ├── cleanser.jpg
│   ├── moisturizer.jpg
│   ├── serum.jpg
│   ├── sunscreen.jpg
│   └── ...
│
├── firebase.json
├── .firebaserc
├── .gitignore
└── README.md
```

---

## 🔄 Application Workflow

```text
              ┌─────────────────┐
              │    User visits  │
              │   GlowCare      │
              └────────┬────────┘
                       │
                       ▼
              ┌─────────────────┐
              │   Home Page     │
              └────────┬────────┘
                       │
                       ▼
              ┌─────────────────┐
              │ Browse Products │
              └────────┬────────┘
                       │
             ┌─────────┴─────────┐
             ▼                   ▼
       Product Details       Login/Register
             │                   │
             └─────────┬─────────┘
                       ▼
                 ┌───────────┐
                 │ Add Cart  │
                 └─────┬─────┘
                       │
                       ▼
                 ┌───────────┐
                 │   Cart    │
                 └─────┬─────┘
                       │
                       ▼
                 ┌───────────┐
                 │ Checkout  │
                 └─────┬─────┘
                       │
                       ▼
                Order Confirmation
```

---

## 🧠 Data Management

The current application uses JavaScript data structures for the product catalog.

Example:

```javascript
const products = [
    {
        id: 101,
        name: "Foam Cleanser",
        price: 499,
        image: "images/cleanser.jpg"
    }
];
```

Cart information is managed on the client side using JavaScript and browser Local Storage.

For a production-level implementation, product and order data can be migrated to **Firebase Firestore** or another database.

---

## 🔐 Authentication Flow

```text
User
  │
  ▼
Register
  │
  ▼
Firebase Authentication
  │
  ▼
Account Created
  │
  ▼
Login
  │
  ▼
Firebase verifies credentials
  │
  ▼
Authenticated User
```

Firebase handles password storage and authentication rather than storing raw passwords inside the application.

---

## 🛒 Shopping Cart Flow

```text
Select Product
      ↓
Add to Cart
      ↓
JavaScript
      ↓
Local Storage
      ↓
Cart Page
      ↓
Update Quantity
      ↓
Calculate Total
      ↓
Checkout
```

---

## 🎨 UI/UX Design

The website focuses on a clean and modern skincare theme.

The design includes:

* Professional color palette
* Product cards
* Rounded UI components
* Hover effects
* Responsive navigation
* Clear call-to-action buttons
* Consistent typography
* Mobile-friendly layouts

---

## 🧪 Testing

The application was tested using:

* Chrome browser
* VS Code Live Server
* Firebase Hosting
* Chrome Developer Tools

Testing included:

### Functional Testing

* Registration
* Login
* Product selection
* Add to cart
* Remove from cart
* Quantity update
* Checkout form

### UI Testing

* Desktop layout
* Tablet layout
* Mobile layout
* Navigation
* Buttons
* Forms

### Error Testing

* Invalid email
* Empty fields
* Invalid login credentials
* Firebase authentication errors
* Missing product images
* JavaScript errors

---

## 🚧 Challenges Faced

### 1. Firebase Authentication Configuration

Initially, Firebase Authentication configuration caused errors during registration and login.

**Solution:**

I checked the Firebase project configuration, Authentication settings, SDK configuration, and browser console errors.

---

### 2. JavaScript Errors

Some features did not work because of incorrect element IDs or JavaScript errors.

**Solution:**

I used Chrome Developer Tools and the Console to identify the exact error and corrected the JavaScript/HTML connection.

---

### 3. Responsive Design

Different screen sizes caused layout issues.

**Solution:**

I used CSS Flexbox, Grid, and media queries to make the layout responsive.

---

### 4. Firebase Deployment

The application had to be configured correctly before deployment.

**Solution:**

I configured Firebase Hosting using the Firebase CLI and deployed the application to Firebase Hosting.

---

## 🚀 Installation and Setup

### Step 1: Clone the Project

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
```

### Step 2: Open the Project

Open the project folder in Visual Studio Code.

### Step 3: Run Locally

Use the **Live Server** extension in VS Code.

Right-click:

```text
index.html
```

and select:

```text
Open with Live Server
```

The application will open in the browser.

---

## 🔥 Firebase Configuration

To use Firebase Authentication:

1. Create a Firebase project.
2. Add a Web Application.
3. Enable Authentication.
4. Enable Email/Password sign-in.
5. Add the Firebase configuration to the application.
6. Test registration and login.
7. Deploy using Firebase Hosting.

---

## 🌐 Deployment

The application is deployed using Firebase Hosting.

Deployment command:

```bash
firebase deploy
```

Live application:

**https://glowcare-23.web.app/**

---

## 🔮 Future Enhancements

The following features can be added in future versions:

* 🔍 Advanced product search
* 🏷️ Product category filtering
* ❤️ Wishlist
* ⭐ Product reviews and ratings
* 📦 Order history
* 🚚 Order tracking
* 💳 Real payment gateway
* 🧾 Invoice generation
* 🎟️ Discount coupons
* 📊 Admin analytics dashboard
* 📦 Inventory management
* 🔔 Order notifications
* 📧 Email verification
* 🔑 Forgot password
* 🗄️ Firebase Firestore database
* 🤖 AI-based skincare recommendations
* 🌙 Dark mode
* 🌍 Multi-language support

---

## 🔒 Security Considerations

For a production version, the application should include:

* Firebase Security Rules
* Role-based admin authentication
* Firestore access control
* Input validation
* Secure payment processing
* HTTPS
* Protected admin routes
* Server-side validation
* Secure API handling

The current project is primarily a frontend and Firebase Authentication demonstration.

---

## 📈 Learning Outcomes

Through this project, I gained practical experience in:

* HTML5
* CSS3
* JavaScript ES6
* DOM manipulation
* Event handling
* Local Storage
* Responsive Web Design
* Firebase Authentication
* Firebase Hosting
* Web application deployment
* Debugging
* Git and version control
* E-commerce application architecture

---

## 👩‍💻 Developer

**Iswarya S**

BE Computer Science and Engineering
2026 Graduate

---

## 📜 License

This project was developed for educational and portfolio purposes.

---

## ⭐ Project Highlights

* Responsive skincare e-commerce website
* 200+ skincare products
* Firebase Authentication
* Shopping cart
* Checkout simulation
* Product details
* Admin interface
* Responsive UI
* Firebase Hosting
* Modern HTML/CSS/JavaScript implementation

---

### 🌸 GlowCare

**Beauty • Care • Confidence**

A modern skincare shopping experience designed with simplicity and usability in mind.

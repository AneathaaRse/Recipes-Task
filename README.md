Recipes API Documentation 

The Recipes API is a RESTful service designed to manage a collection of recipes efficiently. Built using Node.js, Express, and MongoDB, this API allows users to perform all CRUD (Create, Read, Update, Delete) operations on recipes stored in the database. Ideal for integration with recipe or cooking applications, it provides flexible endpoints to create, retrieve, update, and delete recipe entries with ease.
__________________________________________________________________________________________________________

Technologies Used :

1. Node.js: As the server environment for handling backend logic.
2. Express: A web framework used to build the API structure and routes.
3. MongoDB: The NoSQL database used to store and manage recipe data.
4. Mongoose: An Object Data Modeling (ODM) library for MongoDB, allowing easier data interaction.
__________________________________________________________________________________________________________

Features :

1. Add a New Recipe: Allows users to add recipes by providing key details such as name, ingredients, and instructions.
2. Get All Recipes: Retrieves all recipes stored in the database.
3. Get Recipe by ID: Fetches a single recipe’s details using its unique identifier.
4. Update Recipe by ID: Modifies an existing recipe’s details, based on ID.
5. Delete Recipe by ID: Deletes a recipe from the database using its unique ID.

__________________________________________________________________________________________________________

Testing with Postman :

You can test each endpoint using Postman by setting up requests for each method. Use JSON format for POST and PUT requests to add or update recipe data.


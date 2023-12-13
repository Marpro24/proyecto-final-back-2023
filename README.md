# RESTful API with MERN Stack

A robust and scalable MERN (MongoDB, Express.js, React, Node.js) stack using a TypeScript template for building RESTful APIs with Express.js. This template includes testing with Jest, linting with ESLint, and pre-commit hooks with Husky, ensuring a streamlined development process. It leverages MongoDB through Mongoose for efficient data storage and retrieval.

## Key Features

- TypeScript-based Express.js server with comprehensive tooling.
- Jest for unit testing and coverage analysis.
- MongoDB integration using Mongoose for data persistence.
- ESLint and Prettier for code quality assurance.
- Husky and lint-staged for pre-commit hooks and staged file linting.

## Overview

This API allows you to manage paintings, including retrieving painting details, deleting items, and handling basic endpoints.

## Endpoints

1. **Get Painting Details**

   - **Endpoint:** `GET /paintings/{id}`
   - **Description:** Retrieve details of a specific painting.
   - **Request Example:** `GET http://localhost:5000/paintings/6564d0f8ab6e912be5400b17`

2. **Ping**

   - **Endpoint:** `GET /ping`
   - **Description:** Ping the server to check if it's responsive.
   - **Request Example:** `GET http://localhost:5000/ping`

3. **Endpoint Not Found**

   - **Endpoint:** `GET /nonexistent-endpoint`
   - **Description:** Simulate an endpoint that does not exist.
   - **Request Example:** `GET http://localhost:5000/nonexistent-endpoint`

4. **Delete Item**

   - **Endpoint:** `DELETE /paintings/{id}`
   - **Description:** Delete a painting item.
   - **Request Example:** `DELETE http://localhost:5000/paintings/6564d129ab6e912be5400b1f`

5. **PATCH**
   - **Endpoint:** `PATCH /paintings/{id}`
   - **Description:** Update a resource partially.
   - **Request Example:** `PATCH /painting/6579e2015204372593891d63`

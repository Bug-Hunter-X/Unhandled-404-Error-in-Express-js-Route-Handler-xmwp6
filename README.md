# Express.js 404 Error Handling Bug

This repository demonstrates a common error in Express.js route handlers:  inadequate error handling for 404 (Not Found) errors.  The bug results in a bare 404 response, providing no information to the client about why the resource was not found.

## Bug Description

The `bug.js` file contains an Express.js route that fetches a user by ID.  If the user is not found, it sends a 404 status code without any message.  This makes debugging and providing user feedback difficult.

## Solution

The `bugSolution.js` file shows how to improve the error handling by including a descriptive message in the 404 response.  This provides valuable information to both the client and developers for debugging purposes.

## How to Reproduce

1. Clone this repository.
2. Navigate to the directory.
3. Run `node bug.js`.
4. Send a GET request to `/users/{invalid_id}` (replace `{invalid_id}` with an ID that doesn't exist in the `users` array).  Observe the response.
5. Compare this to the improved error handling in `bugSolution.js`
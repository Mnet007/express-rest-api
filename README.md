# Simple Express REST API

## Setup

1. Clone the repo
2. Run `npm install`
3. Start server: `node server.js`
4. API is available at `http://localhost:3000`

## Endpoints

- `GET /items` - Get all items
- `GET /items/:id` - Get item by ID
- `POST /items` - Add new item
- `PUT /items/:id` - Update item
- `DELETE /items/:id` - Delete item

## Sample Data
```json
[
  { "id": 1, "name": "Item One", "description": "This is the first item" },
  { "id": 2, "name": "Item Two", "description": "This is the second item" }
]

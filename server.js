// server.js
const express = require("express");
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// In-memory data store
let items = [
  { id: 1, name: "Item One", description: "This is the first item" },
  { id: 2, name: "Item Two", description: "This is the second item" },
];

// GET all items
app.get("/items", (req, res) => {
  res.json(items);
});

// GET item by ID
app.get("/items/:id", (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).json({ error: "Item not found" });
  res.json(item);
});

// POST new item
app.post("/items", (req, res) => {
  const { name, description } = req.body;
  if (!name || !description) return res.status(400).json({ error: "Name and description are required" });

  const newItem = {
    id: items.length + 1,
    name,
    description,
  };

  items.push(newItem);
  res.status(201).json(newItem);
});

// PUT update item by ID
app.put("/items/:id", (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).json({ error: "Item not found" });

  const { name, description } = req.body;
  if (!name || !description) return res.status(400).json({ error: "Name and description are required" });

  item.name = name;
  item.description = description;

  res.json(item);
});

// DELETE item by ID
app.delete("/items/:id", (req, res) => {
  const index = items.findIndex(i => i.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: "Item not found" });

  items.splice(index, 1);
  res.json({ message: "Item deleted successfully" });
});


// Invalid route handler
app.use((req, res, next) => {
  res.status(404).json({ error: "Route not found" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

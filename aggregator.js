const express = require("express");
const axios = require("axios");
const app = express();
const PORT = 3006;
app.get("/apis", async (req, res) => {
  let urls = [];
  if (Array.isArray(req.query.url)) {
    urls = req.query.url;
  } else if (req.query.url) {
    urls = [req.query.url];
  }
  try {
    let apim = [];
    for (const url of urls) {
      const response = await axios.get(url);
      apim = apim.concat(response.data);
    }
    res.json(uniqueSorted);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch urls" });
  }
});
app.listen(PORT, () => {
  console.log(`Aggregator running at http://localhost:${PORT}`);
});

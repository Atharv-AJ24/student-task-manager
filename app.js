const express = require('express');
const client = require('prom-client');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable default Node.js metrics
client.collectDefaultMetrics();

// Create HTTP request counter
const httpRequestCounter = new client.Counter({
    name: 'task_manager_http_requests_total',
    help: 'Total HTTP requests received'
});

// Count every HTTP request
app.use((req, res, next) => {
    httpRequestCounter.inc();
    next();
});

// Serve the existing Student Task Manager files
app.use(express.static(__dirname));

// Prometheus metrics endpoint
app.get('/metrics', async (req, res) => {
    res.set('Content-Type', client.register.contentType);
    res.end(await client.register.metrics());
});

app.listen(PORT, () => {
    console.log(`Student Task Manager running on port ${PORT}`);
});

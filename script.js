document.getElementById('generate').addEventListener('click', async () => {
    const prompt = document.getElementById('prompt').value;
    if (!prompt) {
        alert('Please enter a prompt.');
        return;
    }

    // Simulate an API response
    const mockData = {
        problem: "Example Problem",
        solution: "Example Solution",
        uniqueValueProposition: "Example Unique Value Proposition",
        unfairAdvantage: "Example Unfair Advantage",
        customerSegments: "Example Customer Segments",
        existingAlternatives: "Example Existing Alternatives",
        keyMetrics: "Example Key Metrics",
        channels: "Example Channels",
        costStructure: "Example Cost Structure",
        revenueStreams: "Example Revenue Streams"
    };

    populateCanvas(mockData);
});

function populateCanvas(data) {
    document.getElementById('problem').innerText = data.problem || 'N/A';
    document.getElementById('solution').innerText = data.solution || 'N/A';
    document.getElementById('unique-value-proposition').innerText = data.uniqueValueProposition || 'N/A';
    document.getElementById('unfair-advantage').innerText = data.unfairAdvantage || 'N/A';
    document.getElementById('customer-segments').innerText = data.customerSegments || 'N/A';
    document.getElementById('existing-alternatives').innerText = data.existingAlternatives || 'N/A';
    document.getElementById('key-metrics').innerText = data.keyMetrics || 'N/A';
    document.getElementById('channels').innerText = data.channels || 'N/A';
    document.getElementById('cost-structure').innerText = data.costStructure || 'N/A';
    document.getElementById('revenue-streams').innerText = data.revenueStreams || 'N/A';
} 
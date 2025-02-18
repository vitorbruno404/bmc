document.getElementById('generate').addEventListener('click', async () => {
    const prompt = document.getElementById('prompt').value;
    if (!prompt) {
        alert('Please enter a prompt.');
        return;
    }

    // Simulate an API response
    const mockData = {
        keyPartners: "Example Key Partners",
        keyActivities: "Example Key Activities",
        keyResources: "Example Key Resources",
        valuePropositions: "Example Value Propositions",
        customerRelationships: "Example Customer Relationships",
        customerSegments: "Example Customer Segments",
        channels: "Example Channels",
        costStructure: "Example Cost Structure",
        revenueStreams: "Example Revenue Streams"
    };

    populateCanvas(mockData);
});

function populateCanvas(data) {
    document.getElementById('key-partners').innerText = data.keyPartners || 'N/A';
    document.getElementById('key-activities').innerText = data.keyActivities || 'N/A';
    document.getElementById('key-resources').innerText = data.keyResources || 'N/A';
    document.getElementById('value-propositions').innerText = data.valuePropositions || 'N/A';
    document.getElementById('customer-relationships').innerText = data.customerRelationships || 'N/A';
    document.getElementById('customer-segments').innerText = data.customerSegments || 'N/A';
    document.getElementById('channels').innerText = data.channels || 'N/A';
    document.getElementById('cost-structure').innerText = data.costStructure || 'N/A';
    document.getElementById('revenue-streams').innerText = data.revenueStreams || 'N/A';
} 
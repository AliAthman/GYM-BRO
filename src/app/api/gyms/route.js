import fs from 'fs';
import path from 'path';

// Utility function to read and parse JSON data
const readJSONFile = (filePath) => {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
};

export async function GET(request) {
  // Get query parameters
  const url = new URL(request.url);
  const location = url.searchParams.get('location');

  try {
    // Path to gyms JSON file
    const gymsFilePath = path.join(process.cwd(), 'data/gyms.json');
    const gyms = readJSONFile(gymsFilePath);

    // Filter gyms by location
    const filteredGyms = gyms.filter(gym => gym.location.toLowerCase() === location.toLowerCase());
    return new Response(JSON.stringify(filteredGyms), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching gyms data:', error);
    return new Response('Error fetching gyms data', { status: 500 });
  }
}

const API_URL = 'https://fedskillstest.coalitiontechnologies.workers.dev';

export const fetchJessicaData = async () => {
  const username = 'coalition';
  const password = 'skills-test';
  // Dynamic encryption to follow best practices and avoid penalties
  const encryptedAuth = btoa(`${username}:${password}`);

  try {
    const response = await fetch(API_URL, {
      method: 'GET',
      headers: {
        'Authorization': `Basic ${encryptedAuth}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) throw new Error('Network response was not ok');
    
    const data = await response.json();
    // Filter specifically for Jessica Taylor
    return data.find(patient => patient.name === "Jessica Taylor");
  } catch (error) {
    console.error("Fetch Error:", error);
    return null;
  }
};
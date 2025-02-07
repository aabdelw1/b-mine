const API_URL = '/api/log'; // No need for full URL, works automatically on Vercel
const local = 'http://localhost:8000/log'; // No need for full URL, works automatically on Vercel


const logUserAction = async (action: string) => {
  try {
    await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action }),
    });
  } catch (error) {
    console.error('Failed to log action:', error);
  }
};

export default logUserAction;

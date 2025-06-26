export async function login(email, password) {
  const API_URL = import.meta.env.VITE_API_URL;
  const response = await fetch(`${API_URL}/api/users/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error('Failed to authenticate');
  }

  return response.json();
}

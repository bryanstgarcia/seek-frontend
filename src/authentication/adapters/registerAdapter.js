export function registerAdapter(apiResponse) {
  if (!apiResponse.success || !apiResponse.data) {
    throw new Error(apiResponse.message || 'Registration failed');
  }
  return {
    id: apiResponse.data.id,
    email: apiResponse.data.email,
  };
} 
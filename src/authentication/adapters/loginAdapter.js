export function loginAdapter(apiResponse) {
  return {
    token: apiResponse.token,
    userId: apiResponse.user_id,
  };
} 
export function deleteTaskAdapter(apiResponse) {
    if (!apiResponse.success) {
        throw new Error(apiResponse.message || "Failed to delete task");
    }
    return {
        success: apiResponse.success,
        message: apiResponse.message,
    };
} 
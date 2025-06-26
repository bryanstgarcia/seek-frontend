export function updateTaskAdapter(apiResponse) {
    if (!apiResponse.success || !apiResponse.data) {
        throw new Error(apiResponse.message || "Failed to update task");
    }
    const task = apiResponse.data;
    return {
        id: task.id,
        title: task.title,
        description: task.description,
        status: task.status,
        tags: Array.isArray(task.tags)
            ? task.tags.map(tag => ({ name: tag }))
            : [],
        dueDate: task.due_date?.$date || null,
        createdAt: task.created_at?.$date || null,
        updatedAt: task.updated_at?.$date || null,
        userId: task.user_id,
    };
} 
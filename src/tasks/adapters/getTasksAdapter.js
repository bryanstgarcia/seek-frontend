export function getTasksAdapter(apiResponse) {
    if (!apiResponse.success || !Array.isArray(apiResponse.data)) {
        throw new Error(apiResponse.message || "Failed to fetch tasks");
    }
    return apiResponse.data.map((task) => ({
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
    }));
}

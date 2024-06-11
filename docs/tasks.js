module.exports = {
	paths: {
		'/create': {
			post: {
				tags: {
					Tasks: 'Create a user',
				},
				description: 'Create Tasks',
				operationId: 'createTask',
				parameters: [],
				requestBody: {
					content: {
						'application/json': {
							schema: {
								$ref: '#/components/schemas/Task',
							},
						},
					},
				},
				responses: {
					201: {
						description: 'Task created successfully',
					},
					500: {
						description: 'Server error',
					},
				},
			},
		},
		'/id/{_id}': {
			put: {
				tags: {
					Tasks: 'tasks',
				},
				description: 'Update Task',
				operationId: 'updateTask',
				parameters: [
					{
						name: '_id',
						in: 'path',
						schema: {
							$ref: '#/components/schemas/_id',
						},
						description: 'Id of User to be updated',
					},
				],
				requestBody: {
					content: {
						'application/json': {
							schema: { $ref: '#/components/schemas/Task' },
						},
					},
				},
				responses: {
					200: { description: 'Task updated successfully' },
					500: { description: 'Server error' },
				},
			},
		},
	},
}
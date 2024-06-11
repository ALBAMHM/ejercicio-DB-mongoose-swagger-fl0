module.exports = {
	components: {
		schemas: {
			_id: {
				type: 'objectId',
				description: 'task identification number',
				example: '6201064b0028de7866e2b2c4',
			},
			Task: {
				type: 'object',
				properties: {
					_id: {
						type: 'objectId',
						description: 'task identification number',
						example: '6201064b0028de7866e2b2c4',
					},
					title: {
						type: 'string',
						description: 'title to register',
						example: 'Comprar manzanas',
					},
					completed: {
						type: 'boolean',
						description: 'state',
						example: 'false',
					},
				},
			},
		},
	},
}
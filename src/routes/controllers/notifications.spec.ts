import request from 'supertest'
import { app } from '../../app'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { createAndAuthenticateUser } from '../../utils/tests/create-and-authenticate'

describe('Notifications (e2e)', () => {
	beforeAll(async () => {
		await app.ready()
	})

	afterAll(async () => {
		await app.close()
	})

	it('should be able to get user notifications', async () => {
		const { token } = await createAndAuthenticateUser(app)

		const profileResponse = await request(app.server)
			.get('/notifications')
			.set('Authorization', `${token}`)
			.send()

		expect(profileResponse.statusCode).toEqual(200)
	})
})
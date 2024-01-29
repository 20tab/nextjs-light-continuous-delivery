import { expect } from '@jest/globals'
import { pactWith } from 'jest-pact/dist/v3'

import { HTTPMethod } from '../utils'
import pactConfig from '../pact.config'

pactWith(pactConfig, interaction => {
  const interactionName = 'A health check request'
  interaction(interactionName, ({ provider, execute }) => {
    beforeEach(() => {
      provider
        .uponReceiving(interactionName)
        .withRequest({
          method: HTTPMethod.GET,
          path: '/api/health/'
        })
        .willRespondWith({
          contentType: 'application/json; charset=utf-8',
          status: 204,
          body: ''
        })
    })
    execute(interactionName, async mockServer => {
      const { body, status } = await fetch(`${mockServer.url}/api/health/`)
      expect(status).toBe(204)
      expect(body).toEqual('')
    })
  })
})

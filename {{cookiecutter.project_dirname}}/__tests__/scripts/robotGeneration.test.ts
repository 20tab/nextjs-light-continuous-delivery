/**
 * @jest-environment node
 */

import { expect } from "@jest/globals"

const generateRobotsTxt = require('../../generate-robot-txt')

const crawlableRobotsTxt = `User-agent: *\nDisallow: /admin\nAllow: /`;
const uncrawlableRobotsTxt = `User-agent: *\nDisallow: /`;

test('robot.txt is valid for dev environment', () => {
    process.env.REACT_ENVIRONMENT = 'development'
    expect(generateRobotsTxt()).toBe(uncrawlableRobotsTxt)
})

test('robot.txt is valid for staging environment', () => {
    process.env.REACT_ENVIRONMENT = 'staging'
    expect(generateRobotsTxt()).toBe(uncrawlableRobotsTxt)
})

test('robot.txt is valid for production environment', () => {
    process.env.REACT_ENVIRONMENT = 'production'
    expect(generateRobotsTxt()).toBe(crawlableRobotsTxt)
})
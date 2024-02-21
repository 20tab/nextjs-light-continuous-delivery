const generateRobotsTxt = require('./generate-robot-txt')

generateRobotsTxt()

console.log(
    `Generated a ${
      process.env.REACT_ENVIRONMENT === "production" ? "crawlable" : "non-crawlable"
    } public/robots.txt`
);
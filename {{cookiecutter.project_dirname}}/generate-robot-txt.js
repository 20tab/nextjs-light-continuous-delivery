const fs = require("fs");
 
const crawlableRobotsTxt = `User-agent: *\nDisallow: /admin\nAllow: /`;
 
const uncrawlableRobotsTxt = `User-agent: *\nDisallow: /`;
 
function generateRobotsTxt() {
  // Create a non-crawlable robots.txt in non-production environments
  const robotsTxt =
    process.env.REACT_ENVIRONMENT === "production"
      ? crawlableRobotsTxt
      : uncrawlableRobotsTxt;
 
  // Create robots.txt file
  fs.writeFileSync("public/robots.txt", robotsTxt);
 
  console.log(
    `Generated a ${
      process.env.REACT_ENVIRONMENT === "production" ? "crawlable" : "non-crawlable"
    } public/robots.txt`
  );
}
 
module.exports = generateRobotsTxt;
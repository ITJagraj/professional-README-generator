// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== "NONE") {
    return `![License](https://img.shields.io/badge/License-${license}-yellow.svg)`
  }
  return "";
 }


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license !== "NONE") {
    return `* [License](#license)`
  }
  return "";
 }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== "NONE") {
    return `## License
    
    This project is licensed under the ${license} license`
  }
  return "";
 }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Table of contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseLink(data.license)}
  * [Contribution](#contribution)
  * [Tests](#tests)
  * [Contact Information](#contact-information)

  ## Description
  ${data.installation}

  ## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}
## Contribution
${data.contribution}

## Tests
${data.tests}

## Contact-Information
[Github Profile](https://github.com/${data.username})
${data.email}


`;
}

module.exports = generateMarkdown;
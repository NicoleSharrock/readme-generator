// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log(license);
  if (license === 'MIT') {
    return "https://img.shields.io/badge/license-MIT-blue";
  } else if (license === "ISC") {
    return "https://img.shields.io/badge/license-ISC-orange";
  } else if (license === 'Apache License 2.0') {
    return "https://img.shields.io/badge/license-Apache%20License%202.0-purple"
  }
};


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}
  
  ## Description:
  - ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribution](#contribution)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation:
  - To install, please run the following command on your terminal:
    ${data.installation}

  ## Usage:
  - ${data.usage}

  ## License:
  - ${data.license}

  ## Contribution:
  - ${data.contributing}

  ## Tests:
  - ${data.test}
  
  ## Questions:
  - Click on my GitHub (https://github.com/${data.github}).
  - If you have any additional questions, I can be reached via <${data.email}>
`;
}

module.exports = generateMarkdown;

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

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
  - Click on my GitHub [link](https://github.com/${data.github}).
  - If you have any additional questions, I can be reached via <${data.email}>
`;
}

module.exports = generateMarkdown;

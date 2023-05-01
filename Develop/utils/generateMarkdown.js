function renderLicenseBadge(license) {
  var badges = {
    MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    Mozilla: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
    Boost: '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
    GNULGPLv3: '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)',
    Apache: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    None: '',
  }
  return badges[license];
}

// function to generate markdown for README
function generateMarkdown(answers) {
  return ` # ${answers.title}

${renderLicenseBadge(answers.license)}

## Description
${answers.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
The following necessary dependencies must be installed to run the application properly: ${answers.installInstructions}

## Usage
${answers.usageInfo}

## Contributing
${answers.contributeGuide}

## Tests
${answers.testInstruct}

## License
This project is subjected to the protections of the ${answers.license} license. Click on the license badge at the top of the page for more details about the license specifications.

## Questions
[GitHub Profile](https://github.com/${answers.githubUsername})

[GitHub Profile](https://linkedin.com/${answers.linkedInUsername})

[Email](mailto:${answers.email})

Feel free to email me with any questions about how to use this application.
`;
}

module.exports = generateMarkdown;
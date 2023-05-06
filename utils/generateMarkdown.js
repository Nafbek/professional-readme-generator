// Returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '![License: MIT license](https://img.shields.io/badge/License-MIT-yellow.svg)'
  } else if (license === 'GNU GPLv2') {
    return '![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)'
  } else if (license === 'GNU GPLv3') {
    return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)'
  } else if (license === 'Apache License 2.0') {
    return '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)'
  } else if (license === 'BSD 2-Clause') {
    return '![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)'
  } else if (license === 'ISC (ISC)') {
    return '![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)'
  } else {
    return ''
  }

}

//A function that returns the license link
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return '[MIT license](https://opensource.org/licenses/MIT)'
  } else if (license === 'GNU GPLv2') {
    return '[GNU GPLv2 License](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'
  } else if (license === 'GNU GPLv3') {
    return '[GNU GPLv3 License](https://www.gnu.org/licenses/gpl-3.0)'
  } else if (license === 'Apache License 2.0') {
    return '[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)'
  } else if (license === 'BSD 2-Clause') {
    return '[BSD 2-Clause License](https://opensource.org/licenses/BSD-2-Clause)'
  } else if (license === 'ISC (ISC)') {
    return '[ISC (ISC) License](https://opensource.org/licenses/ISC)'
  } else {
    return ''
  }
}

//A function that returns the license section of README
function renderLicenseSection(license) {
  return ` ## License
  This application is covered under the terms of the ${license}.`
}

//Generate a markdown for README
function generateMarkdown(data) {

  const licenseSection = renderLicenseSection(data.license)
  const licenseBadge = renderLicenseBadge(data.license)
  const licenseLink = renderLicenseLink(data.license)

  //Return a data to write the file
  return `${licenseBadge}
  
  # ${data.title} 

  ## Description
  ${data.description} 

  ## Table of COntent
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Credit](#Credit)
  - [License](#License)
  - [Contributing](#Contributing)
  - [Tests](#Tests)
  - [Questions](#Questions)

  ## Installation
  ${data.installation} 

  ## Usage
  ${data.usage}
  You can also follow the syntax below to view a walkthrough video that demonsatrates the functionality of the application.
  ![demo](https://...............)

  ## Credit
  ${data.credit}
 
  ${licenseSection}
  Follow this link ${licenseLink} for additional information on the license coverage.

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  If you have any questions about this project, please use the following contact address.

  ### GitHub Username
  ${`https://github.com/`}${data.github}

  ### Email
  ${data.email}
 `;
}


module.exports = generateMarkdown;

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {

  if (license === 'MIT license') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`
  } else if (license === 'GNU GPLv2') {
    return `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)]`
  } else if (license === 'GNU GPLv3') {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`
  } else if (license === 'Apache License 2.0') {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`
  } else if (license === 'BSD 2-Clause License') {
    return `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)]`
  } else if (license === 'ISC License (ISC)') {
    return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]`
  } else {
    return `https://img.shields.io/badge/License--.svg`
  }

}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {

  if (license === 'MIT license') {
    return `[Follow the link for additional information on the MIT license coverage](https://opensource.org/licenses/MIT)`
  } else if (license === 'GNU GPLv2') {
    return `[Follow the link for additional information on the GNU GPLv2 coverage](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
  } else if (license === 'GNU GPLv3') {
    return `[Follow the link for additional information on the GNU GPLv3 coverage](https://www.gnu.org/licenses/gpl-3.0)`
  } else if (license === 'Apache License 2.0') {
    return `[Follow the link for additional information on the Apache License 2.0 coverage](https://opensource.org/licenses/Apache-2.0)`
  } else if (license === 'BSD 2-Clause License') {
    return `[Follow the link for additional information on the BSD 2-Clause License coverage](https://opensource.org/licenses/BSD-2-Clause)`
  } else if (license === 'ISC License (ISC)') {
    return `[Follow the link for additional information on the ISC License (ISC) coverage](https://opensource.org/licenses/ISC)`
  } else {
    return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return ` ## License\n ${license}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  const licenseSection = renderLicenseSection(data.license)
  const licenseBadge = renderLicenseBadge(data.license)
  const licenseLink = renderLicenseLink(data.license)

  return `# ${data.title}
    ${licenseBadge}
  ## Description\n ${data.description} 
  ## Table of COntent\n ${data.tableOfContent} 
  ## Installation\n ${data.installation} 
  ## Usage\n${data.usage} 
  ## Credit\n${data.credit}
 
  ${licenseSection}
  ${licenseLink}

  ## Contributing\n ${data.contributing}
  ## Tests\n${data.tests}
  ## ${`Questions`}
  ### GitHub Username\n${`https://github.com/`}${data.github}
  ### Email\n${data.email}

 `;

}


module.exports = generateMarkdown;

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licensebadge = "";

  if(license != "None") {
    licensebadge = "You License Badge(https://shields.io/badge/license-" + license + "-green)";
  }

  return licensebadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink;

  switch(license) {
    case "GNU":
      licenseLink = "https://choosealicense.com/licenses/gpl-3.0/";
      break;
    case "ISC":
      licenseLink = "https://choosealicense.com/licenses/isc/";
      break;
    case "MIT":
      licenseLink = "https://choosealicense.com/licenses/mit/";
      break;
    case "Apache":
      licenseLink = "https://choosealicense.com/licenses/apache-2.0/";
      break;
    default:
      licenseLink = "";
      break;
  }
  
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSect = "";

  // if a license has been selected, create License section
  // with link to license information
  if (license != "None") {
    licenseSect +=  renderLicenseLink(license) + " is for this license\n";
  }

  return licenseSect;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Licensing:
  [![license](https://img.shields.io/badge/license-${data.licensing}-green)](https://shields.io)
  ## Table of Contents 
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Testing](#testing)
  - [Additional Info](#additional-info)
  ## Description:
  ${data.description}
  ## Installation:
  ${data.installation}
  ## Usage:
  ${data.usage}
  ## License:
  ${renderLicenseSection(data.licensing)}
  ${renderLicenseBadge(data.license)}

  ## Contribution:
  ${data.contribution}
  ## Testing:
  ${data.testing}
  ## Additional Info:
  - Github: [${data.github}](https://github.com/${data.github})
  - Email: ${data.email} `;
  
}

module.exports = generateMarkdown;

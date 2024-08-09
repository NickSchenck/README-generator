/*This file is a component piece of the whole app, and is exported for use in index.js*/
/*generateMarkdown is a function for structuring the markdown we'd like on our generated README file. We first pass a parameter of data
to generateMarkdown, then initialize the variable licenseLink as an empty string. We then enter a switch statement which checks if the
license property of data is truthy(checks if it exists), and if so we switch between 5 different cases which will associate a given
license by assigning it to the licenseLink variable. After exiting the switch statement, we enter into a return statement which returns
a string comprised of README markdown, with template literals for injecting user-provided information at certain sections.*/
function generateMarkdown(data) {
  let licenseLink = '';
  
  switch(data.license) {
    case 'MIT': licenseLink = 'https://opensource.org/licenses/MIT';
    break;

    case 'Apache': licenseLink = 'https://www.apache.org/licenses/LICENSE-2.0';
    break;

    case 'GPL': licenseLink = 'https://www.gnu.org/licenses/gpl-3.0.en.html';
    break;

    case 'BSD3': licenseLink = 'https://opensource.org/licenses/BSD-3-Clause';
    break;

    default: licenseLink = 'This app has no license.';
  };

  let licenseText = ``;
  if(data.license === `N/A`){
    licenseText = `This app has no applicable license.`;
  }else{
    licenseText = `This app is licensed under the [${data.license}](${licenseLink}) license.`;
  };

  return `[![Generic badge](https://img.shields.io/badge/license-${data.license}-<COLOR>.svg)](#license)
  # ${data.title}
  ## Description
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Tests](#tests)
  * [Contributing](#contributing)
  * [License](#license)
  * [Questions](#questions)
  ## Installation
  ${data.install}
  ## Tests
  ${data.tests}
  ## Usage
  ${data.usage}
  ## Contributing
  ${data.contribute}
  ## License
  ### ${licenseText}
  ## Questions
  * GitHub: [${data.github}](https://github.com/${data.github})
  * Email: 
  [${data.email}](mailto:${data.email})
  `;
};

/*Here we export this component as generateMarkdown. This will allow the functionality defined here to be used elsewhere in our app.*/
module.exports = generateMarkdown;
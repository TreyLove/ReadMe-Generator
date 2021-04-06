// TODO: Include packages needed for this application

const { clear } = require('console');
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
// prompt the user to input the information they want their readme to contain
const promptUser = async () => {
  return await inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Input a detailed description of your project',
    },
    {
      type: 'input',
      name: 'dependencies',
      message: 'Describe your dependencies',
    },
    {
      type: 'input',
      name: 'githubName',
      message: 'GitHub name',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Email',
    },
    {
      type: 'input',
      name: 'installInstructions',
      message: 'Input installation instructions for your project',
    },
    {
      type: 'input',
      name: 'usageInfo',
      message: 'Input the usage information for your project',
    },
    {
      type: 'input',
      name: 'contrib',
      message: 'Input your contribution guidelines',
    },
    {
      type: 'input',
      name: 'testInstructions',
      message: 'Input the test instructions for your project',
    },
    {
      type: 'list',
      message: 'choose license for your project ',
      name: 'license',
      choices: ['Apache', 'Academic', 'GNU', 'ISC', 'MIT', 'Mozilla', 'Open']
    },
  ])

}





// TODO: Create a function to initialize app
async function init() {
  const answers = await promptUser()
  console.log(answers)
  // template literal that will be written into the generated readme with references to the users response to the prompts

  const finalReadMe = `

# Project Title: ${answers.name}
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)

##### Table of Contents  
[Description](#Description)  
[Installation](#Installation) 
[Usage](#Usage)
[Dependencies](#Dependencies)
[Contributing](#Contributing)
[Tests](#Tests)
[Questions](#Questions) 

## Description

${answers.description}

### Installation

${answers.installInstructions}



## Usage 
${answers.usageInfo}

### Dependencies

${answers.dependencies}

### Contributing
${answers.contrib}


## Tests

${answers.testInstructions}

## Questions
GitHub Profile: [${answers.githubName}](https://github.com/${answers.githubName}) 
Email: ${answers.email}


## License

This project is licensed under the ${answers.license} License 

`
  // write the file to the generated readme file
  fs.writeFile("./generatedreadme/readme.md", finalReadMe, (error) => {
    console.log(error)

  })


}

// Function call to initialize app
init();

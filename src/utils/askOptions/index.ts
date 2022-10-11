// import inquirer from "inquirer";
const inquirer = require("inquirer");
import { Options } from "../../types";

const askOptions = async () => {
  const answer = await inquirer.prompt({
    name: "ask_option",
    type: "list",
    message: "Please select an option\n",
    choices: [Options.Single, Options.Batch, Options.Exit],
  });

  return answer;
};

export default askOptions;

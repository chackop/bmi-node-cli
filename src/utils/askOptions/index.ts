import inquirer from "inquirer";
import { Options } from "../../types";

const askOptions = async () => {
  const { ask_option } = await inquirer.prompt({
    name: "ask_option",
    type: "list",
    message: "Please select an option\n",
    choices: [Options.Single, Options.Batch, Options.Exit],
  });

  return ask_option;
};

export default askOptions;

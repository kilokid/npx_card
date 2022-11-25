#!/usr/bin/env node

'use strict'

const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");
clear();

const prompt = inquirer.createPromptModule();

const questions = [
    {
        type: "list",
        name: "action",
        message: "What you want to do?",
        choices: [
            {
                name: `Send me an ${chalk.green.bold("email")}?`,
                value: () => {
                    open("mailto:lomovdev@gmail.com");
                    console.log("\nDone, see you soon at inbox.\n");
                }
            },
            {
                name: `Subscribe to my telegram channel`,
                value: () => {
                    open('https://t.me/teknogroupe');
                    console.log("\n See you at the telegram \n");
                }
            },
            {
                name: "Just quit.",
                value: () => {
                    console.log("Hasta la vista.\n");
                }
            }
        ]
    }
];

const data = {
    name: chalk.bold.green("             Lomov Artem"),
    handle: chalk.white("@kilokidu"),
    work: `${chalk.white("Frontend dev at")} ${chalk
        .hex("#2b82b2")
        .bold("M18")}`,
    twitter: chalk.gray("https://twitter.com/") + chalk.cyan("killodev"),
    github: chalk.gray("https://github.com/") + chalk.green("kilokid"),
    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("artem-lomov"),
    telegram: chalk.cyan("https://t.me/teknokilokid"),
    npx: chalk.red("npx") + " " + chalk.white("kilokid"),

    labelWork: chalk.white.bold("       Work:"),
    labelTwitter: chalk.white.bold("    Twitter:"),
    labelGitHub: chalk.white.bold("     GitHub:"),
    labelLinkedIn: chalk.white.bold("   LinkedIn:"),
    labelTelegram: chalk.white.bold("   Telegram:"),
    labelCard: chalk.white.bold("       Card:")
};

const me = boxen(
    [
        `${data.name}`,
        ``,
        `${data.labelWork}  ${data.work}`,
        ``,
        `${data.labelTwitter}  ${data.twitter}`,
        `${data.labelGitHub}  ${data.github}`,
        `${data.labelLinkedIn}  ${data.linkedin}`,
        `${data.labelTelegram}  ${data.telegram}`,
        ``,
        `${data.labelCard}  ${data.npx}`,
        ``,
    ].join("\n"),
    {
        margin: 1,
        float: 'center',
        padding: 1,
        borderStyle: "single",
        borderColor: "green"
    }
);

console.log(me);
const tip = [
    `Tip: Try ${chalk.cyanBright.bold(
        "cmd/ctrl + click"
    )} on the links above`,
    '',
].join("\n");
console.log(tip);

prompt(questions).then(answer => answer.action());

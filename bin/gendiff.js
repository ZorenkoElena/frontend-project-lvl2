#!/usr/bin/env node

import { program } from "commander";
import diff from "../src/diff.js";

program
	.version("0.0.1", "-V, --version", "output the version number")
	.description("Compares two configuration files and shows a difference.")
	.arguments("<filepath1> <filepath2>")
	.action((filepath1, filepath2) => console.log(diff(filepath1, filepath2)))
	.helpOption("-h, --help", "output usage information")
	.option("-f, --format [type]", "output format")
	.parse(process.argv);

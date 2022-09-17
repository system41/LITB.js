# LITB.js
LITB.js > Linux in The Browser | Linux simulation right in the browser (no WASM)

## About
LITB.js is a Linux interpreter written in TypeScript that compiles to JavaScript.  
With LITB.js you can make a terminal simulation right in your browser with no additional setup!  
You can supply your terminal commands or use the default ones located at `src/DefaultTerminalOptions.ts`  

## Usage
Using LITB.js is very simple.
1. Import LITB.js into your project
2. Create a new instance of `parser` (a class)
    * If you would like, you may import your terminal commands as the first (and only) argument.
3. Whenever you would like to execute a command, use `parser.exec(command)`
//type Args = {} (I DO NOT KNOW HOW TO TYPE ARRAY-LIKE OBJECTS HELP)

type TerminalOptions = {
    command: string,
    args: string[],
    exec: (args: string[]) => string | null,
}[]

class parser {
    constructor(public opt: TerminalOptions): void {
        if (!opt) {
            console.log("No terminal commands entered, using default ones...")
        }
    }
    exec(prompt: string): string | null {
        let splitSpaces = prompt.split(' ')
        ///////////////////////////
        let command = splitSpaces[0]
        let args: string[] = []
        for (const posibArg in splitSpaces){
            if (posibArg.startsWith("--")) {
                args.push(posibArg[2]) //don't include the two dashes
            } else if (posibArg.startsWith("-")) { //at the moment, this only supports args like this: -x, -z. not -xz
                args.push(posibArg[1]) //don't include the dash
            } else { //direct argument (example: echo "hello world", "hello world" is direct argument)
                args.push(posibArg)
            }
        }
        //old-school method for finding the command entered into prompt
        let ITEM;
        this.opt.forEach(item => {
            if (item.command === command) {
                ITEM = item
            }
        })
        let RESPONSE = ITEM.exec(args)
        return RESPONSE
    }
}
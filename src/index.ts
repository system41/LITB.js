type TerminalOptions = {
    command: string,
    args: string[],
    //exec: function,
}[]

class parser {
    constructor(public opt: TerminalOptions){
        if (!opt) {
            console.log("No terminal commands entered, using default ones...")
        }
    }
    exec(prompt: string){
        let splitSpaces = prompt.split(' ')
        ///////////////////////////
        let command = splitSpaces[0]
        let args = []
        //let exec = function(args){/* ?????????????????????? */}
        for (const posibArg in splitSpaces){
            if (posibArg.startsWith("--")) {
                args.push(posibArg[2]) //don't include the two dashes
            } else if (posibArg.startsWith("-")) { //at the moment, this only supports args like this: -x, -z. not -xz
                args.push(posibArg[1]) //don't include the dash
            } else { //direct argument (example: echo "hello world", "hello world" is direct argument)
                //we're not doing this today
            }
        }
        //old-school method for finding the command entered into prompt
        let ITEM;
        this.opt.forEach(item => {
            if (item.command === command) {
                ITEM = item
            }
        })
        //ITEM.exec(args)
    }
}
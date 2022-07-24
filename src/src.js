class litb {
    constructor({ container: container = document.body, commands: { ...commandList } } = {}) {
        container.style.backgroundColor = 'black'
        let input = document.createElement('input')
        container.appendChild(input)
        this.inputEl = input
        this.containerEl = container
        input.addEventListener('keypress', e => {
            if (event.key === "Enter") {
                let command;
                commandList.forEach(command => {
                    if (e.target.value.startsWith(command.name)) {
                        command = command.name
                    }
                })
                if (command) {
                    this.print('command found; awesome!') //TODO
                } else {
                    this.print(`${e.target.value}: command not found`)
                }
            }
        })
    }
    print(arg) {
        let div = document.createElement('div')
        div.innerHTML = arg
        div.insertBefore(this.inputEl)
    }
}

// application of litb

let Instance = new litb({
    commands: [{
        name: "git",
        //the rest is tbd (: have fun
    }]
})
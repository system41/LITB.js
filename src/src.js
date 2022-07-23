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
                commandList.forEach(i => {
                    if (e.target.value.startsWith(i.name)) {
                        command = i.name
                    }
                })
                if (command) {
                    this.print('command found: awesome!') //TODO
                } else {
                    this.print(`${e.target.value}: command not found`)
                }
            }
        })
    }
    print(arg){
        let div = document.createElement('div')
        div.innerText = arg
        div.insertBefore(this.inputEl)
    }
}
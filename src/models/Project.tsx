class Project {
    title: String;
    subscript: String;
    gitLink: String;
    codeLink: String;
    techStack: Array<Tech>
    description: Array<string>
    constructor(title: String, subscript: String, gitLink: String, codeLink: String, techStack: Array<Tech>, description: Array<string>) {
        this.title = title;
        this.subscript = subscript;
        this.gitLink = gitLink;
        this.codeLink = codeLink;
        this.techStack = techStack;
        this.description = description
    }

}

class Tech {
    language: String;
    framework: String;
    constructor(language: String, framework: String) {
        this.language = language;
        this.framework = framework;
    }
    public static FindProjectWithStack(techCheck: String, projects: Array<Project>, setlist: Function) {
        let temp: Array<Project> = []

        for (let number: number = 0; number < projects.length; number++) {
            let contain: Boolean = false;
            const tech: Array<Tech> = projects[number].techStack
            for (let j: number = 0; j < tech.length; j++) {
                if (tech[j].framework.toLowerCase() === techCheck.toLowerCase() || tech[j].language.toLowerCase() === techCheck.toLowerCase()) {
                    contain = true;
                    break;
                }
            }
            if (contain)
                temp.push(projects[number])
        }
        if (temp.length === 0)
            setlist(projects)
        else
            setlist(temp);
    }
}

let list: Array<Project> = [];
list.push(new Project("Real Time Tracking Using Face And Gait", "Final Year Project", "", "", [new Tech("Flutter", "Dart"), new Tech("Django", "Python"), new Tech("React-Native", "Javascript")], ['Combined two pre-trained Deeplearning models on Django.', 'Created user app for alerts using flutter and admin section using Django and police section app using react native', 'Applied Django’s channels for opening web sockets and threading for optimizing the model and Django apps for breaking the panel into modules. Also used Django ORM for DB manipulations.']))
list.push(new Project("Real Time Tracking Using Face And Gait", "Final Year Project", "", "", [new Tech("Flutter", "Dart"), new Tech("Django", "Python"), new Tech("React-Native", "C++")], ['Combined two pre-trained Deeplearning models on Django.', 'Created user app for alerts using flutter and admin section using Django and police section app using react native', 'Applied Django’s channels for opening web sockets and threading for optimizing the model and Django apps for breaking the panel into modules. Also used Django ORM for DB manipulations.']))
export { list, Project, Tech }
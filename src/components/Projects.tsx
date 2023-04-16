import { useState } from 'react'
import ProjectComponent from './Project'
import { list, Project, Tech } from '../models/Project'
export default function Projects() {
    const [Search, setSearch] = useState<string>("")
    const [listState, setList] = useState<Project[]>(list)
    return (
        <>
            <h1 className="m-auto text-center">Projects</h1>
            <div className="d-flex justify-content-center">
                <input type="text" id="Project" className="col-4" value={Search} onChange={(e) => setSearch(e.target.value)} placeholder="Search Projects By tech" />
                <button className="btn btn-primary" onClick={(e) => {
                    Tech.FindProjectWithStack(Search, list, setList);
                }} style={{ marginLeft: "8px;" }}>Submit</button>
            </div>

            {listState?.map((e: Project) => <ProjectComponent project={e} />)}

        </>
    )
}

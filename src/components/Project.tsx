
import PropTypes, { InferProps } from 'prop-types';
import { Project, Tech } from '../models/Project';
import "../styles/Project.css";
export default function ProjectComponent({ project }: InferProps<typeof ProjectComponent.propTypes>) {
    return (
        <>
            <div className="project w-100 border border-dark p-2">
                <div className="d-flex justify-content-between">
                    <h2>{project?.title}</h2>
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Options
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="#">Source Code</a></li>
                            <li><a className="dropdown-item" href="#">Git Link</a></li>
                        </ul>
                    </div>
                </div>

                <h4>{project?.subscript}</h4>
                <h4>Tech Stack</h4>
                <ul className='d-flex flex-column p-0'>
                    {project?.techStack?.map((e: Tech) =>
                        <li>{e.framework} ({e.language})</li>
                    )}

                </ul>
                <h4>Description</h4>
                <ul className='d-flex flex-column p-0'>
                    {project?.description?.map((e: string) => <>
                        <li>{e}</li>
                        {/* <br /> */}
                    </>)}
                </ul>

            </div>
            <div style={{ height: "10px" }}></div>
        </>
    )
}

ProjectComponent.propTypes = {
    project: PropTypes.instanceOf(Project)
}
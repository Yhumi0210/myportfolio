import projectData from '../data/projects.json'
import { Link } from 'react-router-dom'
import Contact from '../components/Contact.tsx'
import MySkills from '../components/MySkills.tsx'

export default function HomePage() {
    return (
        <>
                    <section className='hero glassmorphism'>
                        <h1 className='hero__title'>Buil Laura</h1>
                        <h2 className='hero__work'>Développeuse Front-End</h2>
                        <p className='hero__text'>Passionnée et persévérante,
                            je conçois des applications web sur mesure,
                            où chaque détail compte pour offrir une expérience
                            unique et impactante. Bienveillante et à l'écoute,
                            je m'engage à transformer vos idées en projets réussis.
                        </p>
                    </section>
            <MySkills/>
                    <section className='projects' id='projets'>
                        {projectData.map((project, index) => (
                            <div key={index} className='projects__card glassmorphism'>
                                <Link to={`/project/${index}`} className='projects__card__link'>
                                    <h2 className='projects__card__link__title'>Projet {project.name}</h2>
                                    <p className='projects__card__link__text'>{project.minidescription}</p>
                                </Link>
                            </div>
                        ))}
                    </section>
            <Contact/>

        </>
)
}
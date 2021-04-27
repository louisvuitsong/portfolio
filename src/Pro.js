import Workdetail from './Workdetail';

function Pro({project}) {
    
    return(
        <>  
            <div className={project.summary.navTitle}>
                <figure className='summary'>
                    <figcaption>
                        <h2> {project.summary.title} </h2>
                        <p>  {project.summary.exp} </p>
                        <p>  {project.summary.skills}  </p>
                        <p className='color'>  {project.summary.color} </p>
                        <p>  {project.summary.font} </p>
                        <span className='more'>MORE<a><img src='/source/work/ic_arrow_forward_48px.svg' alt='arrow' /></a></span>
                    </figcaption> 
                    <p><img src={project.summary.image} alt='' /></p>
                </figure>
                <Workdetail project={project} />
            </div>
        </>
    ); 
}

export default Pro;
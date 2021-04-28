export default function Workdetail ({project}) {
    return (
        <>
            <article className='more_detail'>
                <section className='cover'>
                    <h2>  {project.cover.title}  </h2>
                    <p>  {project.cover.sub}  </p>
                    <p><img src='/source/work/wheel.png' alt='' /></p>
                    <p className='back_btn'><img src='/source/work/ic_arrow_back_48px.svg' alt='' /></p>
                </section>
                <p><img src={project.cover.screenImage} alt="" /></p>
                {
                    project.detail.map(function(detail,k){
                        return (
                            <section key={k} className='detail'>
                                <article className='detail_cover'>
                                    <div className='detail_title'>
                                        <h3>{ detail.num }</h3>
                                        <p>{ detail.title }</p>  
                                    </div>
                                    <section><img src="#" /></section>
                                </article>
                                <article className='detail_exp'>
                                    <Exp detail={detail}/>
                                </article>
                            </section>
                        );
                    })
                }
                <a className="link" href={project.cover.link}>Go to page</a>
            </article>
        </>
    );
}

function Exp ({detail}) {
    return (
        <>
            {
                detail.exp.map(function(exp, k){
                    return (
                        <section key={k}>
                            <h4>{ exp.subTitle }</h4>
                            <Exptext exp={exp}/>
                        </section>
                    );
                })
            }


        </>
    );
}

function Exptext ({exp}) {
    return (
        <>
            {
                exp.expText.map(function(expText, k){
                    return (
                        <p key={k}>{expText}</p>
                    );
                })
            }
        </>
    );
}
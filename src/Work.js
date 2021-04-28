
import {useState} from 'react';
import data from './data/work.json';
import Pro from './Pro';
import './css/work.css';

import work from './function/work';

export default function Work() {
    let project = data.data;
    let [current,setCurrent] = useState(project[0]);    
  
    function nav(e){
        let num = Number(e.target.name);
        setCurrent(project[num]);
    }
    return (
        <>  
            <main className="work_main">
                <nav>
                    {
                        project.map(function(workNav,k){
                            return <a key={k} name={k} onClick={nav}>{workNav.summary.navTitle}</a>
                        })
                    }
                </nav>
                <Pro project={current} />
            </main>
            {work()} 
        </>
    );
}

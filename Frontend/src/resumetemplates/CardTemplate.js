import React from 'react'
import { Route, Routes } from 'react-router-dom';

import Resumecard from '../resume/ResumeCard';
import { FirstTemplate } from './firstTemplate/FirstTemplate';
import SecondTemplate from './secondTemplate/SecondTemplate';



 const CardTemplate = () => {

  return ( 
    <div><center><h3>RESUME TEMPLATES</h3></center><hr/>
        <section className='service py-5'>
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <Resumecard
                    src="/images/template1.png"                  
                    visit="/firsttemplate"
                    btn="Template1" />
                    <Resumecard
                    src="/images/template2.png"  
                    visit="/secondtemplate"
                    btn = "Template2" />
                    {/* <Routes>
                    <Route path="/firsttemplate" element={<FirstTemplate />} exact />
                    <Route path="/secondtemplate" element={<SecondTemplate />} exact />
                </Routes> */}
                </div>
            </div>
        </section>
    </div>

    )

}

export default CardTemplate;
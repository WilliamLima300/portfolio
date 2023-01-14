import React from 'react';

const Frontend = () => {
  return (
    <div className="skills__content">

      <h3 className="skills__title">Front-end</h3>

      <div className="skills__box">
        
        <div className="skills_group">

          <div className="skills__data">

            <i className='bx bx-badge-check' ></i>

            <div>
              <h3 className="skills__name">HTML</h3>
              <span className="skills_level">Intermediário</span>
            </div>

          </div>

          <div className="skills__data">

            <i className='bx bx-badge-check' ></i>

            <div>
              <h3 className="skills__name">CSS</h3>
              <span className="skills_level">Intermediário</span>
            </div>

          </div>

          <div className="skills__data">

            <i className='bx bx-badge-check'></i>

            <div>
              <h3 className="skills__name">JavaScript</h3>
              <span className="skills_level">Básico</span>
            </div>

          </div>

        </div>

        <div className="skills_group">

          <div className="skills__data">
            <i className='bx bx-badge-check'></i>

            <div>
              <h3 className="skills__name">Bootstrap</h3>
              <span className="skills_level">Básico</span>
            </div>

          </div>


          <div className="skills__data">
            <i className='bx bx-badge-check'></i>

            <div>
              <h3 className="skills__name">Git/Github</h3>
              <span className="skills_level">Básico</span>
            </div>

          </div>


          <div className="skills__data">
            <i className='bx bx-badge-check'></i>

            <div>
              <h3 className="skills__name">React</h3>
              <span className="skills_level">Básico</span>
            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Frontend;

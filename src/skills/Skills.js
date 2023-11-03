
import './skills.css';

const Skills = () => {
  return (
    <>
      <h2 className="heading2" style={{ textAlign: 'left' }}>My Skills</h2>
      <div className="ms-4">
      <p>HTML</p>
      <div className="container-div">
        <div className="skills html">70%</div>
      </div>
      </div>
      <div className="ms-4">
      <p>CSS</p>
      <div className="container-div">
        <div className="skills css">60%</div>
      </div>
</div>
<div className="ms-4">
      <p>Angular</p>
      <div className="container-div">
        <div className="skills angular">60%</div>
      </div>
      </div>
  
      <div className="ms-4">
      <p>JavaScript</p>
      <div className="container-div">
        <div className="skills js">40%</div>
      </div>

</div>
    </>
  )
}
export default Skills;
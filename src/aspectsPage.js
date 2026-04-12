import logo from './logo.svg';
import './aspectsPage.css';

function AspectsPage() {
  return (
    <div className="App">
      <div className="feature-section">
        <div className="feature-section-content">
          <div className="feature-section-title">
            <p className='explore'>Your SkillShikshya Journey</p>
            <p className='dive-into'><span className='highlight'>Step</span> In. <span className='highlight'>Skill</span> Up. <span className='highlight'>Stand</span> Out. 🚀</p>
          </div>
          <div className="feature-section-card">
            <div className='card-clarity'>
              <img src='Clarity.svg'/>
              <div className='card-clarity-text'>
                <p className='card-title'>Start with clarity</p>
                <p className='card-subtitle'>Step into better learning path.</p>
                <p>Overwhelmed by too many learning options? SkillShikshya provides a clear, curated roadmap from the start. Whether you're a beginner or upskilling, we have a path tailored to your growth.</p>
              </div>
            </div>
            <div className='card-learn'>
              <div className='card-learn-text'>
                <p className='card-title'>Learn by Doing</p>
                <p className='card-subtitle'>Practical skills, real projects.</p>
                <p>Theory is great, but action is better. At SkillShikshya, you learn by doing. Hands-on projects and real-world scenarios help you build, break, and create—leading to true mastery.</p>
              </div>
                <img src='Learn.svg'/>
            </div>
            <div className='card-mentor'>
                <img src='Mentor.svg'/>
              <div className='card-mentor-text'>
                <p className='card-title'>Get Mentored & Supported</p>
                <p className='card-subtitle'>You're not learning alone.</p>
                <p>Stuck or need feedback? SkillShikshya’s community of mentors and learners has your back with live support, interactive discussions, and expert insights. You’re never on your own.</p>
              </div>
            </div>
            <div className='card-showcase'>
              <div className='card-showcase-text'>
                <p className='card-title'>Active & Showcase</p>
                <p className='card-subtitle'>Building your portfolio, get job-ready.</p>
                <p>Your journey ends with achievement. Each completed project builds a portfolio showcasing your skills and job readiness, bringing you closer to that dream job, promotion, or your own venture.</p>
              </div>
                <img src='Showcase.svg'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AspectsPage;

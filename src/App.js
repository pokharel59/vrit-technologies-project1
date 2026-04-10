import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="feature-section">
        <div className="feature-section-content">
          <div className="feature-section-title">
            <h3> Your SkillShikshya Journey</h3>
            <h1>Step In. Skill Up. Stand Out.</h1>
          </div>
          <div className="feature-section-card">
            <div className='card-clarity'>
                <img src='Clarity.svg'/>
              <div className='card-clarity-text'>
                <h2>Start with clarity</h2>
                <h3>Step into better learning path.</h3>
                <p>Overwhelmed by too many learning options? SkillShikshya provides a clear, curated roadmap from the start. Whether you're a beginner or upskilling, we have a path tailored to your growth.</p>
              </div>
            </div>
            <div className='card-learn'>
              <div className='card-learn-text'>
                <h2>Learn by Doing</h2>
                <h3>Practical skills, real projects.</h3>
                <p>Theory is great, but action is better. At SkillShikshya, you learn by doing. Hands-on projects and real-world scenarios help you build, break, and create—leading to true mastery.</p>
              </div>
                <img src='Learn.svg'/>
            </div>
            <div className='card-mentor'>
                <img src='Mentor.svg'/>
              <div className='card-mentor-text'>
                <h2>Get Mentored & Supported</h2>
                <h3>You're not learning alone.</h3>
                <p>Stuck or need feedback? SkillShikshya’s community of mentors and learners has your back with live support, interactive discussions, and expert insights. You’re never on your own.</p>
              </div>
            </div>
            <div className='card-showcase'>
              <div className='card-showcase-text'>
                <h2>Active & Showcase</h2>
                <h3>Building your portfolio, get job-ready.</h3>
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

export default App;

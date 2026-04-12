import './skillPage.css';
import { ArrowBigRight, ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';

function SkillPage() {
  return (
    <div className="skill">
        <div className="skill-section">
          <div className='skill-section-content'>
            <div className='skill-section-title'>
              <p className='explore'> Explore our classes and master trending skills!</p>
              <p className='dive-into'>Dive Into <span className='highlight'>What’s Hot Right Now!</span> 🔥</p>
            </div>
            <div className='skill-section-card'>
              <div className='active-card'>
                <div className='view-course-CTA'>
                  <p>View All Courses </p>
                  <ArrowRightIcon className='arrow-icon' size={30} color="#f9ebec"/>
                </div>
                <div className='tools-img'>
                  <img className='react-img' src='React.svg'/>
                  <img className='chat-img' src='Chat.svg'/>
                  <img className='vue-img' src='VUE.svg'/>
                  <img className='pen-img' src='Pen.svg'/>
                </div>
                <div className='active-summary'>
                  <div className='active-number'>
                    <p>23</p>
                  </div>
                  <div className='plus-icon-23'>
                    <p>+</p>
                  </div>
                  <div className='active-text'>
                    <p className='all-courses'>All Courses</p>
                    <p className='courses-powering'> courses you're powering through right now.</p>
                  </div>
                </div>
              </div>
              <div className='upcoming-card'>
                <div className='upcoming-text'>
                    <p className='plain-card-p'>Upcoming Courses</p>
                    <p className='plain-card2-p'>exciting new courses waiting to boost your skills.</p>
                </div>
                <div className='upcoming-summary'>
                    <div className='upcoming-number'>
                        <p>05</p>
                    </div>
                </div>
                <div className='plus-icon'>
                    <p>+</p>
                </div>
              </div>
              <div className='ongoing-card'>
                <div className='ongoing-text'>
                    <p className='plain-card-p'>Ongoing Courses</p>
                    <p className='plain-card2-p'>currently happening—don’t miss out on the action!</p>
                </div>
                <div className='ongoing-summary'>
                    <div className='ongoing-number'>
                        <p>10</p>
                    </div>
                </div>
                <div className='plus-icon-10'>
                    <p>+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default SkillPage;
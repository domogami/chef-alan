import React from 'react'
import '../styles/index.css'
import Cake1 from '../images/cheesecake banner.jpeg'
import Cake2 from '../images/cakes.jpeg'
import Cake3 from '../images/towercake.jpeg'
import Header from '../components/Header'
import FancyDivider from '../components/FancyDivider'
import Hero from '../components/Hero'
import ShowcaseElement from '../components/ShowCaseElement'
import Reeses from '../images/reeses.jpeg'
import RedVelvet from '../images/redvelvet.jpeg'
import Oreo from '../images/oreo.jpeg'
import ExperienceCard from '../components/ExperienceCard'
import CheesecakeFactory from '../images/CheesecakeFactory.jpeg'
import LeCordonBleu from '../images/LeCordonBleu.png'
import JonathanClub from '../images/JonathanClub.png'
import { faLinkedinIn, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <FancyDivider Image={Cake1} Title="Showcase" />
      <ShowcaseElement
        Text="Reese’s "
        Text2="Peanut Butter"
        Text3="Cheesecake"
        SubText="Reese's® peanut butter cups combined with a rich chocolate cheesecake, topped with chopped Reese's® peanut butter cups"
        Image={Reeses}
        Mirror={true}
      />
      <ShowcaseElement
        Text="Oreo "
        Text2="Cookies"
        Text3="and Creme Cheesecake"
        SubText="OREO® cookies baked in our creamy cheesecake, layered with OREO® cookie mousse. Finished with a drizzle of chocolate ganache and milk chocolate rosettes."
        Image={Oreo}
        Mirror={false}
      />
      <ShowcaseElement
        Text="Red "
        Text2="Velvet"
        Text3="Cheesecake"
        SubText="Reese's® peanut butter cups combined with a rich chocolate cheesecake, topped with chopped Reese's® peanut butter cups"
        Image={RedVelvet}
        Mirror={true}
      />
      <FancyDivider Image={Cake2} Title="Experience" />
      <ExperienceCard
        Image={CheesecakeFactory}
        Title1="The"
        GreenText=" Cheesecake "
        Title2="Factory"
        SubText="Associate Director Bakery R&D"
        SubText1="Manage all aspects of the development process from internal bench top presentations to customer presentations. Mange two R&D technicians and project workflow in the test kitchen."
      />
      <ExperienceCard
        Image={JonathanClub}
        Title1="The"
        GreenText=" Jonathan "
        Title2="Club"
        SubText="Executive Pastry Chef"
        SubText1="A private 3,800 member private club with 5.5 million in annual food and beverage sales. Managed the development, planning, and production of all desserts for our three restaurants, 80 suites, and special events and banquets up to 800 guests. Managed a staff of five full time and on-call pastry employees."
      />
      <ExperienceCard
        Image={LeCordonBleu}
        Title1="Le"
        GreenText=" Cordon "
        Title2="Bleu"
        SubText="Baking and Pastry Chef Instructor"
        SubText1="Lecture on the history, science, and methods for making and baking breads, laminated doughs, and pastries. Demonstrate 100 plus baking and pastry recipes and techniques. Evaluate and assess student product, written examinations, and practical examinations."
      />
      <FancyDivider Image={Cake3} Title="Contact Me" />
      <section>
        <ul className="icon-list">
          <li className="icon-item">
            <a
              href="https://www.facebook.com/profile.php?id=1352767377"
              className="icon-link"
            >
              <i className="fab fa-facebook-f">
                <FontAwesomeIcon icon={faFacebook} />
              </i>
            </a>
          </li>
          <li className="icon-item">
            <a
              href="https://www.linkedin.com/in/alan-lee-09285453/"
              className="icon-link"
            >
              <i className="fab fa-linkedin-in">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </i>
            </a>
          </li>
        </ul>
      </section>
    </div>
  )
}

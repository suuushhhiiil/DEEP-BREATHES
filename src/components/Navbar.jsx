import logo from '../assets/logo.png'
import { Link, useLocation } from 'react-router-dom';
import "../styles/Navbar.css";
function Navbar() {
  const location = useLocation();
  const Links = [
    { name: "Home", link: "/" },
    { name: "Utter Your Thoughts", link: "/utter-your-thoughts" },
    { name: "Mind-Tracker", link: "/mind-tracker" },
    { name: "Explore", link: "/explore" },
    { name: "About", link: "/about" },
  ];

  return (
    <nav className="sticky top-0 transition-color ease-in-out duration-[600ms] pt-[10px] z-50 backdrop-blur-[80px] h-[]">
      <div className="z-50 top-0 flex items-center justify-between px-[100px] py-2 relative">
        { //Logo
           <Link to={'/'} className=''><div className={`flex items-center space-x-5`}>
            <div id="logo-div" className="rounded-full p-3 bg-primary">
              <img
                src={logo}
                alt=""
                className="h-[3.5vw]"
              />
            </div>
            <span className={`font-display text-3xl leading-[1] font-extrabold`}>Deep <br /> Breathes</span>
          </div>
          </Link>
        }
        { //Desktop-Nav-Items
          <div className='flex items-center'>
            <ul className='flex space-x-[0.4vw]'>
              {
                Links.map((items) => {
                  return(
                  <li key={items.name} className=''><Link to={items.link} className={`transition-color duration-[600ms] text-[1.2vw] font-sans px-[14px] rounded-full font-medium ${location.pathname === items.link ? 'active-link' : 'inactive-link'}`}>{items.name}</Link></li>
                )})
              }
            </ul>
          </div>
        }
        <Link to={'/contact'} className='animate-button transition-color duration-[600ms] ml-[18px] text-[1.2vw] rounded-full border-secondary text-secondary border-[1px] px-[2vw] py-[1vh] hover:border-primary hover:text-black'>Contact Us</Link>
      </div>
    </nav>
  )
}

export default Navbar
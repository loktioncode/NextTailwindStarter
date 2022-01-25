// import "./NavBar.scss";
import NavButton from "./NavButton";
// import NavBarStyle from '../styles/navBar.module.css'
import Link from 'next/link'


const NavBar = props => (

  <>
    <div className="navbar sticky z-0 top-0 shadow-lg bg-neutral text-neutral-content " >
      <div class=" flex-box px-2 mx-2 navbar-start">
        <Link href="/">
          <div class="flex-none w-14 h-14">
          <img
            className="mb-12 h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-blue-600.svg"
            alt="Workflow"
          />
          </div>
    
        </Link>
        <div class="flex-none w-14 h-14 mt-6">
        <span class="text-lg font-bold ">
          CRYPTOOWL
        </span>
          </div>
       
     
      </div>
      <div class="hidden px-2 mx-2 navbar-center lg:flex">

        <div class="flex items-stretch">
          {props.navButtons.map(button => (
            <NavButton
              key={button.path}
              path={button.path}
              label={button.label}
            // icon={button.icon}
            />
          ))}
        </div>
      </div>
      <div class="navbar-end pr-4">

        <button class="btn btn-square btn-ghost pr-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </button>
        {/* {props.colorSwitch} */}
      </div>
    </div>

  </>

);

export default NavBar;
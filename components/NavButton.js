import Link from "next/link";
import { useRouter } from 'next/router';


const NavButton = props => (
    //  { asPath, pathname } = useRouter();

    <Link href={props.path}>

        {/* color={router.pathname === '/projects' ? "blue.700" : "#000000"} */}
        {/* <div className="Icon">{props.icon}</div> */}
     
        <a class="btn btn-ghost btn-sm rounded-btn focus:text-blue-500">{props.label}</a>

    </Link>
);

export default NavButton;
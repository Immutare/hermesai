import { ReactElement } from "react";
import { Navbar, } from "flowbite-react";
import { HiHome , HiOutlineInformationCircle } from "react-icons/hi";
import { GoHistory } from "react-icons/go";
import { Link, NavLink, Router, useNavigate} from "react-router-dom";
import NavBarLink from "./NavbarLink";

export default function NavbarComponent(): ReactElement {
    return (
        <>
            <Navbar fluid rounded className="grow-0 shrink basis-auto">
                <Navbar.Brand as={Link} href="#">
                    <img src="/querymate-logo.png" className="mr-3 h-6 sm:h-9" alt="Querymate Logo" />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Querymate</span>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <NavBarLink to="/" text="Home"/>
                    <NavBarLink to="/history" text="History"/>
                    <NavBarLink to="/about" text="About"/>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}
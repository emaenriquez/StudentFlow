import { Navbar, Typography, Button } from "@material-tailwind/react";
import { Link } from 'react-router-dom';
const NavBar = () => {
    return (
        <header>
            <Navbar className="mt-3 max-w-full flex justify-between items-center py-4">
                {/* Logo */}
                <Typography
                    as="a"
                    href="#"
                    variant="h6"
                    className="cursor-pointer text-base sm:text-2xl font-bold text-blue-gray-900"
                >
                    StudentFlow
                </Typography>
                {/* Botones */}
                <div>
                    <Link to="/role-selection-login">
                        <Button className="text-pretty lowercase sm:text-2xl" variant="gradient" size="sm">
                            Log in
                        </Button>
                    </Link>
                    <Link to="/role-selection-register">
                        <Button className="text-pretty lowercase sm:text-2xl" variant="gradient" size="sm">
                            Sign In
                        </Button>
                    </Link>
                </div>
            </Navbar>
        </header>
    );
};

export default NavBar;
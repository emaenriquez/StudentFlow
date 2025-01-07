import { Navbar, Typography, Button} from "@material-tailwind/react";
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
                <div className="flex gap-4">
                    <Button className="text-pretty lowercase sm:text-2xl" variant="gradient" size="sm">
                        Log in
                    </Button>
                    <Button className="text-pretty lowercase sm:text-2xl" variant="gradient" size="sm">
                        Sign In
                    </Button>
                </div>
            </Navbar>
        </header>
    );
};

export default NavBar;
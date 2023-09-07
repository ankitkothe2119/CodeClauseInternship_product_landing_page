
const Navigation = () => {
    return (
        <>
            <div className="container">
                <nav>
                    <div className="logo">
                        <img src="/public/images/brand_logo.png" alt="logo" />
                    </div>
                    <ul>
                        <li href="#">Menu</li>
                        <li href="#">Location</li>
                        <li href="#">About</li>
                        <li href="#">Contact</li>
                    </ul>
                    <button>login</button>
                </nav>
            </div>
        </>
    );
};

export default Navigation;
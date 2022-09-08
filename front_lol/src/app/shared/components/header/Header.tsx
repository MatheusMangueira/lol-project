import { NavBar } from '../navBar/NavBar'
import Logo from '../../hooks/logoLOL.png';

export const Header = () => {

    return (

        <div className="flex justify-between items-center p-5 bg-gray-800 w-full">
            <div className='flex justify-between items-center mx-32 w-full f'>

                <img alt='logo' src={Logo} />
                <NavBar />

            </div>
        </div>

    );


}

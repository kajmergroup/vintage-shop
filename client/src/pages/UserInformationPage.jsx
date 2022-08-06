import Navbar from "../components/Navbar"
import UserMenu from "../components/User/UserMenu";
import UserInformation from "../components/User/UserInformation";



const UserInformationPage = () => {

    return(
        <>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col-3">
                    <UserMenu/>
                </div>
                <div className="col-9">
                    <UserInformation/>
                </div>
            </div>
            
        </div>
        
        </>
    )
}

export default UserInformationPage;

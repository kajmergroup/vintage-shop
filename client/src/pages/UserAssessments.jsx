import Navbar from "../components/Navbar"
import UserMenu from "../components/User/UserMenu";
import UserOrders from "../components/User/UserOrders";



const UserAssessments = () => {

    return(
        <>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col-3">
                    <UserMenu/>
                </div>
                <div className="col-9">
                    ASSMENTS
                </div>
            </div>
            
        </div>
        
        </>
    )
}

export default UserAssessments;

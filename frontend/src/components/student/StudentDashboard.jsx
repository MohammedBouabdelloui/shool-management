import { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { LOGIN_ROUTE } from "../../router";


const StudentDashboard= ()=>{
    const navigate = useNavigate();

    useEffect(()=>{
        if(!window.localStorage.getItem('ACCESSE_TOKEN')){
            navigate(LOGIN_ROUTE)
        }
    },[])
    return(<>



        <div>page Student Dashboard</div>
    </>)
}
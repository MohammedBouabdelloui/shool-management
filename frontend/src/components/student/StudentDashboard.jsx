import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { LOGIN_ROUTE } from "../../router";
import { AxiosClient } from "../../api/axios";


const StudentDashboard= ()=>{
    const navigate = useNavigate();
    const [user , setData] = useState({})

    useEffect(()=>{
 
        if(!window.localStorage.getItem('ACCSESS_TOKEN')){
          navigate(LOGIN_ROUTE)
          }

          AxiosClient.get('/api/user').then((respance) =>{
            setData(respance.data)
          })
        },[])

    return(<>

      
{/* JSON.stringify(user) */}
        <div className="relative overflow-x-auto shadow-md bg-slate-200 sm:rounded-lg my-24">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                             id
                        </th>
                        <th scope="col" className="px-6 py-3">
                            name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            email
                        </th>
                        <th scope="col" className="px-6 py-3">
                            data
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                           {user.id}
                        </th>
                        <td className="px-6 py-4">
                            {user.name}
                        </td>
                        <td className="px-6 py-4">
                            {user.email}
                        </td>
                        <td className="px-6 py-4">
                            {user.created_at}
                        </td>
                        <td className="px-6 py-4">
                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>


        
    </>)
}
export default StudentDashboard 
import React, {useContext} from 'react'
import UserContext from '../Context/UserContext'

function Profile(){
    const {user}=useContext(UserContext)

    if(!user) return<div>U who????</div>
    return <div> Maalik {user.username} Swagat hai</div>
}
export default Profile;
import { useParams } from "react-router-dom"



function User() {
    const {Userid}=useParams();
  return (
    <div>
      user: {Userid}
    </div>
  )
}

export default User

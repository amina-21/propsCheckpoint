import React from 'react'
import PropTypes from "prop-types";

function Profile(props) {
  
    return (
        <div>
           <div className="mt-5">
               <span>{props.fullName}</span>
            </div> 
            <div>
                <span>{props.bio}</span>
            </div>
            <div>
                <span>{props.profession}</span>
            </div>
            
            
            <div>
               <span>{props.children}</span> 
            </div>
            <div>
            <a href="/" onClick={() => props.handleName(props.fullName)}>click here !</a>
            </div>
        </div>
    )
}
Profile.defaultProps={ fullName:"go my code" , bio : "no pain, no gain" , profession:"good student"}

Profile.propTypes={
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
    children: PropTypes.object

}

export default Profile


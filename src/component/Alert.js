import React from 'react'

function Alert(props) {
    const capitalize=(word)=>{
        const lower=word.toLowerCase()
        return lower.charAt(0).toUpperCase()+lower.slice(1);
    }
    return (
      props.alert &&  <div className={`alert alert-${props.alert.Type} alert-dismissible fade show`} role="alert">
        <p><strong>{capitalize(props.alert.Type)}</strong>:{props.alert.msg}  </p> 
        
      </div>
    )
}

export default Alert


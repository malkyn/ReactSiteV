import propTypes from 'prop-types'
import styles from './UserGreeting.module.css'

function UserGreeting(props){

    const welcomeMessage = <h2 className={styles.welcomeMessage}>Welcome {props.userName}</h2>
    const loginPrompt = <h2 className={styles.loginPrompt}>Please log in to continue</h2>


    return(props.isLoggedIn ?  welcomeMessage : loginPrompt);
}

UserGreeting.propTypes = {
    isLoggedIn: propTypes.bool,
    userName: propTypes.string
}

UserGreeting.defaultProps ={
    isLoggedIn: false,
    userName: "Guest"
}

export default UserGreeting
/* eslint-disable react/prop-types */
import styles from './Students.module.css'
import propTypes from 'prop-types'

function Students(props){
        return(
            <div className={styles.student}>
                <p>Name: {props.name}</p>
                <p>Age: {props.age}</p>
                <p>Student: {props.isStudent ? "Yes" : "No"}</p>
            </div>
        )
}

Students.propTypes = {
    name: propTypes.string,
    age: propTypes.number,
    isStudent: propTypes.bool
}

Students.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false
}

export default Students
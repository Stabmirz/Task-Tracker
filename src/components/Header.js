import PropTypes from 'prop-types';
import Button from './Button'


const Header = ({ title }) => {
    return (
        <header>
            <h1>{title}</h1>
            <Button color='green' text='Add' />
        </header>
    )
}

// if no props passed 
Header.defaultProps={
    title : "Task Manager",
}


Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS in JS
// const headingStyle = {
//     color:'red',
//     backgroundColor:'black',
// }

export default Header;


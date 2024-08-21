import React  from 'react';
import styles from './Signup.module.css'
import image from './assets/images-removebg-preview.png'

const Signup = ({func}) => {
  return (
    <div className={styles.head}>
        <div className={styles.container}>
            <h1>Sign up</h1> 
            <label>
            <input className={styles.inp1} type="text" placeholder='Enter Your Name' name='name' required/><br /><br />
            <input className={styles.inp1} type="Email" placeholder='Enter Your Email' name='name' required/><br /><br />
            <input className={styles.inp1} type="Password" placeholder='Enter Your password' name='name' required/><br /><br />
            <input className={styles.inp1}  type="Password" placeholder='Repeat Your password' name='name' required/><br /><br />
            <input type="checkbox" />I agree all statement in <a className={styles.ank1} href="">Term of service</a><br /><br />
            <button onClick={func} className={styles.btn}>Register</button></label><br /><br />
            <br /><br />
            <img className={styles.img} src={image} alt="" />
            <a  className={styles.ank2} href="">I am already member</a>
            
        </div>        
    </div>
  )
}
 export default Signup



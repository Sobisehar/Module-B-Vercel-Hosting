import React  from 'react';
import styles from './Signin.module.css'
import banner from './assets/banner.png'

const Signin = ({func}) => {
  return (
      <div className={styles.head}>
        <div className={styles.container}>
            <img className={styles.img} src={banner} alt="" />
            <label className={styles.lab}>
            <h1>Sign in</h1> 
            <input className={styles.inp1} type="text" placeholder='Enter Your Name' name='name' required/><br /><br />
            <input className={styles.inp1}  type="Password" placeholder='Enter Your password' name='name' required/><br /><br />
            <input type="checkbox" />I agree all statement in <a className={styles.ank1} href="">Term of service</a><br /><br />
            <button onClick={func} className={styles.btn}>Register</button></label>
            <br /><br />
        </div>        
    </div>
  )
}

export default Signin

import styles from "./About.module.css"

const About = () =>{
    return (
<div className = {styles.main}>
    <div className = {styles.left}></div>
     <div className = {styles.right}>
        <p className = {styles.about}>ABOUT US</p>
        <h2>We Are Always Ensure best <br/> Course For Your Learning</h2>
        <p className = {styles.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br/>
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim <br/>
            veniam, quis nostrud exercitation ullamco laboris nisi.
        </p>
        
     </div>
</div>
    )
}
export default About
import LoginForm from "../loginForm/loginForm";
import style from "./landingPage.css"

function LandingPage({login}){
    return( <div className={style.landingContainer}>
        <LoginForm login = {login}/>
    </div>

    )
}

export default LandingPage
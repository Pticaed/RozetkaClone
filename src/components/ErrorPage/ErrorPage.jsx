import "./ErrorPage.scss"
import "../DefaultBlock.scss"
import { Link } from "react-router";
export function ErrorPage() {
    return(<div className="errorpage-wrap">
    <p>Ууупс! Сторінку не знайдено...</p>
    <img src="/resourses/ErrorPage.png"/>
    <Link to="/"><button className="default-green-btn ">Повернутись на головну</button></Link>
    </div>);
}

import { Modal, Button } from "react-bootstrap"
import './Forms.scss'
import { Link } from "react-router-dom"
import { useState } from "react"


function Input(props)
{
    function changeState(e)
    {
        props.setState({...props.state, [`${props.nameElState}`]: e.target.value});
    }
    const validate = props.validate === undefined || props.validate === null ? {
        border: {},  
        isValid: true,
        pattern: "",
    } : props.validate;
    return (
        <div id="divOfInputForm">
            <div id="inputForm" style={validate.border}>
                <input type="text" onChange={changeState} placeholder={props.placeholder}></input>
                {!validate.isValid && <img src="/resourses/forms/error.svg"></img>}
                {props.img && <img src={props.img} onClick={props.event}></img>}
            </div>
            {!validate.isValid && <p>{props.textInvalid}</p>}
        </div>
    )
}

function LogoText(props)
{
    return (
        <Button id="buttonAuthReg">
            <img src={props.img}></img>
            <p>{props.text}</p>
        </Button>
    )
}

function submitForm(user, validate, validateObjects, setValidateObjects)
{
    const valuesUser = Object.values(user);
    const valuesValidate = Object.values(validate);
    if(valuesUser.length != valuesValidate.length) { return; }

    const clonValidateObjects = [...validateObjects]; // клон объекта с валидационными данными

    for(let i = 0; i < valuesUser.length; i++)
    {
        const regex = new RegExp(valuesValidate[i])
        const isValid = regex.test(valuesUser[i]);
        let color = "#2D232380"
        if(!isValid) { color = "red"; }
        clonValidateObjects[i] = {...clonValidateObjects[i], isValid: isValid, border: {...clonValidateObjects[i].border, borderColor: color} };
    }
    setValidateObjects(clonValidateObjects);
    console.log(clonValidateObjects);
}

export function FormRegistration({vision, setVision, setVisionOtherForm})
{
    const [user, setUser] = useState({name: "", surname: "", tel: "", email: "", pswrd: ""});
    const validate = [
        "^[a-zA-Zа]{3,20}$",
        "^[a-zA-Z]{3,20}$",
        "^\\+?[0-9]{10,15}$",
        "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[A-Za-z\\d]{6,}$"
    ]
    const [validateObjects, setValidateObjects] = useState(validate.map((pattern) => ({
        pattern,
        isValid: true,
        border: {borderColor: "#2D232380", borderWidth: "0.5px", borderStyle: "solid "},
    })));
    const inputsData = [
        ["Введіть своє ім'я кирилицею", "name", "Ім'я"],
        ["Введіть своє прізвище кирилицею", "surname", "Прізвище"],
        ["Введіть номер мобільного телефону", "tel", "Номер телефону"],
        ["Введіть свою ел. пошту", "email", "Ел. пошта"]
    ];
    return (
    <Modal className="formReg form modal-dialog-centered" onHide={() => setVision(false)} show={vision} backdrop={true} backdropClassName="form-backdrop">
        <Modal.Body className="" >
            <form className="leftPartAuthForm" onSubmit={(e) => {e.preventDefault(); submitForm(user, validate, validateObjects, setValidateObjects)}}>
                <div>
                    <p>Реєстрація</p>
                    <div className="divInputsForm" >
                        {inputsData.map((el, i) => (
                            <Input key={i} state={user} setState={setUser} validate={validateObjects[i]} textInvalid={el[0]} nameElState={el[1]} placeholder={el[2]} />
                        ))}
                        <div>
                            <Input state={user} setState={setUser} validate={validateObjects[validateObjects.length - 1]} nameElState="pswrd" placeholder="Придумайте пароль" img="/resourses/forms/passwordVision.svg"/>
                            <p className="descForm">Пароль повинен складатися з не менш ніж 6 символів, містити цифри та латинські літери, у тому числі великі, і не повинен збігатися з ім'ям та ел. поштою</p>
                        </div>
                        
                        
                    </div>
                </div>
                <div className="divButton">
                    <p className="descForm">Реєструючись, ви погоджуєтеся з угодою користувача</p>
                    <Button type="submit" className="btn btn-success">Увійти</Button>
                </div>
                
                <p className="registrButton" onClick={() => {setVision(false); setVisionOtherForm(true)}} >Я вже зареєстрований</p>
            </form>
            <img src="/resourses/forms/Or.svg"></img>
            <div className="rightPartAuthForm">
                <p>Увійти як користувач</p>
                <LogoText img="/resourses/forms/facebook.svg" text="Facebook" />
                <LogoText img="/resourses/forms/google.svg" text="Google" />
            </div>
        </Modal.Body>
    </Modal>
    )
}
export function FormAuthorization({vision, setVision, setVisionOtherForm})
{
    const [user, setUser] = useState({emailOrTel: "", pswrd: ""});
    return (
        <Modal className="form modal-dialog-centered" onHide={() => setVision(false)} show={vision} backdrop={true}>
            <Modal.Body className="">
                <form className="leftPartAuthForm">
                    
                        <p>Вхід</p>
                        <div className="divInputsForm">
                            <Input state={user} setState={setUser} nameElState="emailOrTel" placeholder="Ел. пошта або телефон"/>
                            <Input state={user} setState={setUser} nameElState="pswrd" placeholder="Пароль" img="/resourses/forms/passwordVision.svg"/>
                            <div className="divForgotPassword">
                                <label>
                                    <input type="checkbox"></input>
                                    Запам'ятати мене
                                </label>
                                <Link>Нагадати пароль</Link>
                            </div>
                            
                        </div>
                    <Button className="btn btn-success">Увійти</Button>
                    
                    <p className="registrButton" onClick={() => {setVision(false); setVisionOtherForm(true)}}>Зареєструватися</p>
                </form>
                <img src="/resourses/forms/Or.svg"></img>
                <div className="rightPartAuthForm">
                    <p>Увійти як користувач</p>
                    <LogoText img="/resourses/forms/facebook.svg" text="Facebook" />
                    <LogoText img="/resourses/forms/google.svg" text="Google" />
                </div>
            </Modal.Body>
        </Modal>
    )
}
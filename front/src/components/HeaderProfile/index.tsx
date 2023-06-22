import Logo from "../../assets/LogoMotorsShop.png";
import { useContext, useState } from "react";
import { ConteinerHeader } from "../Header/style";
import { ConteinerButtonHeaderProfile, ButtonInitials, ButtonName } from "./style";
import { useNavigate } from "react-router-dom";
import { ContextLogin } from "../../contexts/LoginContext/LoginContex";
import { ModalMenuProfile } from "../ModalMenuProfile";

const HeaderProfile = () => {

    const { user } = useContext(ContextLogin);
    const navigate = useNavigate();
    const [modalOpenMenuProfile, setModalOpenMenuProfile] = useState(false);

    const userNameHeader1 = user?.name.split(" ");

    const userNameHeader2 = `${userNameHeader1 ? userNameHeader1[0] : ""} ${
      userNameHeader1 ? userNameHeader1[1] : ""
    }`;

    const Menu = () => {
        if(!modalOpenMenuProfile){
            setModalOpenMenuProfile(true);
        }else {
            setModalOpenMenuProfile(false);
        }
    };

    return (
        <ConteinerHeader>
            <ModalMenuProfile modalOpenMenuProfile={modalOpenMenuProfile} setModalOpenMenuProfile={setModalOpenMenuProfile}/>
            <div onClick={() => navigate("/")}>
                <img src={Logo} alt="Logo" />
            </div>

            <ConteinerButtonHeaderProfile >
                <ButtonInitials onClick={() => Menu()}>
                    {userNameHeader1 ? userNameHeader1[0][0] : ""}
                    {userNameHeader1 ? userNameHeader1[1][0] : ""}
                </ButtonInitials>
                <ButtonName onClick={() => Menu()}>{userNameHeader2}</ButtonName>
            </ConteinerButtonHeaderProfile>
        </ConteinerHeader>
    );
};

export { HeaderProfile };

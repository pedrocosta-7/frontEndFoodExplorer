import { Container } from "./styles";
import Vector from "../../assets/Vector.png";
import Polygon from "../../assets/Polygon.png";
import Frame from "../../assets/Frame.png";
import { Input } from "../input";
import { Button } from "../button";
import { Title } from "../title";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

import SignOut from "../../assets/SignOut.png";

export function HeaderHome({ isAdmin, titleOfButton, OnClick }) {
  const {signOut} = useAuth();

  function handleSignOut(){
    signOut();
    navigate("/")
  }


  const navigate = useNavigate();

  function handleClickToMenu() {
    navigate("/menu");
  }
  function handleClickToDish() {
    navigate("/dish");
  }

  function handleClickToDishAdmin() {
    navigate("/dishadmin");
  }
  function handleClickToMenuAdmin() {
    navigate("/menuadmin");
  }

  return (
    <Container>
      <button
        id="imgOnlyMobileLeft"
        onClick={() => {
          if (isAdmin) {
            handleClickToMenuAdmin();
          } else {
            handleClickToMenu();
          }
        }}
      >
        <img src={Frame} />
      </button>
      <div>
        <div id="titleOfHeader">
          <img src={Polygon} />
          <h1>food explorer</h1>
        </div>
        {isAdmin && <span>admin</span>}
        <div id="inputOfHeader">
          <Input
            id="inputOnlyDesk"
            placeholder="Busque por pratos ou ingredientes"
          />
        </div>
        <div id="buttonOfHeader">
          <Button
            title={titleOfButton}
            heightOfButton="48px"
            onClick={OnClick}
          />
        </div>
        <div id="buttonSignOutOfHeader" onClick={handleSignOut}>
          <button>
            <img src={SignOut} />
          </button>
        </div>
      </div>
      <button
        id="imgOnlyMobileRight"
        onClick={() => {
          if (isAdmin) {
            handleClickToDishAdmin();
          } else {
            handleClickToDish();
          }
        }}
      >
        <img src={Vector} />
      </button>
    </Container>
  );
}

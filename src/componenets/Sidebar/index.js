import React from "react";
import {
  SideBarContainer,
  Icon,
  CloseIcon,
  SideBarWrapper,
  SideBarMenu,
  SideBarLink,
  Button,
} from "./SideBarElements";

const SideBar = ({ isOpen, toggle }) => {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SideBarWrapper>
        <SideBarMenu>
          <SideBarLink to="home" onClick={toggle} smooth={true} offset={-80}>
            בית
          </SideBarLink>
          <SideBarLink to="gallery" onClick={toggle} smooth={true} offset={-80}>
            גלריה
          </SideBarLink>
          <SideBarLink to="confirm" onClick={toggle} smooth={true} offset={-80}>
            אישור הגעה
          </SideBarLink>
          <SideBarLink to="map" onClick={toggle} smooth={true} offset={-80}>
            מפה והסעות
          </SideBarLink>
          <Button
            to={{
              pathname:
                "https://calendar.google.com/event?action=TEMPLATE&tmeid=NTh1cmdqbzk5N2duMjN2M2ZzbWM4OWQ4YXIgYXJpa3oxNUBt&tmsrc=arikz15%40gmail.com",
            }}
            target="_blank"
          >
            שמירת תאריך ביומן
          </Button>
        </SideBarMenu>
      </SideBarWrapper>
    </SideBarContainer>
  );
};

export default SideBar;

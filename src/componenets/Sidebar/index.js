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
          <SideBarLink
            to="invitation"
            onClick={toggle}
            smooth={true}
            offset={-80}
          >
            הזמנה
          </SideBarLink>
          <SideBarLink to="confirm" onClick={toggle} smooth={true} offset={-80}>
            אישור הגעה
          </SideBarLink>
          <SideBarLink to="gift" onClick={toggle} smooth={true} offset={-80}>
            מתנה באשראי
          </SideBarLink>
          <SideBarLink to="map" onClick={toggle} smooth={true} offset={-80}>
            מפה והסעות
          </SideBarLink>
          <SideBarLink to="gallery" onClick={toggle} smooth={true} offset={-80}>
            גלריה
          </SideBarLink>
          <Button
            to={{
              pathname:
                "https://calendar.google.com/event?action=TEMPLATE&tmeid=NTRpZDFkNXFiODhqZXU4NjBzbHVqaGJkMWggMmloZ2pkbTBwcXRkNjdzcW5mNDBhNGJsaWtAZw&tmsrc=2ihgjdm0pqtd67sqnf40a4blik%40group.calendar.google.com",
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

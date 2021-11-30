import React, { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

import {
  SectionContainer,
  InputContainer,
  Input,
  ButtonsContainer,
  LabelContainer,
  Label,
  QuantityButton,
  H1,
  H3,
} from "./RsvpElements";

import { Button } from "../ButtonElement";
import { Button as STDButton } from "./RsvpElements";
import colors from "../colors";
const RsvpSection = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [isMessageDisplayed, setMessageDisplay] = useState(false);
  const [messageToDisplay, setMessageToDisplay] = useState();
  const [quantityBoolArray, setQuantityBoolArray] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [loading, setLoading] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");

  const addNewApproval = () => {
    const data = {
      firstName: firstName.trim(),
      familyName: lastName.trim(),
      quantity: quantity,
    };

    var validFields = true;

    if (quantity === 0) {
      validFields = false;
      setErrorMessage("נא לבחור כמות מוזמנים");
    }

    if (lastName === "") {
      validFields = false;
      setErrorMessage("שם משפחה אינו יכול להיות ריק");
    }

    if (firstName === "") {
      validFields = false;
      setErrorMessage("שם פרטי אינו יכול להיות ריק");
    }

    if (validFields) {
      setLoading(true);
      setErrorMessage("");
      fetch("https://arikz-rsvp.herokuapp.com/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          setLoading(false);
          setMessageToDisplay("אישור הגעה נשלח בהצלחה");
          setMessageDisplay(true);
        })
        .catch((error) => {
          console.error("Error:", error);
          setLoading(false);
          setMessageToDisplay(
            ".אישור הגעה לא נשלח כתוצאה משגיאה, נסו שנית מאוחר יותר"
          );
          setMessageDisplay(true);
        });
    }
  };

  const onClickQuantityButton = (index) => {
    const tempArray = [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ];
    tempArray[index] = true;
    setQuantity(index + 1);
    setQuantityBoolArray(tempArray);
  };

  return (
    <>
      {isMessageDisplayed ? (
        <SectionContainer id="confirm">
          <H3>{messageToDisplay}</H3>
          <STDButton
            to={{
              pathname:
                "https://calendar.google.com/event?action=TEMPLATE&tmeid=NTh1cmdqbzk5N2duMjN2M2ZzbWM4OWQ4YXIgYXJpa3oxNUBt&tmsrc=arikz15%40gmail.com",
            }}
            target="_blank"
          >
            שמירת תאריך ביומן
          </STDButton>
        </SectionContainer>
      ) : (
        <SectionContainer id="confirm">
          <H1>אישור הגעה</H1>
          <InputContainer>
            <Input
              placeholder="שם פרטי"
              onChange={(textInput) => {
                setFirstName(textInput.target.value);
              }}
            />
          </InputContainer>
          <InputContainer>
            <Input
              placeholder="שם משפחה"
              onChange={(textInput) => {
                setLastName(textInput.target.value);
              }}
            />
          </InputContainer>
          <LabelContainer>
            <Label>כמות אנשים מגיעים</Label>
          </LabelContainer>
          <ButtonsContainer>
            <QuantityButton
              clicked={quantityBoolArray[1 - 1]}
              onClick={() => onClickQuantityButton(1 - 1)}
            >
              1
            </QuantityButton>
            <QuantityButton
              clicked={quantityBoolArray[2 - 1]}
              onClick={() => onClickQuantityButton(2 - 1)}
            >
              2
            </QuantityButton>
            <QuantityButton
              clicked={quantityBoolArray[3 - 1]}
              onClick={() => onClickQuantityButton(3 - 1)}
            >
              3
            </QuantityButton>
            <QuantityButton
              clicked={quantityBoolArray[4 - 1]}
              onClick={() => onClickQuantityButton(4 - 1)}
            >
              4
            </QuantityButton>
            <QuantityButton
              clicked={quantityBoolArray[5 - 1]}
              onClick={() => onClickQuantityButton(5 - 1)}
            >
              5
            </QuantityButton>
          </ButtonsContainer>
          <ButtonsContainer>
            <QuantityButton
              clicked={quantityBoolArray[6 - 1]}
              onClick={() => onClickQuantityButton(6 - 1)}
            >
              6
            </QuantityButton>
            <QuantityButton
              clicked={quantityBoolArray[7 - 1]}
              onClick={() => onClickQuantityButton(7 - 1)}
            >
              7
            </QuantityButton>
            <QuantityButton
              clicked={quantityBoolArray[8 - 1]}
              onClick={() => onClickQuantityButton(8 - 1)}
            >
              8
            </QuantityButton>
            <QuantityButton
              clicked={quantityBoolArray[9 - 1]}
              onClick={() => onClickQuantityButton(9 - 1)}
            >
              9
            </QuantityButton>
            <QuantityButton
              clicked={quantityBoolArray[10 - 1]}
              onClick={() => onClickQuantityButton(10 - 1)}
            >
              10
            </QuantityButton>
          </ButtonsContainer>
          <Button onClick={addNewApproval}>אישור הגעה</Button>
          <LabelContainer>
            <Label>{ErrorMessage}</Label>
          </LabelContainer>
          <ClipLoader color={colors.accent} loading={loading} size={30} />
        </SectionContainer>
      )}
    </>
  );
};

export default RsvpSection;

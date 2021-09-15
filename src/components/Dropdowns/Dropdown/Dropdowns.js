import React from "react";
import "./Dropdowns.css";
import { BsChevronDown } from "react-icons/bs";
import Checkbox from "components/Checkbox/Checkbox";
import Button from "components/Buttons/FollowButton/FollowButton";
import Search from "components/SearchBars/Search/Search";

function Dropdowns(props) {
  const {
    btnTitle,
    width,
    checkBoxes,
    searchBar = false,
    dropdownWidth,
    showRightSide,
  } = props;
  const [showDropdown, setShowDropdown] = React.useState(false);
  const menuRef = React.useRef();

  React.useEffect(() => {
    const handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div ref={menuRef} className="dropdown">
      <div
        onClick={() => setShowDropdown(!showDropdown)}
        style={{ width: width ? width : "fit-content" }}
        className={showDropdown ? "dropdown_btn showMenu" : "dropdown_btn"}
      >
        <p>{btnTitle}</p>
        <div
          className={
            showDropdown ? "dropdown_btn_icon rotateIcon" : "dropdown_btn_icon "
          }
        >
          <BsChevronDown />
        </div>
      </div>
      <div>
        {showDropdown ? (
          props.children ? (
            <div
              className={`dropdown_menu_2 ${
                dropdownWidth ? "dropdownWidth" : ""
              }`}
            >
              <div>{props.children}</div>

              {showRightSide ? (
                <div className="dropdown_menu">
                  {searchBar ? (
                    <div className="mb-20">
                      <Search style={{ width: "100%" }} />
                    </div>
                  ) : (
                    ""
                  )}
                  {checkBoxes ? (
                    <div className="dropdown_menu_checkboxes">
                      {checkBoxes.map((item, index) => (
                        <Checkbox title={item} />
                      ))}
                    </div>
                  ) : (
                    ""
                  )}
                  <div className="dropdown_menu_btns">
                    <Button
                      title="Cancel"
                      background="white"
                      border="none"
                      color="#6E7077"
                      onPress={() => setShowDropdown(false)}
                    />
                    <Button
                      title="Show Results"
                      px="20px"
                      py="12px"
                      border="none"
                      background="#33A2D2"
                      color="white"
                    />
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          ) : (
            <div className="dropdown_menu">
              {searchBar ? (
                <div className="mb-20">
                  <Search style={{ width: "100%" }} />
                </div>
              ) : (
                ""
              )}

              {checkBoxes ? (
                <div className="dropdown_menu_checkboxes">
                  {checkBoxes.map((item, index) => (
                    <Checkbox title={item} />
                  ))}
                </div>
              ) : (
                ""
              )}
              <div className="dropdown_menu_btns">
                <Button
                  title="Cancel"
                  background="white"
                  border="none"
                  color="#6E7077"
                  onPress={() => setShowDropdown(false)}
                />
                <Button
                  title="Show Results"
                  px="20px"
                  py="12px"
                  border="none"
                  background="#33A2D2"
                  color="white"
                />
              </div>
            </div>
          )
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Dropdowns;

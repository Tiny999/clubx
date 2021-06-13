import React from "react";
import { Link } from "react-router-dom";
import Sheet from "react-modal-sheet";
import { Button } from "@material-ui/core";
import Avatar from "../../components/Avatar/Avatar";

import "./Sheets.css";

const ProfileImageSheet = () => {
  return (
    <>
      <Sheet isOpen>
        <Sheet.Container>
          <Sheet.Header className="sheet-header">
            <div className="text-center">
              <h4>Create your profile</h4>
            </div>
          </Sheet.Header>
          <Sheet.Content>
            <div className="sheet-content">
              <div className="sheet-step text-center">
                <h5>STEP 2 OF 3</h5>
              </div>
              <div className="sheet-intro text-center">
                <h3>Update Profile Picture</h3>
                <p>
                  Add a picture that shows your face. Don’t forget to add a
                  smile 😊
                </p>
              </div>
              <div className="mt-30 text-center">
                <Avatar size="md" />
              </div>
              <Button
                variant="contained"
                fullWidth
                color="primary"
                type="submit"
                size="large"
                className="mt-20"
              >
                Upload a Picture
              </Button>

              <div className="mt-20 text-center">
                <Link to="/avatars">Use Avatar</Link>
              </div>
            </div>
          </Sheet.Content>
        </Sheet.Container>

        <Sheet.Backdrop />
      </Sheet>
    </>
  );
};

export default ProfileImageSheet;

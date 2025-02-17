"use client";
import { Excalidraw, LiveCollaborationTrigger, MainMenu, WelcomeScreen, convertToExcalidrawElements } from "@excalidraw/excalidraw";
import { ExcalidrawLogo } from "./ExcalidrawLogo";
import { useState } from "react";
//import '@excalidraw/excalidraw/index.css';

const WhiteBoard: React.FC = () => {
  const [excalidrawAPI, setExcalidrawAPI] = useState(null);
  const [isCollaborating, setIsCollaborating] = useState<boolean>(true);
  console.info(convertToExcalidrawElements([{
    type: "rectangle",
    id: "rect-1",
    width: 186.47265625,
    height: 141.9765625,
    x: 0,
    y: 0,
  },]));
  return (
    <div style={{ height: "43rem" }}>
      {/* <p style={{ fontSize: "16px" }}>
        Selecting the checkbox to see the collaborator count
      </p>
      <label style={{ fontSize: "16px", fontWeight: "bold" }}>
        <input
          type="checkbox"
          checked={isCollaborating}
          onChange={() => {
            if (!isCollaborating) {
              const collaborators = new Map();
              collaborators.set("id1", {
                username: "Doremon",
                avatarUrl: "../../../../img/doremon.png",
              });
              collaborators.set("id3", {
                username: "Pika",
                avatarUrl: "../../../../img/pika.jpeg",
              });
              excalidrawAPI.updateScene({ collaborators });
            } else {
              excalidrawAPI.updateScene({
                collaborators: new Map(),
              });
            }
            setIsCollaborating(!isCollaborating);
          }}
        />
        Show Collaborators
      </label> */}
      <Excalidraw
      //  renderTopRightUI={() => {
      //    return (
      //      <LiveCollaborationTrigger
      //        isCollaborating={isCollaborating}
      //        onSelect={() => {
      //          window.alert("You clicked on collab button");
      //          setIsCollaborating(true);
      //        }}
      //      />
      //    );
      //  }}
      >
        <MainMenu>
            <MainMenu.DefaultItems.LoadScene />
            <MainMenu.DefaultItems.Export />
            <MainMenu.DefaultItems.SaveAsImage/>
            <MainMenu.DefaultItems.ClearCanvas />
            <MainMenu.DefaultItems.ToggleTheme/>
            <MainMenu.DefaultItems.Help />
            <MainMenu.DefaultItems.ChangeCanvasBackground />
          <MainMenu.Group title="Custom Links">
            <MainMenu.ItemLink href="https://createstudio.app">Sign Up</MainMenu.ItemLink>
          </MainMenu.Group>
        </MainMenu>
        <WelcomeScreen>
          <WelcomeScreen.Hints.MenuHint>
             Export,preference and more...
          </WelcomeScreen.Hints.MenuHint>
          <WelcomeScreen.Hints.ToolbarHint>
            Pick a tool and start drawing!
          </WelcomeScreen.Hints.ToolbarHint>
          <WelcomeScreen.Center>
            <WelcomeScreen.Center.Logo>
              <ExcalidrawLogo withText />
            </WelcomeScreen.Center.Logo>
            <WelcomeScreen.Center.Heading>
              All your data saved locally in your browser.
            </WelcomeScreen.Center.Heading>
            <WelcomeScreen.Center.Menu/>
          </WelcomeScreen.Center>
          <WelcomeScreen.Hints.HelpHint>
            Shortcuts & help
          </WelcomeScreen.Hints.HelpHint>
        </WelcomeScreen>
      </Excalidraw>
    </div>
  );
};
export default WhiteBoard;
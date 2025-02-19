"use client";
import { Excalidraw, MainMenu, WelcomeScreen } from "@excalidraw/excalidraw";
import { ExcalidrawLogo } from "./ExcalidrawLogo";
import Cookies from "js-cookie";
import { useAuth } from "@/context/AuthContext";
const WhiteBoard: React.FC = () => {
  const auth = useAuth();
  if (!auth) return <p>Redirecting...</p>;
  const { user, loading } = auth;
  if (loading) return <p>Loading...</p>;
  if (!user) return <p>Redirecting...</p>;
  return (
    
    <div style={{ height: "100vh" }}>
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
            { user ? <MainMenu.ItemLink href={process.env.NEXT_PUBLIC_API_URL || "#"}>Dashboard</MainMenu.ItemLink>  : <MainMenu.ItemLink href={process.env.NEXT_PUBLIC_API_URL || "#"}>Sign up</MainMenu.ItemLink>}
            
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
            { user && <h2>Welcome {user.name}!</h2>}
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
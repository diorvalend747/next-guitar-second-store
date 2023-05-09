import "styles/globals.css";

import Nav from "components/Nav";
import Provider from "components/Provider";

export const metadata = {
  title: "GuitarRoom",
  description: "Platform Jual Beli Gitar Bekas",
  icons: {
    icon: "/guitar-logo.png",
    type: "image/png",
  },
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <body>
      <Provider>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">
          <Nav />
          {children}
        </main>
      </Provider>
    </body>
  </html>
);

export default RootLayout;

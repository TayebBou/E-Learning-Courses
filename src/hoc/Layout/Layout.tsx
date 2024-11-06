import styles from "./Layout.module.css";
import { FC, ReactNode } from "react";
import Toolbar from "../../containers/Navigation/Toolbar/Toolbar";
import Footer from "../../components/Footer/Footer";

type LayoutProps = {
  children: ReactNode;
};

const layout: FC<LayoutProps> = ({ children }) => (
  <>
    <Toolbar />
    <main className={styles["Content"]}>{children}</main>
    <Footer />
  </>
);

export default layout;

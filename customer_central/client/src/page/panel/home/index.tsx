import Component from "@/class/component";
import SideBar from "./side_bar";
import TopBar from "./top_bar";

class PanelHomePage extends Component {
    element: T.Component = PanelHomePage

    static build(): JSX.Element {
        return <>
            <TopBar />
            <SideBar />
        </>
    }
}

export default PanelHomePage

import Component from "@/class/component";
import TopBar from "./top_bar";

class PanelHomePage extends Component {
    element: T.Component = PanelHomePage

    static build(): JSX.Element {
        return <>
            <TopBar />
        </>
    }
}

export default PanelHomePage

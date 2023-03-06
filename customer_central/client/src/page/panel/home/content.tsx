import Component from "@/class/component";
import { Box, Toolbar } from "@mui/material";

class Content extends Component {
    element: T.Component<{}> = Content

    static build(props: any): JSX.Element {
        return <>
            <Box component={"main"} sx={{ flexGrow: 1, p: 8 }}>
                <Toolbar />
                Content
            </Box>
        </>
    }
}

export default Content

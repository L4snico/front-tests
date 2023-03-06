import React from "react"

const PanelContext = React.createContext({
    side_bar: {
        size: "normal" as "normal" | "small",
        toggleSize: () => {},
    }
})

export default PanelContext

import React from "react"

const PanelContext = React.createContext({
    side_bar: {
        open: true,
        toggleOpen: () => {},
    }
})

export default PanelContext

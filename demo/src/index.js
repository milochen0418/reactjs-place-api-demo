import React from "react"
import {render} from "react-dom"

import GoogleSuggest from "./components/GoogleSuggest.js"
const Demo = () => <GoogleSuggest />

// eslint-disable-next-line
render(<Demo />, document.querySelector("#demo"))

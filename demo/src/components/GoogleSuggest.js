import PropTypes from "prop-types"
import React from "react"
import ReactGoogleMapLoader from "react-google-maps-loader"
import ReactGooglePlacesSuggest from "../../../src"

const API_KEY = "AIzaSyBm7eiOmjgp-LHVQf6u4ujXbE9xaMUBXgc" //key of dev
//const API_KEY="AIzaSyDuXUhA04tCVEDz5WZ6pTSirnkbdy4hGlk" //key of product
//The key is from https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete
class GoogleSuggest extends React.Component {
  state = {
    search: "",
    value: "",
  }

  handleInputChange(e) {
    this.setState({search: e.target.value, value: e.target.value})
  }

  handleSelectSuggest(suggest) {
    console.log(suggest) // eslint-disable-line
    this.setState({search: "", value: suggest.formatted_address})
  }

  render() {
    const {search, value} = this.state
    return (
      <ReactGoogleMapLoader
        params={{
          key: API_KEY,
          libraries: "places,geocode",
        }}
        render={googleMaps =>
          googleMaps && (
            <div>
              <ReactGooglePlacesSuggest
                autocompletionRequest={{input: search}}
                googleMaps={googleMaps}
                onSelectSuggest={this.handleSelectSuggest.bind(this)}
              >
                <input
                  type="text"
                  value={value}
                  placeholder="Search a location"
                  onChange={this.handleInputChange.bind(this)}
                />
              </ReactGooglePlacesSuggest>
            </div>
          )
        }
      />
    )
  }
}

GoogleSuggest.propTypes = {
  googleMaps: PropTypes.object,
}

export default GoogleSuggest

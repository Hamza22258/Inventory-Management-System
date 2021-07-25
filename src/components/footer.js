import React, { Component } from "react";
import Chart from "react-google-charts";

class Footer extends Component {
    render() {
        return ( <footer>
                <div class = 'bottom-details' >
                    <div class = 'bottom_text' >
                        <span class = 'copyright_text' > { " " }Copyright© 2021 
                            < a href = '#' > Shoppint Mart. </a>All rights reserved 
                        </span> 
                        <span class = 'policy_terms' >
                            <a href = '#' > Privacy policy </a>{" "} 
                            <a href = '#' > Terms & condition </a>{" "} 
                        </span > { " " } 
                    </div>{" "} 
                </div> { " " } 
            </footer>
        );
    }
}

export default Footer;
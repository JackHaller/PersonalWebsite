import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import aboutMeStyle from "assets/jss/material-kit-react/views/landingPageSections/aboutMeStyle.jsx";

class AboutMe extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem cs={12} sm={12} md={8}>
            <h2 className={classes.title}>About Me</h2>
            <h4 className={classes.description}>
                I'm a recent graduate of the University of Auckland with a BSc in Computer Science and a BSc(Hons) in Computer Science. My main areas of interest are web development
                and video game development with a focus on virtual reality.
            </h4>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(aboutMeStyle)(AboutMe);

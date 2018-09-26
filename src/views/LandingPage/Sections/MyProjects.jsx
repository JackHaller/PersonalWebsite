import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import projectStyle from "assets/jss/material-kit-react/views/landingPageSections/projectStyles.jsx";

import project1 from "assets/img/projects/user.png";
import project2 from "assets/img/projects/website.png";
import project3 from "assets/img/projects/test.png"; 

class TeamSection extends React.Component {
  render() {
    const { classes } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    return (
      <div className={classes.section}>
        <h2 className={classes.title}>Jack's Projects</h2>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <Card>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={project1} alt="ExergameImg" className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  HIIT-THE-ROAD
                  <br />
                  <small className={classes.smallTitle}>Game</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    An exergame that utilizes virtual reality headsets and an exerbike
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    href="https://github.com/JackHaller/HIIT-THE-ROAD"
                    target="_blank"
                    color="transparent"
                    className={classes.navLink}
                  >
                    <i className={" fab fa-github"} />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={project2} alt="WebsiteImage" className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Jacks Personal Home Page
                  <br />
                  <small className={classes.smallTitle}>Website</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    This is the website you are viewing right now made using <a href="https://reactjs.org">React</a> and <a href="https://material-ui.com">Material-UI</a>.
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    href="https://github.com/JackHaller"
                    target="_blank"
                    color="transparent"
                    className={classes.navLink}
                  >
                    <i className={"fab fa-github"} />
                  </Button>
                  <Button
                    href="https://github.com/JackHaller/CryptoTracker"
                    target="_blank"
                    color="transparent"
                    className={classes.navLink}
                  >
                    <i className={"fas fa-link"} />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={project3} alt="CryptoTrackerImg" className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Crypto Tracker
                  <br />
                  <small className={classes.smallTitle}>Website</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    A website that tracks the latest crypto currencies data.
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    href="https://github.com/JackHaller/CryptoTracker"
                    target="_blank"
                    color="transparent"
                    className={classes.navLink}
                  >
                    <i className={" fab fa-github"} />
                  </Button>
                  <Button
                    href="https://cryptotracker-bcd99.firebaseapp.com/"
                    target="_blank"
                    color="transparent"
                    className={classes.navLink}
                  >
                    <i className={"fas fa-link"} />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(projectStyle)(TeamSection);

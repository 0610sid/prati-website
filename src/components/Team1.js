import * as React from "react";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MemberCard from "./MemberCard";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

import SHAILEY_LOHAR from "../assets/Team/SHAILEY_LOHAR.JPG";
import AYUSH_DEORE from "../assets/Team/AYUSH_DEORE.jpg"
import DARSHAN_GUPTA from "../assets/Team/DARSHAN_GUPTA.jpg"
import OM_KEDAR from "../assets/Team/OM_KEDAR.PNG"
import GAURAVI_PATIL from "../assets/Team/GAURAVI_PATIL.jpg"
import SOHEL_TADVI from "../assets/Team/SOHEL_TADVI.HEIC"

const useTabStyles = makeStyles({
  root: {
    justifyContent: "center",
  },
  scroller: {
    flexGrow: "0",
  },
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function Team1() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const classes = useTabStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ maxWidth: "1000px", margin: "0 auto" }} data-aos="fade-up">
      <Tabs
        classes={{ root: classes.root, scroller: classes.scroller }}
        value={value}
        onChange={handleChange}
        indicatorColor="secondary"
        textColor="inherit"
        variant={"scrollable"}
        scrollButtons={true}
      >
        <Tab label="Secretaries & Treasurers" {...a11yProps(0)} />
      </Tabs>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item md>
              <MemberCard
                img={OM_KEDAR}
                post="Secretary"
                name="Om Kedar"
                color="purple"
              />
            </Grid>
            <Grid item md>
              <MemberCard
                img={GAURAVI_PATIL}
                post="Secretary"
                name="Gauravi Patil"
                color="purple"
              />
            </Grid>
            <Grid item md>
              <MemberCard
                img={SOHEL_TADVI}
                post="Secretary"
                name="Sohel Tadvi"
                color="purple"
              />
            </Grid>
            <Grid item md>
              <MemberCard
                img={SHAILEY_LOHAR}
                post="Treasurer"
                name="Sahiley Lohar"
                color="green"
              />
            </Grid>
            <Grid item md>
              <MemberCard
                img={AYUSH_DEORE}
                post="Treasurer"
                name="Ayush Deore"
                color="green"
              />
            </Grid>
            <Grid item md>
              <MemberCard
                img={DARSHAN_GUPTA}
                post="Treasurer"
                name="Darshan Gupta"
                color="green"
              />
            </Grid>

          </Grid>
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}

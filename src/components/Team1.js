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

import ADITYA_MHATRE from "../assets/Team/ADITYA_MHATRE.jpg";
import SAHIL_THAKKAR from "../assets/Team/SAHIL_THAKKAR.jpeg";
import RADHA_NAYSE from "../assets/Team/RADHA_NAYSE.jpg";
import ANANDITA_BUMMERKAR from "../assets/Team/ANANDITA_BUMMERKAR.jpg";
import NANDINI_BHOSALE from "../assets/Team/NANDINI_BHOSLE.jpg";
import MIHIR_GHANEKAR from "../assets/Team/MIHIR_GHANEKAR.JPG";

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
                img={NANDINI_BHOSALE}
                post="Secretary"
                name="Nandini Bhosale"
                color="purple"
              />
            </Grid>
            <Grid item md>
              <MemberCard
                img={MIHIR_GHANEKAR}
                post="Secretary"
                name="Mihir Ghanekar"
                color="purple"
              />
            </Grid>
            <Grid item md>
              <MemberCard
                img={ANANDITA_BUMMERKAR}
                post="Secretary"
                name="Anandita Bummerkar"
                color="purple"
              />
            </Grid>
            <Grid item md>
              <MemberCard
                img={SAHIL_THAKKAR}
                post="Treasurer"
                name="Sahil Thakkar"
                color="green"
              />
            </Grid>
            <Grid item md>
              <MemberCard
                img={RADHA_NAYSE}
                post="Treasurer"
                name="Radha Nayse"
                color="green"
              />
            </Grid>
            <Grid item md>
              <MemberCard
                img={ADITYA_MHATRE}
                post="Treasurer"
                name="Aditya Mhatre"
                color="green"
              />
            </Grid>

          </Grid>
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}

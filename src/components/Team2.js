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

import SUYASH from "../assets/Team/Suyash1.jpeg";
import ARNAV_ZUTSHI from "../assets/Team/ARNAV_ZUTSHI.jpg";
import MISHA_AZMI from "../assets/Team/MISHA_AZMI.jpg";
import DIVEN_SIRWANI from "../assets/Team/DIVEN_SIRWANI.jpeg";
import ROSHIT_DAHAT from "../assets/Team/ROSHIT_DAHAT.jpg";
import ARODA from "../assets/Team/ARODA.jpg";
import SANIA_SHAIKH from "../assets/Team/SANIA_SHAIKH.jpg";
import FARDEEN_KHAN from "../assets/Team/FAWDEEN_KHAN.jpg";
import UTKARSHA_TARMALE from "../assets/Team/UTKARSHA_TARMALE.jpg";
import SHEENA_DMELLO from "../assets/Team/SHEENA_DMELLO.jpg";
import OM_CHAJED from "../assets/Team/OM_CHAJED.jpg";
import RICHA_DESHPANDE from "../assets/Team/RICHA_DESHPANDE.webp";
import PRIYANKA_REDDY from "../assets/Team/PRIYANKA_REDDY.jpeg";
import SAEE_AMRUTKAR from "../assets/Team/SAEE_AMRUTKAR.jpeg";
import PRATHAMEYA_WALIMBE from "../assets/Team/PRATHAMEYA_WALIMBE.jpg";
import MOHIT_MAHNORI from "../assets/Team/MOHIT_MAHNORI.jpg";
import PRANAV_NAYAK from "../assets/Team/PRANAV_NAYAK.jpeg";
import HARSHAL_UBALE from "../assets/Team/HARSHAL_UBALE.jpg";
import JASH_BHATIA from "../assets/Team/JASH_BHATIA.jpeg";
import RUCHIT_SHAH from "../assets/Team/RUCHIT_SHAH.jpg";
import TANVI_BOTE from "../assets/Team/TANVI_BOTE.jpeg";

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

export default function Team2() {
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
    <Box sx={{ maxWidth: "1500px", margin: "0 auto" }} data-aos="fade-up">
      <Tabs
        classes={{ root: classes.root, scroller: classes.scroller }}
        value={value}
        onChange={handleChange}
        indicatorColor="secondary"
        textColor="inherit"
        variant={"scrollable"}
        scrollButtons={true}
      >
        <Tab label="Marketing" {...a11yProps(0)} />
        <Tab label="Public Relations" {...a11yProps(1)} />
        <Tab label="Sponsorship" {...a11yProps(2)} />
        <Tab label="Execution" {...a11yProps(2)} />
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
                color="purple"
                name="Utkarsha Tarmale"
                img={UTKARSHA_TARMALE}
                post="Marketing Head"
              />
            </Grid>
            <Grid item md>
              <MemberCard
                color="purple"
                name="Sania Shaikh"
                img={SANIA_SHAIKH}
                post="Marketing Head"
              />
            </Grid>
            <Grid item md>
              <MemberCard
                color="purple"
                name="Fardeen Khan"
                img={FARDEEN_KHAN}
                post="Marketing Head"
              />
            </Grid>
            <Grid item md>
              <MemberCard
                color="blue"
                name="Om Chajed"
                img={OM_CHAJED}
                post="Marketing Coordinator"
              />
            </Grid>
            <Grid item md>
              <MemberCard
                color="blue"
                name="Sheena Dmello"
                img={SHEENA_DMELLO}
                post="Marketing Coordinator"
              />
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item md>
              <MemberCard
                color="purple"
                name="Prathameya Walimbe"
                img={PRATHAMEYA_WALIMBE}
                post="Public Relations Head"
              />
            </Grid>
            <Grid item md>
              <MemberCard
                color="purple"
                name="Saee Amrutkar"
                img={SAEE_AMRUTKAR}
                post="Public Relations Head"
              />
            </Grid>
            <Grid item md>
              <MemberCard
                color="blue"
                name="Richa Deshpande"
                img={RICHA_DESHPANDE}
                post="Public Relations Coordinator"
              />
            </Grid>
            <Grid item md>
              <MemberCard
                color="blue"
                name="Priyanka Reddy"
                img={PRIYANKA_REDDY}
                post="Public Relations Coordinator"
              />
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item md>
              <MemberCard
                color="purple"
                name="Jash Bhatia"
                img={JASH_BHATIA}
                post="Sponsorship Head"
              />
            </Grid>
            <Grid item md>
              <MemberCard
                color="purple"
                name="Ruchit Shah"
                img={RUCHIT_SHAH}
                post="Sponsorship Head"
              />
            </Grid>
            <Grid item md>
              <MemberCard
                color="purple"
                name="Tanvi Bote"
                img={TANVI_BOTE}
                post="Sponsorship Head"
              />
            </Grid>
            <Grid item md>
              <MemberCard
                color="green"
                name="Pranav Nayak"
                img={PRANAV_NAYAK}
                post="Sponsorship Coordinator"
              />
            </Grid>
            <Grid item md>
              <MemberCard
                color="purple"
                name="Harshal Ubale"
                img={HARSHAL_UBALE}
                post="Sponsorship Coordinator"
              />
            </Grid>
            <Grid item md>
              <MemberCard
                color="green"
                name="Mohit Mahnori"
                img={MOHIT_MAHNORI}
                post="Sponsorship Coordinator"
              />
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item md>
              <MemberCard
                color="purple"
                name="Suyash Dammani"
                img={SUYASH}
                post="Execution Head"
              />
            </Grid>
            <Grid item md>
              <MemberCard
                color="purple"
                name="Soumya Arora"
                img={ARODA}
                post="Execution Head"
              />
            </Grid>
            <Grid item md>
              <MemberCard
                color="purple"
                name="Roshit Dahat"
                img={ROSHIT_DAHAT}
                post="Execution Head"
              />
            </Grid>
            <Grid item md>
              <MemberCard
                color="blue"
                name="Arnav Zutshi"
                img={ARNAV_ZUTSHI}
                post="Execution Coordinator"
              />
            </Grid>
            <Grid item md>
              <MemberCard
                color="blue"
                name="Diven Sirwani"
                img={DIVEN_SIRWANI}
                post="Execution Coordinator"
              />
            </Grid>
            <Grid item md>
              <MemberCard
                color="blue"
                name="Misha Azmi"
                img={MISHA_AZMI}
                post="Execution Coordinator"
              />
            </Grid>
          </Grid>
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}

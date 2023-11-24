// import * as React from "react";
// import SwipeableViews from "react-swipeable-views";
// import { useTheme } from "@mui/material/styles";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";
// import MemberCard from "./MemberCard";
// import { Grid } from "@mui/material";
// import { makeStyles } from "@mui/styles";



// const useTabStyles = makeStyles({
//   root: {
//     justifyContent: "center",
//   },
//   scroller: {
//     flexGrow: "0",
//   },
// });

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div role="tabpanel" hidden={value !== index} {...other}>
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// function a11yProps(index) {
//   return {
//     id: `full-width-tab-${index}`,
//     "aria-controls": `full-width-tabpanel-${index}`,
//   };
// }

// export default function Team3() {
//   const theme = useTheme();
//   const [value, setValue] = React.useState(0);

//   const classes = useTabStyles();

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   const handleChangeIndex = (index) => {
//     setValue(index);
//   };

//   return (
//     <Box sx={{ maxWidth: "1500px", margin: "0 auto" }} data-aos="fade-up">
//       <Tabs
//         classes={{ root: classes.root, scroller: classes.scroller }}
//         value={value}
//         onChange={handleChange}
//         indicatorColor="secondary"
//         textColor="inherit"
//         variant={"scrollable"}
//         scrollButtons={true}
//       >
//         <Tab label="Design" {...a11yProps(0)} />
//         <Tab label="Illuminati Co-ordinators" {...a11yProps(1)} />
//         <Tab label="Digital" {...a11yProps(2)} />
//       </Tabs>
//       <SwipeableViews
//         axis={theme.direction === "rtl" ? "x-reverse" : "x"}
//         index={value}
//         onChangeIndex={handleChangeIndex}
//       >
//         <TabPanel value={value} index={0} dir={theme.direction}>
//           <Grid
//             container
//             spacing={2}
//             alignItems="center"
//             justifyContent="center"
//           >
//             <Grid item md>
//               <MemberCard
//                 color="purple"
//                 name="Arya Dhumane"
//                 img={ARYA_DHUMANE}
//                 post="Design Head"
//               />
//             </Grid>
//             <Grid item md>
//               <MemberCard
//                 color="purple"
//                 name="Aditi Jadhav"
//                 img={ADITI_JADHAV}
//                 post="Design Coordinator"
//               />
//             </Grid>
//             <Grid item md>
//               <MemberCard
//                 color="purple"
//                 name="Balkrishna Gawde"
//                 img={BALKRISHNA_GAWDE}
//                 post="Design Coordinator"
//               />
//             </Grid>
//           </Grid>
//         </TabPanel>
//         <TabPanel value={value} index={1} dir={theme.direction}>
//           <Grid
//             container
//             spacing={2}
//             alignItems="center"
//             justifyContent="center"
//           >
//             <Grid item md>
//               <MemberCard
//                 img={RUSHIL_SHIVADE}
//                 post="Illuminati Co-ordinator"
//                 name="Rushil Shivade"
//                 color="blue"
//               />
//             </Grid>
//             <Grid item md>
//               <MemberCard
//                 img={KANAK_MESHRAM}
//                 post="Illuminati Co-ordinator"
//                 name="Kanak Meshram"
//                 color="blue"
//               />
//             </Grid>
//             <Grid item md>
//               <MemberCard
//                 img={TANIA_SHARMA}
//                 post="Illuminati Co-ordinator"
//                 name="Tania Sharma"
//                 color="blue"
//               />
//             </Grid>
//             <Grid item md>
//               <MemberCard
//                 img={BHAKTI_SHRAWAK}
//                 post="Illuminati Co-ordinator"
//                 name="Bhakti Shrawak"
//                 color="blue"
//               />
//             </Grid>
//           </Grid>
//         </TabPanel>
//         <TabPanel value={value} index={2} dir={theme.direction}>
//           <Grid
//             container
//             spacing={2}
//             alignItems="center"
//             justifyContent="center"
//           >
//             <Grid item md>
//               <MemberCard
//                 color="blue"
//                 name="Prem Nagpure"
//                 img={PREM_NAGPURE}
//                 post="Digital Head"
//               />
//             </Grid>
//             <Grid item md>
//               <MemberCard
//                 color="blue"
//                 name="Atharva Bandarkar"
//                 img={ATHARVA_BANDARKAR}
//                 post="Digital Head"
//               />
//             </Grid>
//             <Grid item md>
//               <MemberCard
//                 color="blue"
//                 name="Sanchit Patil"
//                 img={SANCHIT_PATIL}
//                 post="Digital Head"
//               />
//             </Grid>
//           </Grid>
//         </TabPanel>
//       </SwipeableViews>
//     </Box>
//   );
// }

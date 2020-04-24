import React from "react";
import { useStyles } from "./styles";
import { useSelector } from "react-redux";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import { _postMapEditsToCityIO } from "../../baseMap/baseMapUtils";
import {
    grasbrookGeoGridData,
    grasbrookGeoNetwork
} from "../../../scenarios/grasbrook/test.js";
import { geoGridData, geoNetwork } from "../../../scenarios/mockAPI/test.js";
// import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
// import ListItemText from "@material-ui/core/ListItemText";
// import settings from "../../../settings/settings.json";
// import Collapse from "@material-ui/core/Collapse";
// import ABMSubmenu from "./ABMSubmenu";
// import AccessSubmenu from "./AccessSubmenu";

function ScenariosMenu(props) {
    const classes = useStyles();

    const { handleToggle } = props;

    const cityioData = useSelector(state => state.CITYIO);

    const menuState = useSelector(state => state.MENU);

    const openScenario = (geoGridData, geoNetwork) => {
        console.log(geoNetwork);
        if (cityioData) {
            _postMapEditsToCityIO(
                geoGridData,
                cityioData.tableName,
                "/GEOGRIDDATA"
            );

            _postMapEditsToCityIO(
                geoNetwork,
                cityioData.tableName,
                "/GEONETWORK"
            );
        }
    };

    return (
        <Drawer
            className={classes.root}
            BackdropProps={{
                invisible: true
            }}
            classes={{
                paper: classes.paper
            }}
            anchor="left"
            open={menuState && menuState.includes("SCENARIOS")}
            onClose={handleToggle("SCENARIOS")}
        >
            <List className={classes.list}>
                <Typography variant="h5" className={classes.text} gutterBottom>
                    Scenarios
                </Typography>
                {cityioData.tableName === "mockAPI" && (
                    <ListItem
                        button
                        onClick={() => openScenario(geoGridData, geoNetwork)}
                    >
                        <Typography variant="h6">MockAPI</Typography>
                    </ListItem>
                )}
                {cityioData.tableName === "grasbrook" && (
                    <ListItem
                        button
                        onClick={() =>
                            openScenario(
                                grasbrookGeoGridData,
                                grasbrookGeoNetwork
                            )
                        }
                    >
                        <Typography variant="h6">Grasbrook</Typography>
                    </ListItem>
                )}
            </List>
        </Drawer>
    );
}

export default ScenariosMenu;

import * as ReactGA from "react-ga";

export const initGA = (id: string, location:any) => {
    ReactGA.initialize(id);
    ReactGA.pageview(location.pathname + location.search);
};

import * as ReactGA from "react-ga";

export const initGA = (id: string) => {
    ReactGA.initialize(id);
};

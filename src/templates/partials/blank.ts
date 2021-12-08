import { NfoSection, NfoSubsection } from "../../utils/NfoWriter";


export const blankNfoSubsectionData: NfoSubsection = {
    subheader: "",
    text: [""],
    textStyle: "center",
}

export const blankNfoSectionData: NfoSection = {
    header: "",
    sectionData: {
        subsections: [
            blankNfoSubsectionData,
        ],
    },
}

const defaultExports = {blankNfoSectionData, blankNfoSubsectionData}

export default defaultExports;

import mealCountLogo from "../../assets/images/mealCountLogo.png";
import cheapItLogo from "../../assets/images/cheapItLogo.png";
import ecoMealMarketLogo from "../../assets/images/ecoMealMarketLogo.png";

type Title = {
  main: string;
  sub?: string; 
};

type Section = {
  heading: string;
  subheading: string;
  items: string[];
};

type TreeInfoCardData = {
  icon: string;
  title?: Title;
  sections: Section[];
  iconClass?: string;
};

export const data1: TreeInfoCardData = {
  icon: mealCountLogo,
  title: { main: "Meal", sub: "Count" },
  sections: [
    {
      heading: "treeInfo.data1.sections.0.heading",
      subheading: "treeInfo.data1.sections.0.subheading",
      items: [
        "treeInfo.data1.sections.0.items.0",
        "treeInfo.data1.sections.0.items.1",
        "treeInfo.data1.sections.0.items.2",
        "treeInfo.data1.sections.0.items.3",
      ],
    },
    {
      heading: "treeInfo.data1.sections.1.heading",
      subheading: "treeInfo.data1.sections.1.subheading",
      items: [
        "treeInfo.data1.sections.1.items.0",
        "treeInfo.data1.sections.1.items.1",
        "treeInfo.data1.sections.1.items.2",
        "treeInfo.data1.sections.1.items.3",
      ],
    },
  ],
  iconClass: "container__icon-mealCount",
};

export const data2: TreeInfoCardData = {
  icon: cheapItLogo,
  title: { main: "Cheap", sub: "IT" },
  sections: [
    {
      heading: "treeInfo.data2.sections.0.heading",
      subheading: "treeInfo.data2.sections.0.subheading",
      items: [
        "treeInfo.data2.sections.0.items.0",
        "treeInfo.data2.sections.0.items.1",
        "treeInfo.data2.sections.0.items.2",
        "treeInfo.data2.sections.0.items.3",
        "treeInfo.data2.sections.0.items.4",
      ],
    },
    {
      heading: "treeInfo.data2.sections.1.heading",
      subheading: "treeInfo.data2.sections.1.subheading",
      items: [
        "treeInfo.data2.sections.1.items.0",
        "treeInfo.data2.sections.1.items.1",
        "treeInfo.data2.sections.1.items.2",
        "treeInfo.data2.sections.1.items.3",
      ],
    },
  ],
  iconClass: "container__icon-cheapIt",
};

export const data3: TreeInfoCardData = {
  icon: ecoMealMarketLogo,
  sections: [
    {
      heading: "treeInfo.data3.sections.0.heading",
      subheading: "treeInfo.data3.sections.0.subheading",
      items: [
        "treeInfo.data3.sections.0.items.0",
        "treeInfo.data3.sections.0.items.1",
        "treeInfo.data3.sections.0.items.2",
        "treeInfo.data3.sections.0.items.3",
      ],
    },
    {
      heading: "treeInfo.data3.sections.1.heading",
      subheading: "treeInfo.data3.sections.1.subheading",
      items: [
        "treeInfo.data3.sections.1.items.0",
        "treeInfo.data3.sections.1.items.1",
        "treeInfo.data3.sections.1.items.2",
        "treeInfo.data3.sections.1.items.3",
      ],
    },
  ],

  iconClass: "container__icon-ecoMealMarket",
};

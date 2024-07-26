import mealCountLogo from "../../assets/images/mealCountLogo.png";
import cheapItLogo from "../../assets/images/cheapItLogo.png";
import ecoMealMarketLogo from "../../assets/images/ecoMealMarketLogo.png";

type Title = {
  main: string;
  sub?: string; // Підзаголовок є необов'язковим
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
      heading: "For",
      subheading: "Fitness Enthusiasts",
      items: [
        "Maintain a balanced diet",
        "Exercise regularly",
        "Stay hydrated",
        "Get enough sleep",
      ],
    },
    {
      heading: "For",
      subheading: "Mental Wellness",
      items: [
        "Practice mindfulness",
        "Take breaks",
        "Connect with loved ones",
        "Seek professional help if needed",
      ],
    },
  ],
  iconClass: "icon_mealCount",
};

export const data2: TreeInfoCardData = {
  icon: cheapItLogo,
  title: { main: "Cheap", sub: "IT" },
  sections: [
    {
      heading: "For",
      subheading: "Consumers",
      items: [
        "Enjoy good food at less price",
        "Save your money",
        "Explore a world of deliciousness",
        "Save time and money for your next adventure",
        "Save the planet from excess waste",
      ],
    },
    {
      heading: "For",
      subheading: "Business",
      items: [
        "Explore a world of deliciousness",
        "Discover unique cuisines and local favourites just from your phone",
        "Save time and money for your next adventure",
        "Enjoy high-quality food finds",
      ],
    },
  ],
  iconClass: "icon_cheapIt",
};

export const data3: TreeInfoCardData = {
  icon: ecoMealMarketLogo,
  sections: [
    {
      heading: "For",
      subheading: "Entrepreneurs",
      items: [
        "Gain valuable insights",
        "Boost your business",
        "Connect with peers",
        "Learn from the best",
      ],
    },
    {
      heading: "For",
      subheading: "Investors",
      items: [
        "Find new opportunities",
        "Maximize returns",
        "Diversify portfolio",
        "Stay ahead of the market",
      ],
    },
  ],

  iconClass: "icon_ecoMealMarket",
};

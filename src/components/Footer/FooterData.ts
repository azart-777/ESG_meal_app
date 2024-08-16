interface FooterSection {
    title: string;
    links: string[];
  }
  
  export const footerSections: FooterSection[] = [
    {
      title: "footer.menu",
      links: [
        "footer.home",
        "footer.forClient",
        "footer.forBusiness",
        "footer.ourPartners",
        "footer.aboutUs"
      ]
    },
    {
      title: "footer.support",
      links: [
        "footer.contactUs",
        "footer.faqClients",
        "footer.faqBusiness",
        "footer.faqPartners"
      ]
    },
    {
      title: "footer.agreement",
      links: [
        "footer.privacyPolicy",
        "footer.business",
        "footer.clients",
        "footer.partners",
        "footer.termsAndConditions"
      ]
    },
    {
      title: "footer.map",
      links: ["footer.ukraine"]
    },
    {
      title: "footer.priceAndSubscriptions",
      links: ["footer.subscriptionsPlans"]
    },
    {
      title: "footer.media",
      links: ["footer.materialsForMedia"]
    }
  ];
  
type AppConfigType = {
  name: string;
  github: {
    title: string;
    url: string;
  };
  author: {
    name: string;
    url: string;
  };
};

export const appConfig: AppConfigType = {
  name: import.meta.env.VITE_APP_NAME ?? "VUKOSI MOYANE",
  github: {
    title: "Vukosi Moyane | Portfolio",
    url: "https://github.com/thefirsthero/developer-portfolio",
  },
  author: {
    name: "thefirsthero",
    url: "https://github.com/thefirsthero/",
  },
};

export const baseUrl = import.meta.env.VITE_BASE_URL ?? "";

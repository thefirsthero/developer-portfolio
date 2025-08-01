type AppConfigType = {
  name: string;
  github: {
    title: string;
    url: string;
  };
  linkedin: {
    title: string;
    url: string;
  };
  leetcode: {
    title: string;
    url: string;
  };
  author: {
    name: string;
    url: string;
  };
  formcarry: string;
};

export const appConfig: AppConfigType = {
  name: import.meta.env.VITE_APP_NAME ?? "VUKOSI MOYANE",
  github: {
    title: "Vukosi Moyane | Portfolio",
    url: "https://github.com/thefirsthero/",
  },
  linkedin: {
    title: "Vukosi Moyane | LinkedIn",
    url: "https://www.linkedin.com/in/vukosimoyane/",
  },
  leetcode: {
    title: "Vukosi Moyane | LeetCode",
    url: "https://leetcode.com/thefirsthero/",
  },
  author: {
    name: "thefirsthero",
    url: "https://github.com/thefirsthero/",
  },
  formcarry: "https://formcarry.com/s/IeZQilAc8Te",
};

export const baseUrl = import.meta.env.VITE_BASE_URL ?? "";

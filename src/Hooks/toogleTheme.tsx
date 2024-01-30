const applyTheme = (darkMode: boolean) => {
  const root = document.documentElement;
  const body = document.body;

  const lightTheme = {
    "--colorOne": "#fff",
    "--colorTwo": "#ededed",
    "--colorThree": "#111827",
    "--colorFour": "#c8cbd2",
    "--colorFive": "#0e142328",
    "--letterColorOne": "#172439",
    "--letterColorTwo": "#fff",
    "--letterColorThree": "#fff",
    "--linkTextShadow": "rgb(0, 0, 0)",
    "--downloadBackGround": "rgba(0, 0, 0, 0.776)",
    "--socialLinksBackGround": "#2e2e2e44",
  };

  const darkTheme = {
    "--colorOne": "#030712",
    "--colorTwo": "#111827",
    "--colorThree": "#fff",
    "--colorFour": "#374151",
    "--colorFive": "#0e1423",
    "--letterColorOne": "#fff",
    "--letterColorTwo": "#172439",
    "--letterColorThree": "#030712",
    "--linkTextShadow": "rgba(255, 255, 255, 0.8)",
    "--downloadBackGround": "#ffffffc9",
    "--socialLinksBackGround": "#ffffff44",
  };

  const theme = darkMode ? darkTheme : lightTheme;

  for (const [property, value] of Object.entries(theme)) {
    root.style.setProperty(property, value);
  }

  body.dataset.theme = darkMode ? "dark" : "light";
};

export default applyTheme;

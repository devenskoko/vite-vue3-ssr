const modulesFiles = import.meta.globEager("/locales/**/*.json");
const messages: Record<string, any> = {};

Object.keys(modulesFiles).forEach((key) => {
  const item = modulesFiles[key].default;
  const lang = key.split("/")[2];
  const localeName = key.split("/")[3].split(".")[0];

  if (!messages[lang]) {
    messages[lang] = {
      [localeName]: item,
    };
  } else {
    messages[lang][localeName] = item;
  }
});

export default messages;

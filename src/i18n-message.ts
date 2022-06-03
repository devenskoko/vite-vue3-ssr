const modulesFiles = import.meta.globEager("/locales/**/*.json");
const messages: Record<string, any> = {};
// eslint-disable-next-line no-restricted-syntax
for (const key in modulesFiles) {
  if ({}.hasOwnProperty.call(modulesFiles, key)) {
    const lang = key.split("/")[2];
    const localeName = key.split("/")[3].split(".")[0];
    if (!messages[lang]) {
      messages[lang] = {
        [localeName]: modulesFiles[key].default,
      };
    } else {
      messages[lang][localeName] = modulesFiles[key].default;
    }
  }
}

export default messages;

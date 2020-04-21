const importResources = (languages: string[], namespaces: string[]) => {
  const resources = {};

  for (const language of languages) {
    for (const namespace of namespaces) {
      const locale = require(`../../locales/${language}/${namespace}.json`);

      resources[language] = {
        ...resources[language],
        [namespace]: locale,
      };
    }
  }

  return resources;
};

export default importResources;

import { dockStart } from '@nlpjs/basic';

(async () => {
  const dock = await dockStart({ use: ['Basic'] });
  const nlp = dock.get('nlp');
  nlp.addCorpus('./corpus/birthday.json');
  await nlp.train();
  const response = await nlp.process('en', 'I should go now');
  console.log(response);
})();

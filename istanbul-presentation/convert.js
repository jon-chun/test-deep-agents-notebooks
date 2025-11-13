const pptxgen = require('pptxgenjs');
const html2pptx = require('/Users/jonc/.claude/plugins/marketplaces/anthropic-agent-skills/document-skills/pptx/scripts/html2pptx.js');
const path = require('path');

async function createPresentation() {
  const pptx = new pptxgen();
  pptx.layout = 'LAYOUT_16x9';
  pptx.author = 'Istanbul History Course';
  pptx.title = 'Istanbul: A Strategic Crossroads of Empires';

  const slides = [
    'slide01.html',
    'slide02.html',
    'slide03.html',
    'slide04.html',
    'slide05.html',
    'slide06.html',
    'slide07.html',
    'slide08.html',
    'slide09.html',
    'slide10.html',
    'slide11.html',
    'slide12.html'
  ];

  for (const slideFile of slides) {
    console.log(`Processing ${slideFile}...`);
    await html2pptx(slideFile, pptx);
  }

  await pptx.writeFile({ fileName: 'Istanbul-History.pptx' });
  console.log('Presentation created successfully: Istanbul-History.pptx');
}

createPresentation().catch(console.error);

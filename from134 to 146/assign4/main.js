let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/ig;

// https? => means if you write http or https reEx true;
// : => semicolon after htpps;
// \/\/ => backslash to make // run and reEx true;
// (?:[-\w]+\.)? => means if you write www. or not reEx true;
// ([-\w]+)=> means if you write any search engine reEx true;
// \. => means you should write . after search engine to reEx true;
// \w+ => means if you write any extension will reEx true;
// (?:\.\w+)?\/?.* => means more word after url ;




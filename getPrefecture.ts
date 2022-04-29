// deno run --allow-net getPrefecture.ts

// Set your RESAS API KEY
// $ export APIKEY=hogehoge
const APIKEY = Deno.env.get('APIKEY') as string;

const res = await fetch(
  'https://opendata.resas-portal.go.jp/api/v1/prefectures',
  {
    headers: {
      accept: 'application/json',
      'X-API-KEY': APIKEY,
    },
  }
);

const json = res.json();
const data = await json;
console.log(data.result);

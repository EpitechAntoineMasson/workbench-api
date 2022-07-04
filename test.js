const params = "description=Renseigner le niveau de fame PVP uniquement keyword=PVP_fame input=text title=Indiquez le montant de fame PVP"

const question = {
  keyword: '',
  title: '',
  required: true,
  description: '',
  input: 'text',
};

console.log(Object.keys(question));
console.log(params.slice(Object.keys(question)[0]));

Object.keys(question).map(k => {
  console.log(params.includes(k), params.indexOf(k));
  if (params.indexOf(k) > -1) console.log(params.substring(params.indexOf(k)))
});
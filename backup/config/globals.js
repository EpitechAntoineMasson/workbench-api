const Client = {
  value: {},
  
  set: obj => {
    Client.value = {...obj };
  },
  get: () => {
    return Client.value;
  }
};

const Globals = {
  Client,
};

export default Globals;
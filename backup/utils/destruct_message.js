const destruct_message = msg => {
  const arr = msg.split(' ');

  return { prefix: msg[0], cmd: arr[0].slice(1), params: arr.slice(1).join(' ') }
};

export default destruct_message;

//////////////////////////////
// List of Fedivri Servers  //
//////////////////////////////
export const serverList = ['tooot.im', 'kishkush.net'];

//////////////////////////////
//        Functions         //
//////////////////////////////

export const fetchTootsByServer = async (server) => {
  const res = await fetch(`https://${server}/api/v1/timelines/public?local=true`);
  const data = await res.json();
  return data;
};

export const fetchOldTootsByServer = async (server, pointer) => {
  const res = await fetch(`https://${server}/api/v1/timelines/public?local=true&max_id=${pointer}`);
  const data = await res.json();
  return data;
};
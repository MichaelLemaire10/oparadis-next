// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
};

// axios({
//   method: 'get',
//   url: `${getUrl}/`,
// })
//   .then( res => console.log('res', res.data))
//   .catch( err => console.log(err));

//   axios({
//     method: 'get',
//     url: `${getUrl}/houses`,
//   })
//     .then( res => console.log('res', res.data))
//     .catch( err => console.log(err));
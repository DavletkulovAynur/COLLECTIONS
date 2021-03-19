export default function(url, method, body = null, headers = {}) {
  return new Promise((resolve, reject) => {

   let _headers = {
      'Content-Type': 'application/json'
    };

    if (!headers['Content-Type']) {
        _headers = {...headers, ..._headers}
    }

    const data = body ? JSON.stringify(body) : null

    let options = {
      method: method,
      body: data,
      headers: _headers,
      cors: true
    }

      fetch(`${url}`, options)
      .then(async (res) => {
        if(!res.ok) {
          let data = await res.json(res);
          reject({ status: res.status, statusText: res.statusText, error: data.error || '' });
        } else {
          return res.json(res)
        }
      })
      .then((data) => {
        resolve(data)
      })
      .catch(err => {reject(err)});
  });
}

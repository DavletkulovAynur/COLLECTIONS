export default function(url, method, body = null, headers = {}, test = true) {
  return new Promise((resolve, reject) => {
   let _headers = {
      'Content-Type': 'application/json'
    };



      // ПЕРЕДЕЛАТЬ
    if (!headers['Content-Type']) {
        if(test) {
            _headers = {...headers, ..._headers}
        } else {
            _headers = {...headers}
        }

    }

    let data

    if(test) {
        data = body ? JSON.stringify(body) : null
    } else {
        data = body
    }


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
          reject({ status: res.status, statusText: res.statusText, error: data.error || '', message: data.message });
        } else {

          return (res)
        }
      })
      .then( async (res) => {
        let data = await res.json(res);
        console.log('data', data)
        resolve({status: res.status, statusText: res.statusText, data: data.resData, message: data.message})
      })
      .catch(err => {
          console.log('error', err)
          reject(err)
      });
  });
}

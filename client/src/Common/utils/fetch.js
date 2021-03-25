export default function(url, method, body = null, headers = {}, test = true) {
  return new Promise((resolve, reject) => {

      console.log('super')
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

    console.log(options)

      fetch(`${url}`, options)
      .then(async (res) => {

        if(!res.ok) {
            console.log('then-super', res)
          let data = await res.json(res);
          reject({ status: res.status, statusText: res.statusText, error: data.error || '' });
        } else {

          return (res)
        }
      })
      .then( async (res) => {
          console.log('res:', res)
        let data = await res.json(res);
        resolve({status: res.status, statusText: res.statusText, data})
      })
      .catch(err => {
          console.log('catch-error')
          reject(err)
      });
  });
}

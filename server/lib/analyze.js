const fs = require('fs')

let accessLogs = []

class Access {
  constructor(log) {
    this.log = log;
    this.ip = '';
    this.method = '';
    this.url = '';
    this.page = '';
    this.time = '';
    this.statusCode = '';
    this.userAgent = '';
  }

  grabIPAdress() {
    let re = /^((\d){1,3}\.){3}(\d){1,3}/
    let IP = re.exec(this.log)
    if (IP) {
      return IP[0]
    }
    return
  }

  grabHTTPMethod() {
    let re = /"([A-Z]*? )/
    let method = re.exec(this.log)
    if (method) {
      return method[1].trim();
    }
    return
  }

  grabURLAccess() {
    let re = / (\/.*? )/
    let url = re.exec(this.log)
    if (url) {
      return url[0]
    }
    return
  }

  grabDatetime() {
    let re = /(\[.*?\])/
    let date = re.exec(this.log)
    if (date) {
      return date[0]
    }
    return
  }

  grabPageURL() {
    let re = /"(https:\/\/(.*?))"/
    let page = re.exec(this.log)
    if (page) {
      return page[1]
    }
    return
  }

  grabStatusCode() {
    let re = /" ([0-9]{3})/
    let statusCode = re.exec(this.log);
    if (statusCode) {
      return statusCode[1]
    }
    return
  }

  grabUserAgent() {
    let re = /\/" (.*)"/
    let userAgent = re.exec(this.log)
    if (userAgent) {
      return userAgent[1]
    }
    return
  }
}

fs.readFile('./colonialairstr_apache_logs-2018-05-30_16-59-18.txt', 'utf-8', (err, data) => {
  let logs = data.split('\n')
  logs.forEach(log => {
    let access = new Access(log);
    access.ip = access.grabIPAdress();
    access.method = access.grabHTTPMethod();
    access.url = access.grabURLAccess();
    access.time = access.grabDatetime();
    access.page = access.grabPageURL();
    access.statusCode = access.grabStatusCode();
    access.userAgent = access.grabUserAgent();
    accessLogs.push(access);
  })

  fs.writeFile('./accesslogs.json', JSON.stringify(accessLogs), (err) => {
    if (err) {
      console.log(err)
    }

    console.log('file written')
  })
})
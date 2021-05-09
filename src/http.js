import baseUrl from './../configUrlDatabase';

export class Http {
  static HEADERS = { 'Content-Type': 'application/json' }
  static async get(params) {
    try {
      return await request(params, 'GET')
    } catch (error) {
      console.log(error)
      throw error
    }
  }
  static async post(params, data = {}) {
    try {
      return await request(params, 'POST', data)
    } catch (error) {
      console.log(error)
      throw error
    }
  }
  static async delete(params) {
    try {
      return await request(params, 'DELETE')
    } catch (error) {
      console.log(error)
    }
  }
  static async patch(params, data) {
    try {
      return await request(params, 'PATCH', data)
    } catch (error) {
      console.log(error)
    }
  }
}

async function request(params, method = 'GET', data) {
  const url = params ? `${baseUrl}${params}`  : `${baseUrl}`
  const config = {
    method,
    headers: Http.HEADERS
  }
  if (method === 'POST' || method ==='PATCH') {
    config.body = JSON.stringify(data)
  }
  const response = await fetch(url, config)
  return await response.json()
}
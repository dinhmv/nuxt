export default function ({ $axios, redirect, isDev, isStatic }) {
  $axios.onRequest(config => {
    //console.log( 'Making request to ' + config.url )
  })
  $axios.onResponse( response => {

  })
  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
  })
}
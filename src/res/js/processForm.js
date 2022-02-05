function validate(values) {
  if (!Object.values(values).every(x => /.+/.test(x))) {
    alert('Please fill all fileds')
    return false
  }
  if (!values['e-mail'].match(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/)) {
    alert('Please enter valid e-mail address')
    return false
  }
  return true
}


const processForm = async (e) => {
  const form = document.getElementById('form')

  if (form) {
    const rawData = new FormData(form)
    const fields = ['name', 'e-mail', 'text']
    const data = {}
    for (let i of fields) data[i] = rawData.get(i)

    const completed = validate(data)

    if (completed) {
      form.reset()

      let token = process.env.REACT_APP_BOT_TOKEN
      let chatId = process.env.REACT_APP_CHAT_ID


      let messageText = `Hey, new message from your portfolio contact form\nName: ${data.name}\nE-mail: ${data['e-mail']}\n\n${data.text}`
      fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
          'chat_id': chatId,
          'text': messageText
        })
      })
      e.target.textContent = 'Sent!'
      e.target.classList.add('button-sent')
      setTimeout(() => {
        e.target.classList.remove('button-sent')
        e.target.textContent = 'Send'
      }, 2000)
    }
  }
}

export default processForm
import twilio from 'twilio'

export default function sendMessage(req, res) {
  const accountSid = process.env.TWILIO_ACCOUNT_SID
  const token = process.env.TWILIO_AUTH_TOKEN
  const numberFrom = process.env.TWILIO_NUM
    /* eslint-disable */
  const numberTo = process.env.MY_NUM
    /* eslint-disable */

  const client = twilio(accountSid, token)
  const { phone, message } = req.body
  // console.log(phone, message);
  client.messages
    .create({
      body:
        'Thanks for visiting my website. Regards, sir Theseus! ' +
        '\n' +
        message,
      from: numberFrom,
      to: phone
    })
    /* eslint-disable */
    .then(message =>
      res.json({
        success: true
      })
    )
    /* eslint-disable */
    .catch(error => {
      console.log(error)
      res.json({
        success: false
      })
    })
}

import twilio from 'twilio';

export default function sendMessage(req, res) {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const token = process.env.TWILIO_AUTH_TOKEN;
  const client = twilio(accountSid, token);
  const { message } = req.body;
  // console.log(phone, message);
  client.messages
    .create({
      body: message,
      from: '+14847398727',
      to: '+46705580337',
    })
     /* eslint-disable */
    .then((message) =>
      res.json({
        success: true,
      })
    )
    /* eslint-disable */
    .catch((error) => {
      console.log(error);
      res.json({
        success: false,
      });
    });
}
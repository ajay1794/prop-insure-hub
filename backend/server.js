const express = require('express')
const { Resend } = require('resend')
const cors = require('cors')
require('dotenv').config()

const app = express()
app.use(cors({
  origin: '*'
}))

const dns = require('dns')
dns.setDefaultResultOrder('ipv4first')

const resend = new Resend(process.env.RESEND_API_KEY)
app.use(express.json())

app.get('/test', (req, res) => {
  res.send('CORS working')
})

app.post('/send-email', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body
    console.log("sending mail to:", process.env.TARGET_MAIL)

    await resend.emails.send({
      from: 'Prop-Insure Hub <onboarding@resend.dev>',
      to: process.env.TARGET_MAIL,
      subject: 'New Contact Form Submission',
      html: `
        <h2>New Lead</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    })

    res.status(200).json({ success: true })
  } catch (error) {
    console.error("EMAIL ERROR:", error)
    res.status(500).json({ success: false })
  }
})
console.log('EMAIL:', process.env.EMAIL_USER)
console.log('PASS:', process.env.EMAIL_PASS)
console.log('PORT:', process.env.PORT)
console.log('RECIEVER:', process.env.TARGET_MAIL)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
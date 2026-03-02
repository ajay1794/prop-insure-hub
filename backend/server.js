const express = require('express')
const nodemailer = require('nodemailer')
const cors = require('cors')
require('dotenv').config()

const app = express()
app.use(cors({
  origin: '*'
}))
app.use(express.json())

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // IMPORTANT (false for 587)
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})
app.get('/test', (req, res) => {
  res.send('CORS working')
})

app.post('/send-email', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body

    await transporter.sendMail({
      from: `"Prop-Insure Hub" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
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

    res.status(500).json({
      success: false,
      error: error.message
    })
  }
})
console.log('EMAIL:', process.env.EMAIL_USER)
console.log('PASS:', process.env.EMAIL_PASS)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
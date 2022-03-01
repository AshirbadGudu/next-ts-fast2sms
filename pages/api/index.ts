// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import fast2sms from 'fast-two-sms'
type Data = {
  message?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    var options = {
      authorization: process.env.FAST2SMS_API_KEY,
      message: 'YOUR_MESSAGE_HERE',
      numbers: ['7008614546'],
    }
    const response = await fast2sms.sendMessage(options)
    console.log(response)
    res.status(200).json({ message: 'message send successfully' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

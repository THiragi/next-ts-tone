import { NextApiRequest, NextApiResponse } from 'next';

export default async (
  _: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  const weather = await (await fetch(process.env.OPEN_WEATHER_MAP_URI)).json();

  return res.status(200).json({ daily: weather.daily });
};

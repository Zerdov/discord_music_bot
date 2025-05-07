require('dotenv').config();
import { Option, O } from '@mobily/ts-belt';

export const getEnv = (key: string): Option<string> => O.fromNullable(process.env[key]);

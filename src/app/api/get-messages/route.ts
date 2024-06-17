import { getServerSession } from 'next-auth/next';
import { authOptions } from '../auth/[...nextauth]/option';
import dbConnect from '@/lib/dbConnect';
import UserModel from '@/model/User';
import { User } from 'next-auth';

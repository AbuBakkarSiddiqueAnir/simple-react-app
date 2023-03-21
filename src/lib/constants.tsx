
import { ReactNode } from 'react';
import {Menu, User, Invoice} from '../assets'

export type LINK_TYPE= {
    key: string;
    label: string;
    path: string;
    icon: string ;
}

type SIDEBAR_LINKS_TYPE = LINK_TYPE[]

export const SIDEBAR_LINKS:SIDEBAR_LINKS_TYPE = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/',
		icon: Menu
	},
	{
		key: 'users',
		label: 'Users',
		path: '/users',
		icon: User
	},

	{
		key: 'sales',
		label: 'Sales',
		path: '/sales',
		icon: Invoice
	}
]


export const API_URL = 'https://reqres.in'
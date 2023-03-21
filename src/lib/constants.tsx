
import {Menu, User, Invoice} from '../assets'
import { SIDEBAR_LINKS_TYPE } from '../types/types'



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
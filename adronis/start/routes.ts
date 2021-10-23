/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'
import User from 'App/Models/User'
import UserValidator from 'App/Validators/UserValidator'
import {email} from "@adonisjs/validator/build/src/Validations";

Route.get('/', async ({ view }) => {
  return view.render('welcome')
})

Route.get('/users', async ({ view }) => {
  return view.render('user-form')
})

Route.post('/users', async ({ request, response }) => {
  const payload = await request.validate(UserValidator)
  await User.create(payload)
  response.redirect().back()
})

Route.get('/login', async ({ view }) => {
  return view.render('login')
})

Route.post('/login', async ({ request, response, auth }) => {
  const { email, password } = request.all(['email', 'password'])
  await auth.attempt(email, password)
  response.redirect().back()
})
